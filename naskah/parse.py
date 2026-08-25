#!/usr/bin/env python3
"""Pipeline lengkap: naskah bersih -> adegan.json -> game-data.js"""
import json, re, os

SRC = os.path.join(os.path.dirname(__file__), 'bersih.md')
lines = open(SRC).read().split('\n')

ZONES = [
 ("L1S1","Level 1",1,"Ruang Kelas","class",29,328),
 ("L1S2","Level 1",2,"Kantin","canteen",329,624),
 ("L1S3","Level 1",3,"Perpustakaan","library",625,894),
 ("BOSS1","Boss 1",0,"Negative Thoughts","boss1",895,992),
 ("L2S1","Level 2",1,"Taman Bermain","park",993,1236),
 ("L2S2","Level 2",2,"Taman Bermain","park",1237,1418),
 ("L2S3","Level 2",3,"Taman Bermain","park",1419,1568),
 ("BOSS2","Boss 2",0,"Physical Trauma","boss2",1569,1650),
 ("L3S1","Level 3",1,"Media Sosial","phone",1651,1716),
 ("L3S2","Level 3",2,"Media Sosial","phone",1717,1786),
 ("L3S3","Level 3",3,"Media Sosial","phone",1787,1854),
 ("BOSSF","Final Boss",0,"The Crack of Soul","crack",1855,1983),
]
GEMUK = {"Nadira", "Rafa"}
KURUS = {"Alya", "Reyan", "Reyana"}
NAMA_RE = r'\b(Nadira|Alya|Rafa|Reyana|Reyan)\b'

# penanda pergantian varian di dalam satu adegan
MARK = re.compile(r'^\s*(tindakan\s+bully\s+versi|versi\s+(karakter\s+)?(kurus|gemuk)|tindakan\s+yang\s+bisa\s+dipilih)',
                  re.I)
OPT_SPLIT = re.compile(r'(?=\*\*[1-4]\.\s)')
OPT_H = re.compile(r'^\*\*([1-4])\.\s*(.+?)\**\s*$')
SPK_H = re.compile(r'^\*\*(.{2,80}?):?\*\*:?\s*(.*)$')
# "Nama (sedang melakukan sesuatu)" -> nama + keterangan gerak
PAREN = re.compile(r'^([^()]+?)\s*\(([^()]+)\)\s*$')

BUKAN_NAMA = re.compile(r'^(alur|scene|babak|bagian|catatan|ting)\b', re.I)

def nama_sah(n):
    """Benar hanya kalau terlihat seperti nama pembicara, bukan kalimat."""
    dasar = n.split('(')[0].strip()
    if not dasar or len(dasar) > 28: return False
    if BUKAN_NAMA.match(dasar): return False
    if dasar[0].isdigit(): return False
    if re.search(r'[.?!]', dasar): return False
    if len(dasar.split()) > 4: return False
    return True
NARASI = ('Narasi Akhir', 'Narasi Penutup', 'Narasi penutup', 'Narasi Akhir:')

def explode(seg):
    out = []
    for ln in seg:
        parts = [p for p in OPT_SPLIT.split(ln) if p.strip()]
        out.extend(parts if len(parts) > 1 else [ln])
    return out

def mkline(ln):
    m = SPK_H.match(ln.strip())
    if m and m.group(1) not in NARASI and nama_sah(m.group(1)):
        penuh = m.group(1).strip()
        pm = PAREN.match(penuh)
        who, aksi = (pm.group(1).strip(), pm.group(2).strip()) if pm else (penuh, None)
        d = {"who": who, "text": m.group(2).strip().strip('*').strip('"“”')}
        if aksi: d["aksi"] = aksi
        return d
    return {"who": None, "text": ln.strip().strip('*')}

def varian_dari(txt):
    g = sum(len(re.findall(r'\b'+n+r'\b', txt)) for n in GEMUK)
    k = sum(len(re.findall(r'\b'+n+r'\b', txt)) for n in KURUS)
    return "gemuk" if g >= k else "kurus"

