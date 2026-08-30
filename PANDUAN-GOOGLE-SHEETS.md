# 📊 Panduan Integrasi Google Sheets & Data Pemain — The Crack of Soul

Fitur ini memungkinkan game mengirimkan identitas siswa (Nama, Asal Sekolah, Kelas) serta seluruh metrik keputusan dan hasil permainan ke **Google Spreadsheet guru / tim KIR** secara otomatis dan *real-time*.

---

## 🚀 Cara Menyiapkan Google Sheets (Hanya 2 Menit)

### Langkah 1: Buat Spreadsheet Baru
1. Buka browser dan kunjungi [https://sheets.new](https://sheets.new).
2. Beri nama spreadsheet, contoh: `Data Hasil Game - The Crack of Soul`.

### Langkah 2: Buka Apps Script
1. Di menu atas spreadsheet, klik **Extensions (Ekstensi)** > **Apps Script**.
2. Hapus seluruh baris kode contoh `function myFunction() { ... }` yang ada di editor.

### Langkah 3: Tempelkan Kode Script
1. Buka file [`google-apps-script.js`](./google-apps-script.js) di proyek ini.
2. Salin seluruh isinya, lalu tempelkan ke editor Google Apps Script.
3. Klik ikon **Save** (💾 Disket) di toolbar atas.

### Langkah 4: Publikasikan (Deploy) sebagai Web App
1. Klik tombol biru **Deploy** (di pojok kanan atas) > pilih **New deployment**.
2. Klik ikon gear/roda gigi di samping *"Select type"* > pilih **Web app**.
3. Isi konfigurasi berikut:
   - **Description**: `Endpoint Game Crack of Soul`
   - **Execute as**: `Me (email anda)`
   - **Who has access**: `Anyone` *(PENTING: Pilih "Anyone" agar siswa bisa mengirim data dari game tanpa harus login akun Google)*
4. Klik tombol **Deploy**.
5. Salin **Web app URL** yang muncul (formatnya: `https://script.google.com/macros/s/.../exec`).

### Langkah 5: Masukkan URL ke Game
Buka file [`src/game-shell.html`](./src/game-shell.html) dan cari variabel `CONFIG`:
```javascript
const CONFIG = {
  // Ganti string di bawah ini dengan URL Web App milik Anda:
  GAS_URL: "https://script.google.com/macros/s/XXXXX/exec",
  ...
};
```
Lalu jalankan `node build-game.js` untuk memperbarui file game tunggal `TheCrackOfSoul-v2.html`.

---

## 📋 Data yang Otomatis Tercatat di Spreadsheet

| Kolom | Keterangan |
|---|---|
| **Waktu Selesai (WIB)** | Tanggal & jam saat pemain menyelesaikan permainan |
| **Nama Siswa** | Nama lengkap/panggilan yang diinput di awal |
| **Asal Sekolah** | Asal sekolah yang diinput di awal |
| **Kelas** | Kelas/Rombel siswa (misal: IX-B / X-MIPA-1) |
| **Karakter** | Karakter yang dimainkan (Nadira, Alya, Rafa, Reyan) |
| **Hope Akhir** | Nilai Hope di akhir permainan |
| **Courage Akhir** | Nilai Courage di akhir permainan |
| **Mental Akhir** | Nilai Mental di akhir permainan |
| **Skor Pilihan Baik** | Nilai rekap keputusan positif |
| **Total Lapor** | Berapa kali siswa memilih opsi *Melaporkan* |
| **Total Pergi** | Berapa kali siswa memilih opsi *Pergi / Cari Bantuan* |
| **Total Diam** | Berapa kali siswa memilih opsi *Diam* |
| **Total Membalas** | Berapa kali siswa memilih opsi *Membalas* |
| **Jumlah Ulang Adegan** | Berapa kali pemain mengulang adegan karena status drop |
| **Durasi Main** | Total waktu bermain dari awal hingga tamat (dalam menit) |
| **Status Akhir** | Status kelulusan cerita (True Ending) |

---

## 📶 Bagaimana Jika Siswa Bermain Offline?
Game dilengkapi dengan mekanisme **Offline Safe**:
- Jika siswa tidak terhubung internet saat menyelesaikan game, data otomatis diantrekan dan disimpan di `localStorage` HP/komputer.
- Pada layar akhir, akan muncul pemberitahuan status *Offline* dan tombol **"Kirim Ulang"** yang bisa diklik kapan saja setelah perangkat terhubung ke internet.