def aksi_dari(judul):
    j = judul.lower()
    if re.search(r'diam|abaikan|mengabaikan|menahan diri|tetap (duduk|membaca)|menutup hp', j): return 'diam'
    if re.search(r'membalas|memukul|melempar|marah', j): return 'balas'
    if re.search(r'guru|orang dewasa|petugas|dipercaya|orang tua|ibu\b', j): return 'lapor'
    if re.search(r'teman|pergi|menjauh|blokir|memblokir|tempat (lain|aman)|dukungan', j): return 'pergi'
    return None


SAMPAH = re.compile(r'^\s*(alur(\s+(scene|cerita))?|scene|babak|bagian)\b[^.!?]{0,40}$', re.I)

def buang_penanda(baris):
    """Buang penanda bagian naskah yang bukan bagian dari cerita."""
    return [l for l in baris if not (not l.get("who") and SAMPAH.match(l["text"] or ""))]

def gabung(baris):
    """Gabungkan baris yang hanya berisi nama pembicara dengan kalimat di bawahnya."""
    out = []
    for l in baris:
        if out and out[-1]["who"] and not out[-1]["text"] and not l["who"]:
            out[-1]["text"] = l["text"]
        elif l["who"] or l["text"]:
            out.append(l)
    return buang_penanda([l for l in out if l["text"]])

FX = {'diam': -5, 'balas': -15, 'pergi': 5, 'lapor': 15}

def parse_adegan(seg):
    """Kembalikan daftar blok varian: {intro:[], opsi:[...]}"""
    blocks, cur, last = [], {"intro": [], "opsi": []}, 0
    for ln in seg:
        m = OPT_H.match(ln.strip())
        if m:
            n = int(m.group(1))
            if n <= last and cur["opsi"]:
                # varian baru: pindahkan baris pembuka yang salah tempat
                intro_baru = []
                if cur["opsi"]:
                    ekor = cur["opsi"][-1]["lines"]
                    for i, l in enumerate(ekor):
                        if MARK.match(l.strip().strip('*')):
                            intro_baru = ekor[i+1:]
                            cur["opsi"][-1]["lines"] = ekor[:i]
                            break
                blocks.append(cur)
                cur = {"intro": intro_baru, "opsi": []}
            last = n
            cur["opsi"].append({"no": n, "judul": m.group(2).strip(), "lines": []})
        elif ln.strip():
            (cur["opsi"][-1]["lines"] if cur["opsi"] else cur["intro"]).append(ln)
    if cur["opsi"] or cur["intro"]:
        blocks.append(cur)
    return blocks

def parse_boss(seg):
    turns, cur = [], None
    for ln in seg:
        m = re.match(r'^\*\*Serangan\s*(Terakhir|[0-9]+)\s*:?\*\*\s*$', ln.strip())
        if m:
            cur = {"label": m.group(1), "final": m.group(1) == "Terakhir", "raw": []}
            turns.append(cur); continue
        if ln.strip() and cur:
            cur["raw"].append(ln.strip())
    splitter = re.compile(r'\s*(?=\b[ABC]\.\s)')
    optpat = re.compile(r'^([ABC])\.\s*(.+)$')
    for g in turns:
        frag = []
        for l in g.pop("raw"):
            for part in splitter.split(mkline(l)["text"]):
                if part.strip(): frag.append(part.strip())
        serangan, opsi = [], []
        for f in frag:
            m = optpat.match(f)
            if m:
                opsi.append({"label": m.group(1), "text": m.group(2).strip().strip('“”"'),
                             "benar": m.group(1) != "A"})
            else:
                serangan.append(f.strip('“”"'))
        g["serangan"] = " ".join(serangan)
        g["opsi"] = opsi
    return turns

scenes = []
for sid, lvl, no, loc, bg, a, b in ZONES:
    seg = explode(lines[a-1:b])
    if sid.startswith("BOSS"):
        scenes.append({"id": sid, "tipe": "boss", "level": lvl, "nama": loc, "bg": bg,
                       "giliran": parse_boss(seg)})
        continue
    blocks = parse_adegan(seg)
    varian = {}
    for blk in blocks:
        txt = " ".join(blk["intro"]) + " " + " ".join(l for o in blk["opsi"] for l in o["lines"])
        v = varian_dari(txt)
        if v in varian: v = "kurus" if v == "gemuk" else "gemuk"
        varian[v] = {
            "intro": gabung([mkline(l) for l in blk["intro"] if l.strip() and not MARK.match(l.strip().strip('*'))]),
            "opsi": [{"no": o["no"], "judul": o["judul"], "aksi": aksi_dari(o["judul"]),
                      "fx": FX.get(aksi_dari(o["judul"]), 0),
                      "lines": gabung([mkline(l) for l in o["lines"] if l.strip()])} for o in blk["opsi"]]
        }
    if sid.startswith("L3") and len(varian) == 1:
        varian = {"umum": list(varian.values())[0]}
    scenes.append({"id": sid, "tipe": "adegan", "level": lvl, "no": no, "lokasi": loc,
                   "bg": bg, "varian": varian})

# ganti nama tokoh dengan penanda
n_sub = 0
def sub(t):
    global n_sub
    t2, c = re.subn(NAMA_RE, '{NAMA}', t); n_sub += c; return t2
for s in scenes:
    if s["tipe"] == "boss":
        for g in s["giliran"]:
            g["serangan"] = sub(g["serangan"])
            for o in g["opsi"]: o["text"] = sub(o["text"])
    else:
        for v, blk in s["varian"].items():
            for l in blk["intro"]:
                l["text"] = sub(l["text"])
                if l.get("who"):  l["who"]  = sub(l["who"])
                if l.get("aksi"): l["aksi"] = sub(l["aksi"])
            for o in blk["opsi"]:
                o["judul"] = sub(o["judul"])
                for l in o["lines"]:
                    l["text"] = sub(l["text"])
                    if l.get("who"):  l["who"]  = sub(l["who"])
                    if l.get("aksi"): l["aksi"] = sub(l["aksi"])

here = os.path.dirname(__file__)
json.dump(scenes, open(os.path.join(here, 'adegan.json'), 'w'), ensure_ascii=False, indent=1)
open(os.path.join(here, 'game-data.js'), 'w').write(
    "const NASKAH = " + json.dumps(scenes, ensure_ascii=False) + ";\n")

# ---- laporan mutu ----
print(f"{'ID':<7}{'Varian':<16}{'Intro':<7}{'Opsi':<6}Baris dialog")
masalah = []
for s in scenes:
    if s["tipe"] == "boss":
        ok = sum(1 for g in s["giliran"] if len(g.get("opsi", [])) >= 2)
        print(f"{s['id']:<7}{'boss':<16}{'-':<7}{ok:<6}{sum(len(g['opsi']) for g in s['giliran'])} pilihan")
        if ok < 5: masalah.append(f"{s['id']} hanya {ok} giliran bertempur")
        continue
    for v, blk in s["varian"].items():
        nb = sum(len(o["lines"]) for o in blk["opsi"])
        print(f"{s['id']:<7}{v:<16}{len(blk['intro']):<7}{len(blk['opsi']):<6}{nb}")
        if not blk["intro"]: masalah.append(f"{s['id']}/{v} tidak punya baris pembuka")
        if len(blk["opsi"]) != 4: masalah.append(f"{s['id']}/{v} punya {len(blk['opsi'])} pilihan")
        for o in blk["opsi"]:
            if not o["aksi"]: masalah.append(f"{s['id']}/{v} opsi '{o['judul']}' tak terklasifikasi")
print(f"\nNama tokoh diganti: {n_sub} tempat")
print("Masalah:", "\n  - ".join([""] + masalah) if masalah else "tidak ada")
