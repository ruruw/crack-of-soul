const NASKAH = [
  {
    "id": "L1S1",
    "tipe": "adegan",
    "level": "Level 1",
    "no": 1,
    "lokasi": "Ruang Kelas",
    "bg": "cg_l1s1",
    "varian": {
      "gemuk": {
        "intro": [
          {
            "who": null,
            "text": "Pada hari pertama semester baru, {NAMA} memasuki kelas barunya. Ia adalah seorang siswi yang memiliki tubuh gemuk, kulit hitam, dan rambut ikal. Karena merasa kurang percaya diri dengan penampilannya, {NAMA} memilih duduk di bangku paling belakang agar tidak terlalu menjadi pusat perhatian."
          },
          {
            "who": null,
            "text": "Namun, saat pelajaran belum dimulai, beberapa teman kelas mulai memperhatikan {NAMA}. Sekelompok siswi di sebelah kiri kelas saling berbisik sambil tertawa dan melontarkan ejekan seperti,"
          },
          {
            "who": "Teman 1",
            "text": "aku ngerasa gendutan deh, aku ga pede badan aku segini hahaha!\"* (padahal badan asli cewek ini adalah langsing ideal, ini hanyalah bentuk ejekan kepada nadira),"
          },
          {
            "who": "Teman 2",
            "text": "emang ada ya yang pede kalo badan nya segede gajah?* (sambil melihat kearah {NAMA})*"
          },
          {
            "who": null,
            "text": "Tidak lama kemudian, dua siswa laki-laki di sisi kanan kelas ikut mengejek dengan mengatakan,"
          },
          {
            "who": "Teman 3",
            "text": "eh setuju guys, emang ada ya yang pede kalo badannya aja ga muat masuk lewat pintu?\" semua nya melirik ke arah {NAMA} dan mulai tertawa."
          },
          {
            "who": null,
            "text": "Semua ejekan tersebut membuat {NAMA} merasa sangat malu, sedih, dan kehilangan kepercayaan diri. Ia hanya menundukkan kepala sambil menahan air mata tanpa mampu membalas perkataan teman-temannya. Pada momen inilah pemain mulai mengambil peran sebagai {NAMA} dan harus menentukan tindakan yang akan dilakukan."
          }
        ],
        "opsi": [
          {
            "no": 1,
            "judul": "Diam dan Menahan Diri",
            "aksi": "diam",
            "fx": -5,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} hanya menundukkan kepala sambil menggenggam ujung bajunya. Ia memilih untuk tidak menanggapi ejekan teman-temannya karena berharap mereka akan berhenti jika diabaikan. Namun, teman-temannya justru menganggap diamnya {NAMA} sebagai tanda bahwa ia lemah. Tawa mereka masih terdengar hingga guru memasuki kelas. Setelah keadaan tenang, {NAMA} tetap merasa sedih karena semua perkataan itu terus terngiang di pikirannya."
              },
              {
                "who": "{NAMA}",
                "text": "\"Aku... lebih baik diam. Semoga mereka cepat berhenti.\"",
                "aksi": "dalam hati"
              },
              {
                "who": null,
                "text": "Narasi Akhir:"
              },
              {
                "who": null,
                "text": "{NAMA} berhasil menghindari pertengkaran, tetapi rasa sakit di hatinya semakin dalam karena memilih memendam semuanya sendirian."
              }
            ]
          },
          {
            "no": 2,
            "judul": "Membalas Dengan Kata-kata",
            "aksi": "balas",
            "fx": -15,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} tidak mampu lagi menahan emosinya. Ia berdiri dari kursinya dan membalas semua ejekan yang diarahkan kepadanya. Suasana kelas langsung menjadi gaduh. Teman-temannya ikut terpancing sehingga terjadi adu mulut. Meskipun {NAMA} berhasil meluapkan perasaannya, konflik justru semakin membesar dan membuat keadaan menjadi lebih buruk."
              },
              {
                "who": "{NAMA}",
                "text": "\"Udah puas ngejek aku? Kalian pikir ini lucu?\""
              },
              {
                "who": "Teman 3",
                "text": "\"Loh... marah nih?\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Aku juga punya perasaan! Kalian nggak pernah mikir kalau omongan kalian nyakitin orang?\""
              },
              {
                "who": "Teman 1",
                "text": "\"Yaelah... cuma bercanda.\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Kalau menurut kalian bercanda, kenapa aku sakit hati karena omongan kalian?\""
              },
              {
                "who": "Teman 2",
                "text": "\"Lebay banget sih!\""
              },
              {
                "who": null,
                "text": "(Suasana kelas mulai ricuh hingga guru menoleh ke arah mereka.)"
              },
              {
                "who": null,
                "text": "Narasi Akhir:"
              },
              {
                "who": null,
                "text": "Pertengkaran membuat suasana kelas semakin tidak kondusif. Melampiaskan amarah dengan amarah tidak menyelesaikan masalah. guru akan melihat kamu sebagai salah satu dari oknum pertengkaran tsb dan tidak melihat kamu sebagai korban. lalu kejadian hari ini tidak akan terselesaikan dengan baik"
              }
            ]
          },
          {
            "no": 3,
            "judul": "Melaporkan ke Guru",
            "aksi": "lapor",
            "fx": 15,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} memutuskan untuk tidak membalas ejekan tersebut. Setelah pelajaran selesai, ia mengumpulkan keberanian dan menghampiri guru untuk menceritakan apa yang dialaminya. Guru mendengarkan dengan penuh perhatian, kemudian memanggil siswa yang mengejek dan memberikan nasihat agar kejadian serupa tidak terulang. {NAMA} merasa lebih tenang karena ada orang dewasa yang membelanya."
              },
              {
                "who": "{NAMA}",
                "text": "\"Bu... saya ingin bicara sebentar.\""
              },
              {
                "who": "Guru",
                "text": "\"Tentu, {NAMA}. Ada apa?\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Sejak tadi saya terus diejek teman-teman karena penampilan saya. Saya sudah mencoba diam, tapi mereka tetap melanjutkannya.\""
              },
              {
                "who": "Guru",
                "text": "\"Terima kasih sudah berani bercerita. Kamu sudah melakukan hal yang benar.\""
              },
              {
                "who": null,
                "text": "(Guru memanggil siswa yang mengejek.)"
              },
              {
                "who": "Guru",
                "text": "\"Perkataan kalian sudah menyakiti teman kalian. Itu bukan candaan, melainkan perundungan. Tolong minta maaf kepada {NAMA}.\""
              },
              {
                "who": "Teman",
                "text": "\"Maaf, {NAMA}... kami nggak sadar kalau perkataan kami bikin kamu terluka.\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Aku harap kalian benar-benar berhenti. Aku cuma ingin belajar dengan tenang.\""
              },
              {
                "who": null,
                "text": "Narasi Akhir:"
              },
              {
                "who": null,
                "text": "Keberanian {NAMA} untuk mencari bantuan membuatnya merasa lebih aman dan dihargai."
              }
            ]
          },
          {
            "no": 4,
            "judul": "Mencari Dukungan Teman Baik",
            "aksi": "pergi",
            "fx": 5,
            "lines": [
              {
                "who": null,
                "text": "Saat jam istirahat, {NAMA} menghampiri teman yang paling ia percaya. Ia menceritakan semua ejekan yang diterimanya sejak pagi. Temannya mendengarkan tanpa menghakimi dan memberikan semangat agar {NAMA} tidak menyalahkan dirinya sendiri. Dukungan itu membuat {NAMA} merasa tidak sendirian dan lebih siap menghadapi keadaan."
              },
              {
                "who": "{NAMA}",
                "text": "\"Boleh aku cerita sesuatu?\""
              },
              {
                "who": "Teman Baik",
                "text": "\"Tentu. Kamu kelihatan sedih. Ada apa?\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Mereka dari tadi ngejek aku... bilang aku gendut, jelek, dan macam-macam.\""
              },
              {
                "who": "Teman Baik",
                "text": "\"Jangan percaya sama omongan mereka. Mereka yang salah karena menghina orang lain.\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Aku jadi nggak percaya diri...\""
              },
              {
                "who": "Teman Baik",
                "text": "\"Aku bakal nemenin kamu. Kalau mereka mulai ngejek lagi, kita bisa lapor ke guru bersama.\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Makasih ya... sekarang aku merasa sedikit lebih kuat.\""
              },
              {
                "who": null,
                "text": "Narasi Akhir:"
              },
              {
                "who": null,
                "text": "Dukungan dari teman yang peduli membuat {NAMA} sadar bahwa ia tidak harus menghadapi semuanya sendirian."
              }
            ]
          }
        ]
      },
      "kurus": {
        "intro": [
          {
            "who": null,
            "text": "Hari pertama semester baru dimulai. Suasana kelas masih riuh oleh obrolan para siswa yang saling berbagi cerita selama liburan. Di tengah keramaian itu, {NAMA} melangkah masuk dengan raut wajah gugup. Tubuhnya kurus, kulitnya tampak pucat, dan jerawat memenuhi sebagian wajahnya. Menyadari banyak pasang mata yang menoleh ke arahnya, ia segera menundukkan kepala. Tanpa berkata apa pun, {NAMA} berjalan ke bangku paling belakang dan duduk di sana, berharap keberadaannya tidak menarik perhatian siapa pun. Namun, beberapa siswa mulai melirik, saling berbisik, dan melemparkan tatapan penuh penilaian ke arahnya."
          },
          {
            "who": "Perempuan 1",
            "text": "\"Ya ampun… dia bangun tidur langsung sekolah ya?.\"",
            "aksi": "menatap {NAMA} dari atas ke bawah"
          },
          {
            "who": "Perempuan 2",
            "text": "\"Serius, aku juga mikir gitu. kayaknya dia juga ga mandi dulu deh.\"",
            "aksi": "tertawa pelan"
          },
          {
            "who": "Perempuan 3",
            "text": "\"ya iyalah, orang yang rajin cuci muka kan mukanya ga jerawatan kayak gitu.\""
          },
          {
            "who": "Perempuan 2",
            "text": "\"Pantes dia duduk di belakang. Mungkin takut orang lihat mukanya.\""
          },
          {
            "who": "Perempuan 1",
            "text": "\"Heran deh, masih berani datang ke sekolah. Aku aja malu kalau jadi dia.\""
          },
          {
            "who": "Perempuan 2",
            "text": "\"Untung dia duduk paling belakang. Jadi nggak ganggu pemandangan.\""
          },
          {
            "who": "Laki-laki 2",
            "text": "\"Kasihan sih... tapi lebih kasihan yang harus lihat dia tiap hari.\""
          },
          {
            "who": null,
            "text": "(Mereka tertawa kecil. {NAMA} mendengar semuanya. Tangannya menggenggam erat tali tas, matanya mulai berkaca-kaca, tetapi ia tetap diam dan menundukkan kepala.)"
          },
          {
            "who": null,
            "text": "Semua ejekan tersebut membuat {NAMA} merasa sangat malu, sedih, dan kehilangan kepercayaan diri. Ia hanya menundukkan kepala sambil menahan air mata tanpa mampu membalas perkataan teman-temannya. Pada momen inilah pemain mulai mengambil peran sebagai {NAMA} dan harus menentukan tindakan yang akan dilakukan."
          }
        ],
        "opsi": [
          {
            "no": 1,
            "judul": "Diam dan Menahan Diri",
            "aksi": "diam",
            "fx": -5,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} hanya menundukkan kepala sambil menggenggam ujung bajunya. Ia memilih untuk tidak menanggapi ejekan teman-temannya karena berharap mereka akan berhenti jika diabaikan. Namun, teman-temannya justru menganggap diamnya {NAMA} sebagai tanda bahwa ia lemah. Tawa mereka masih terdengar hingga guru memasuki kelas. Setelah keadaan tenang, {NAMA} tetap merasa sedih karena semua perkataan itu terus terngiang di pikirannya."
              },
              {
                "who": "{NAMA}",
                "text": "\"Aku... lebih baik diam. Semoga mereka cepat berhenti.\"",
                "aksi": "dalam hati"
              },
              {
                "who": null,
                "text": "Narasi Akhir:"
              },
              {
                "who": null,
                "text": "{NAMA} berhasil menghindari pertengkaran, tetapi rasa sakit di hatinya semakin dalam karena memilih memendam semuanya sendirian."
              }
            ]
          },
          {
            "no": 2,
            "judul": "Membalas Dengan Kata-kata",
            "aksi": "balas",
            "fx": -15,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} tidak mampu lagi menahan emosinya. Ia berdiri dari kursinya dan membalas semua ejekan yang diarahkan kepadanya. Suasana kelas langsung menjadi gaduh. Teman-temannya ikut terpancing sehingga terjadi adu mulut. Meskipun {NAMA} berhasil meluapkan perasaannya, konflik justru semakin membesar dan membuat keadaan menjadi lebih buruk."
              },
              {
                "who": "{NAMA}",
                "text": "\"Udah puas ngejek aku? Kalian pikir ini lucu?\""
              },
              {
                "who": "Teman 3",
                "text": "\"Loh... marah nih?\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Aku juga punya perasaan! Kalian nggak pernah mikir kalau omongan kalian nyakitin orang?\""
              },
              {
                "who": "Teman 1",
                "text": "\"Yaelah... cuma bercanda.\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Kalau menurut kalian bercanda, kenapa aku sakit hati karena omongan kalian?\""
              },
              {
                "who": "Teman 2",
                "text": "\"Lebay banget sih!\""
              },
              {
                "who": null,
                "text": "(Suasana kelas mulai ricuh hingga guru menoleh ke arah mereka.)"
              },
              {
                "who": null,
                "text": "Narasi Akhir:"
              },
              {
                "who": null,
                "text": "Pertengkaran membuat suasana kelas semakin tidak kondusif. Melampiaskan amarah dengan amarah tidak menyelesaikan masalah. guru akan melihat kamu sebagai salah satu dari oknum pertengkaran tsb dan tidak melihat kamu sebagai korban. lalu kejadian hari ini tidak akan terselesaikan dengan baik."
              }
            ]
          },
          {
            "no": 3,
            "judul": "Melaporkan ke Guru",
            "aksi": "lapor",
            "fx": 15,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} memutuskan untuk tidak membalas ejekan tersebut. Setelah pelajaran selesai, ia mengumpulkan keberanian dan menghampiri guru untuk menceritakan apa yang dialaminya. Guru mendengarkan dengan penuh perhatian, kemudian memanggil siswa yang mengejek dan memberikan nasihat agar kejadian serupa tidak terulang. {NAMA} merasa lebih tenang karena ada orang dewasa yang membelanya."
              },
              {
                "who": "{NAMA}",
                "text": "\"Bu... saya ingin bicara sebentar.\""
              },
              {
                "who": "Guru",
                "text": "\"Tentu, {NAMA}. Ada apa?\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Sejak tadi saya terus diejek teman-teman karena penampilan saya. Saya sudah mencoba diam, tapi mereka tetap melanjutkannya.\""
              },
              {
                "who": "Guru",
                "text": "\"Terima kasih sudah berani bercerita. Kamu sudah melakukan hal yang benar.\""
              },
              {
                "who": null,
                "text": "(Guru memanggil siswa yang mengejek.)"
              },
              {
                "who": "Guru",
                "text": "\"Perkataan kalian sudah menyakiti teman kalian. Itu bukan candaan, melainkan perundungan. Tolong minta maaf kepada {NAMA}.\""
              },
              {
                "who": "Teman",
                "text": "\"Maaf, {NAMA}... kami nggak sadar kalau perkataan kami bikin kamu terluka.\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Aku harap kalian benar-benar berhenti. Aku cuma ingin belajar dengan tenang.\""
              },
              {
                "who": null,
                "text": "Narasi Akhir:"
              },
              {
                "who": null,
                "text": "Keberanian {NAMA} untuk mencari bantuan membuatnya merasa lebih aman dan dihargai."
              }
            ]
          },
          {
            "no": 4,
            "judul": "Mencari Dukungan Teman Baik",
            "aksi": "pergi",
            "fx": 5,
            "lines": [
              {
                "who": null,
                "text": "Saat jam istirahat, {NAMA} menghampiri teman yang paling ia percaya. Ia menceritakan semua ejekan yang diterimanya sejak pagi. Temannya mendengarkan tanpa menghakimi dan memberikan semangat agar {NAMA} tidak menyalahkan dirinya sendiri. Dukungan itu membuat {NAMA} merasa tidak sendirian dan lebih siap menghadapi keadaan."
              },
              {
                "who": "{NAMA}",
                "text": "\"Boleh aku cerita sesuatu?\""
              },
              {
                "who": "Teman Baik",
                "text": "\"Tentu. Kamu kelihatan sedih. Ada apa?\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Mereka dari tadi ngejek aku... bilang aku gendut, jelek, dan macam-macam.\""
              },
              {
                "who": "Teman Baik",
                "text": "\"Jangan percaya sama omongan mereka. Mereka yang salah karena menghina orang lain.\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Aku jadi nggak percaya diri...\""
              },
              {
                "who": "Teman Baik",
                "text": "\"Aku bakal nemenin kamu. Kalau mereka mulai ngejek lagi, kita bisa lapor ke guru bersama.\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Makasih ya... sekarang aku merasa sedikit lebih kuat.\""
              },
              {
                "who": null,
                "text": "Narasi Akhir:"
              },
              {
                "who": null,
                "text": "Dukungan dari teman yang peduli membuat {NAMA} sadar bahwa ia tidak harus menghadapi semuanya sendirian."
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "L1S2",
    "tipe": "adegan",
    "level": "Level 1",
    "no": 2,
    "lokasi": "Kantin",
    "bg": "cg_l1s2",
    "varian": {
      "kurus": {
        "intro": [
          {
            "who": null,
            "text": "Setelah jam pelajaran pertama selesai, {NAMA} pergi ke kantin untuk makan siang seorang diri. Ia mengambil makanan lalu mencari tempat duduk yang kosong. Baru saja hendak mulai makan, sekelompok siswa datang menghampiri meja {NAMA} sambil tertawa."
          },
          {
            "who": null,
            "text": "Mereka mulai memperhatikan tubuh {NAMA} yang kurus, lalu menjadikannya bahan ejekan."
          },
          {
            "who": null,
            "text": "({NAMA} duduk membelakangi mereka di tengah kantin, memegang sendoknya dan membeku. Kelompok murid di meja belakang melirik ke arahnya sambil pura-pura sibuk.)"
          },
          {
            "who": "Perempuan 1",
            "text": "“Eh, kalian sadar nggak sih kalau {NAMA} sekarang kelihatan makin pucat?”",
            "aksi": "Berbisik tajam sambil memiringkan kepala"
          },
          {
            "who": "Laki-laki 1",
            "text": "“Iya, aku juga baru sadar. Badannya kelihatan kurus banget sampai seragamnya seperti kebesaran.”",
            "aksi": "Tertawa kecil, menyandarkan badan"
          },
          {
            "who": null,
            "text": "({NAMA} meletakkan sendoknya perlahan. Bunyi *klinting* sendok terdengar jelas.)"
          },
          {
            "who": "Perempuan 1",
            "text": "“Padahal dulu kayaknya nggak sepucat itu deh.”",
            "aksi": "Berbisik dengan intonasi kepura-puraan yang dalam"
          },
          {
            "who": "Laki-laki 1",
            "text": "“Mungkin dia memang jarang makan. Tapi kalau aku lihat sih, dia memang kelihatan beda banget dari yang lain.”",
            "aksi": "Mengangkat bahu"
          },
          {
            "who": "Perempuan 3",
            "text": "“Aku kadang suka heran kalau dia lewat depan kelas. Jalannya pelan banget, terus mukanya selalu kelihatan murung.”"
          },
          {
            "who": "Laki-laki 2",
            "text": "\"Sudahlah, jangan ngomong terlalu keras. Nanti dia dengar.”",
            "aksi": "Menegur dengan nada malas, setengah tertawa"
          },
          {
            "who": "Laki-laki 1",
            "text": "“Kalau aku jadi dia, mungkin aku bakal lebih sering ngaca sebelum pergi ke sekolah.”",
            "aksi": "Terkekeh kecil"
          },
          {
            "who": null,
            "text": "Mendengar ejekan itu, {NAMA} hanya menatap makanannya. Selera makannya perlahan hilang."
          },
          {
            "who": null,
            "text": "Kini pemain harus menentukan bagaimana {NAMA} menghadapi situasi tersebut."
          }
        ],
        "opsi": [
          {
            "no": 1,
            "judul": "Tetap Duduk dan mengabaikan ejekannya",
            "aksi": "diam",
            "fx": -5,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} memilih tetap duduk dan berusaha fokus menghabiskan makanannya. Ia tidak ingin mencari masalah dan berharap teman-temannya segera bosan mengejeknya. Namun, mereka terus tertawa dan melemparkan komentar hingga akhirnya pergi sendiri."
              },
              {
                "who": "{NAMA}",
                "text": "\"Aku cuma ingin makan dengan tenang... Semoga mereka cepat pergi.\"",
                "aksi": "dalam hati"
              }
            ]
          },
          {
            "no": 2,
            "judul": "Membalas ejekan mereka",
            "aksi": "balas",
            "fx": -15,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} tidak tahan lagi mendengar hinaan yang terus dilontarkan kepadanya. Ia berdiri dan membalas perkataan mereka. Suasana kantin menjadi ramai karena beberapa siswa mulai memperhatikan keributan tersebut."
              },
              {
                "who": "{NAMA}",
                "text": "\"Memangnya tubuhku ngaruh ke hidup kalian?\"",
                "aksi": "(Membentak dengan suara keras)"
              },
              {
                "who": "Teman 2",
                "text": "\"Wih... marah nih.\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Aku makan buat diriku sendiri, bukan buat memenuhi standar kalian!\""
              },
              {
                "who": "Teman 3",
                "text": "\"Yaelah... cuma bercanda.\"",
                "aksi": "(Sambil memutar bola mata malas)"
              },
              {
                "who": "{NAMA}",
                "text": "\"Kalau kalian terus menghina orang, itu bukan bercanda!\"",
                "aksi": "Kesal dengan balasan lawan bicaranya"
              },
              {
                "who": "Teman 1",
                "text": "\"Sensitif banget sih.\""
              },
              {
                "who": null,
                "text": "(Keributan mulai menarik perhatian siswa lain.)"
              },
              {
                "who": null,
                "text": "Narasi Penutup:"
              },
              {
                "who": null,
                "text": "{NAMA} berhasil melampiaskan emosinya, tetapi suasana menjadi semakin panas dan tidak menyelesaikan masalah."
              }
            ]
          },
          {
            "no": 3,
            "judul": "Pergi dari Kantin dan Mencari Tempat Lain",
            "aksi": "pergi",
            "fx": 5,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} memilih mengangkat makanannya lalu berjalan meninggalkan kantin. Ia mencari tempat yang lebih sepi agar bisa makan dengan tenang tanpa harus mendengar ejekan lagi."
              },
              {
                "who": "Teman 1",
                "text": "\"Eh, kabur tuh!\"",
                "aksi": "Melihat {NAMA} pergi dari kantin"
              },
              {
                "who": "Teman 2",
                "text": "\"Hahaha... baper banget.\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Aku lebih baik pergi daripada terus mendengar mereka.\"",
                "aksi": "dalam hati"
              },
              {
                "who": null,
                "text": "({NAMA} menemukan bangku kosong di taman sekolah dan melanjutkan makan siangnya.)"
              },
              {
                "who": null,
                "text": "Narasi Penutup:"
              },
              {
                "who": null,
                "text": "{NAMA} berhasil menjauh dari situasi yang membuatnya tidak nyaman, tetapi perkataan teman-temannya masih terus teringat di pikirannya."
              }
            ]
          },
          {
            "no": 4,
            "judul": "Meminta bantuan Kepada Guru",
            "aksi": "lapor",
            "fx": 15,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} memilih mendekati guru piket yang sedang berada di sekitar kantin. Ia menceritakan bahwa dirinya terus diejek saat sedang makan. Guru kemudian menghampiri kelompok siswa tersebut dan memberikan teguran."
              },
              {
                "who": "{NAMA}",
                "text": "\"Bu, boleh saya minta bantuan?\""
              },
              {
                "who": "Guru",
                "text": "\"Ada apa, {NAMA}?\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Teman-teman terus mengejek saya karena tubuh saya. Saya jadi nggak nyaman makan di kantin.\""
              },
              {
                "who": "Guru",
                "text": "\"Terima kasih sudah berani bercerita.\""
              },
              {
                "who": null,
                "text": "(Guru menghampiri kelompok siswa.)"
              },
              {
                "who": "Guru",
                "text": "\"Menghina kondisi fisik teman bukanlah candaan. Tolong hentikan dan minta maaf.\""
              },
              {
                "who": "Teman",
                "text": "\"Maaf, {NAMA}... kami keterlaluan.\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Saya cuma ingin bisa makan dengan tenang seperti yang lain.\""
              },
              {
                "who": null,
                "text": "Narasi Penutup:"
              },
              {
                "who": null,
                "text": "{NAMA} merasa lebih lega karena ada orang yang membelanya. Ia menyadari bahwa meminta bantuan bukanlah tanda kelemahan."
              }
            ]
          }
        ]
      },
      "gemuk": {
        "intro": [
          {
            "who": null,
            "text": "Setelah jam pelajaran pertama selesai, {NAMA} pergi ke kantin untuk makan siang seorang diri. Ia mengambil makanan lalu mencari tempat duduk yang kosong. Saat baru saja duduk dan hendak mulai makan, sekelompok siswa menghampiri meja"
          },
          {
            "who": null,
            "text": "{NAMA}. Mereka saling tertawa sambil memperhatikan tubuh {NAMA} yang gemuk. Tanpa merasa bersalah, mereka mulai melontarkan ejekan."
          },
          {
            "who": null,
            "text": "({NAMA} duduk membelakangi mereka di tengah kantin, memegang sendoknya dan membeku. Kelompok murid di meja belakang melirik ke arahnya sambil berpura-pura sibuk.)"
          },
          {
            "who": "Perempuan 1",
            "text": "“Eh, kalian sadar nggak sih kalau {NAMA} sekarang kelihatan makin berisi?”",
            "aksi": "Berbisik sambil melirik ke arah {NAMA}"
          },
          {
            "who": "Laki-laki 1",
            "text": "“Iya, aku juga baru sadar. Seragamnya sampai kelihatan agak ketat.”",
            "aksi": "Tertawa kecil, menyandarkan badan"
          },
          {
            "who": "Perempuan 2",
            "text": "“Padahal kalau duduk, kelihatan banget bedanya.”",
            "aksi": "Menatap ke arah {NAMA} dengan dahi berkerut"
          },
          {
            "who": "Perempuan 3",
            "text": "“Aku pernah lihat dia waktu olahraga. Baru beberapa putaran saja sudah kelihatan capek.”",
            "aksi": "Menimpali cepat, hampir memotong"
          },
          {
            "who": null,
            "text": "{NAMA} meletakkan sendoknya perlahan. Bunyi *klinting* sendok terdengar jelas."
          },
          {
            "who": "Laki-laki 2",
            "text": "“Iya, terus kalau ada kegiatan yang harus banyak gerak, dia biasanya paling belakang.”"
          },
          {
            "who": "Perempuan 2",
            "text": "“Aku kadang bingung juga kalau dia ikut main bareng. Tempatnya jadi terasa lebih sempit.”",
            "aksi": "Sambil meneguk minumannya"
          },
          {
            "who": "Laki-laki 1",
            "text": "\"Dia tuh nggak jahat, cuma... *menuh menuhin tempat* aja kalau lewat di koridor, bikin sempit.\"",
            "aksi": "(Mengangkat bahu)"
          },
          {
            "who": "Laki-laki 2",
            "text": "\"Jangan ngomong terlalu keras. Nanti {NAMA} dengar.”",
            "aksi": "Menegur dengan nada malas, setengah tertawa"
          },
          {
            "who": "Laki-laki 1",
            "text": "“Kalau aku jadi dia, mungkin aku bakal lebih sering sadar diri sebelum pergi ke sekolah.”",
            "aksi": "Terkekeh dingin"
          },
          {
            "who": null,
            "text": "Mendengar ejekan tersebut, {NAMA} hanya menatap makanannya. Ia merasa malu dan kehilangan selera makan."
          },
          {
            "who": null,
            "text": "Kini pemain harus menentukan tindakan {NAMA}."
          }
        ],
        "opsi": [
          {
            "no": 1,
            "judul": "Diam dan Mengabaikan",
            "aksi": "diam",
            "fx": -5,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} memilih tetap duduk dan mencoba mengabaikan semua ejekan yang diterimanya. Ia berharap teman-temannya akan berhenti jika tidak ditanggapi. Namun, mereka justru semakin tertawa dan terus mengomentari tubuhnya hingga akhirnya pergi sendiri."
              },
              {
                "who": null,
                "text": "{NAMA} (Dalam hati)"
              },
              {
                "who": null,
                "text": "\"Aku cuma ingin makan dengan tenang... Semoga mereka cepat pergi.\""
              }
            ]
          },
          {
            "no": 2,
            "judul": "Membalas ejekan mereka",
            "aksi": "balas",
            "fx": -15,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} tidak mampu lagi menahan emosinya. Ia berdiri dari kursinya dan membalas semua perkataan teman-temannya. Suasana kantin menjadi gaduh karena banyak siswa mulai memperhatikan keributan tersebut."
              },
              {
                "who": "{NAMA}",
                "text": "\"Emangnya badan aku bikin kalian rugi?\"",
                "aksi": "Mendatangi pelaku dan menegur dengan suara keras"
              },
              {
                "who": "Teman 2",
                "text": "\"Wih, marah nih!\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Aku capek terus dijadikan bahan ejekan. Apa kalian nggak punya hal lain selain menghina orang?\""
              },
              {
                "who": "Teman 3",
                "text": "\"Yaelah... cuma bercanda.\"",
                "aksi": "Sambil memutar bola mata malas"
              },
              {
                "who": "{NAMA}",
                "text": "\"Kalau kalian yang dihina setiap hari, apa masih bisa ketawa?\""
              },
              {
                "who": "Teman 1",
                "text": "\"Baper banget sih.\""
              },
              {
                "who": null,
                "text": "Narasi Penutup"
              },
              {
                "who": null,
                "text": "{NAMA} berhasil meluapkan emosinya, tetapi pertengkaran justru membuat situasi semakin buruk."
              }
            ]
          },
          {
            "no": 3,
            "judul": "Pergi dari kantin dan mencari tempat lain",
            "aksi": "pergi",
            "fx": 5,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} memilih mengangkat makanannya lalu meninggalkan kantin. Ia mencari tempat yang lebih tenang agar bisa menghabiskan makan siangnya tanpa terus mendengar ejekan."
              },
              {
                "who": "Teman 1",
                "text": "\"Eh, kabur tuh!\"",
                "aksi": "Melihat {NAMA} pergi dari kantin"
              },
              {
                "who": "Teman 2",
                "text": "\"Hahaha... baper banget.\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Aku lebih baik pergi daripada terus mendengar mereka.\"",
                "aksi": "dalam hati"
              },
              {
                "who": null,
                "text": "{NAMA} menemukan bangku kosong di taman sekolah dan melanjutkan makan siangnya."
              },
              {
                "who": null,
                "text": "Narasi Penutup:"
              },
              {
                "who": null,
                "text": "{NAMA} berhasil menjauh dari situasi yang membuatnya tidak nyaman, tetapi perkataan teman-temannya masih terus teringat di pikirannya."
              }
            ]
          },
          {
            "no": 4,
            "judul": "Meminta bantuan kepada guru",
            "aksi": "lapor",
            "fx": 15,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} memutuskan untuk meminta bantuan. Ia menghampiri guru piket yang berada di sekitar kantin dan menceritakan apa yang baru saja dialaminya. Guru kemudian mendatangi kelompok siswa tersebut dan memberikan teguran karena telah melakukan perundungan."
              },
              {
                "who": "{NAMA}",
                "text": "\"Bu, boleh saya minta bantuan?\""
              },
              {
                "who": "Guru",
                "text": "\"Ada apa, {NAMA}?\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Teman-teman terus mengejek saya karena tubuh saya. Saya jadi nggak nyaman makan di kantin.\""
              },
              {
                "who": "Guru",
                "text": "\"Terima kasih sudah berani bercerita.\""
              },
              {
                "who": null,
                "text": "(Guru menghampiri kelompok siswa.)"
              },
              {
                "who": "Guru",
                "text": "\"Menghina kondisi fisik teman bukanlah candaan. Tolong hentikan dan minta maaf.\""
              },
              {
                "who": "Teman",
                "text": "\"Maaf, {NAMA}... kami keterlaluan.\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Saya cuma ingin bisa makan dengan tenang seperti yang lain.\""
              },
              {
                "who": null,
                "text": "Narasi Penutup:"
              },
              {
                "who": null,
                "text": "{NAMA} merasa lebih lega karena ada orang yang membelanya. Ia menyadari bahwa meminta bantuan bukanlah tanda kelemahan."
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "L1S3",
    "tipe": "adegan",
    "level": "Level 1",
    "no": 3,
    "lokasi": "Perpustakaan",
    "bg": "cg_l1s3",
    "varian": {
      "gemuk": {
        "intro": [
          {
            "who": null,
            "text": "Setelah jam istirahat berakhir, {NAMA} pergi ke perpustakaan untuk mengerjakan tugas kelompok yang harus dikumpulkan hari itu. Ia memilih duduk di sudut ruangan agar dapat membaca dan menyelesaikan tugas dengan tenang."
          },
          {
            "who": null,
            "text": "Beberapa menit kemudian, sekelompok siswa yang sebelumnya mengejek {NAMA} di kantin kembali melihatnya. Mereka mendekati meja {NAMA} sambil tertawa pelan agar tidak menarik perhatian petugas perpustakaan. Tanpa rasa bersalah, mereka kembali melontarkan ejekan mengenai bentuk tubuh {NAMA}."
          },
          {
            "who": null,
            "text": "({NAMA} duduk membelakangi mereka di meja baca, menunduk memegang pulpen dan bukunya. Kelompok murid di meja belakang berbisik-bisik sambil pura-pura baca buku.)"
          },
          {
            "who": "Perempuan 1",
            "text": "\"Lihat deh si {NAMA}... Duduk di situ terus. Makan tempat banget nggak sih?\"",
            "aksi": "Berbisik lumayan keras ke samping"
          },
          {
            "who": null,
            "text": "({NAMA} berhenti menulis. Tangan yang memegang pulpen menegang, dia makin menundukkan kepala.)"
          },
          {
            "who": "Laki-laki 2",
            "text": "\"Kemarin aja aku mau ambil buku di lorong rak tempat dia berdiri, langsung balik badan. Jalannya ketutup semua sama dia.\"",
            "aksi": "Sambil memutar-mutar pensil"
          },
          {
            "who": "Laki-laki 1",
            "text": "\"Dia tuh nggak jahat sih, cuma... bikin risih aja kalau lewat di depan kita.\"",
            "aksi": "(Mengangkat bahu)"
          },
          {
            "who": "Perempuan 3",
            "text": "\"Makanya kalau dia berdiri mau lewat, aku sengaja geser jauh-jauh. Malas aja kalau sampai kesenggol.\"",
            "aksi": "Memutar bola mata"
          },
          {
            "who": "Laki-laki 2",
            "text": "\"Pelan-pelan, ntar orangnya dengar.\"",
            "aksi": "Menegur pelan setengah bercanda"
          },
          {
            "who": "Laki-laki 1",
            "text": "“Gapapa lah, biarin aja”",
            "aksi": "Terkekeh dingin"
          },
          {
            "who": null,
            "text": "Suasana perpustakaan yang seharusnya tenang berubah menjadi tidak nyaman bagi {NAMA}. Ia berusaha tetap fokus membaca, tetapi ejekan itu membuatnya sulit berkonsentrasi."
          },
          {
            "who": null,
            "text": "Kini pemain harus menentukan tindakan {NAMA}."
          }
        ],
        "opsi": [
          {
            "no": 1,
            "judul": "Tetap membaca dan mengabaikan ejekan",
            "aksi": "diam",
            "fx": -5,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} memilih tetap duduk dan melanjutkan membaca bukunya. Ia tidak ingin membuat keributan di perpustakaan. Meskipun ejekan masih terdengar beberapa saat, {NAMA} berusaha mengendalikan emosinya hingga akhirnya para siswa tersebut pergi karena bosan."
              },
              {
                "who": "{NAMA}",
                "text": "\"Aku harus fokus sama tugasku. Jangan sampai mereka mengganggu tujuanku.\"",
                "aksi": "dalam hati"
              }
            ]
          },
          {
            "no": 2,
            "judul": "Membalas ejekan",
            "aksi": "balas",
            "fx": -15,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} tidak mampu lagi menahan emosinya. Ia berdiri dan membalas semua ejekan yang ditujukan kepadanya. Suara mereka semakin keras hingga mengganggu pengunjung perpustakaan lainnya."
              },
              {
                "who": "Teman 1",
                "text": "\"Lemari berjalan marah nih!\"",
                "aksi": "mendatangi {NAMA}"
              },
              {
                "who": "{NAMA}",
                "text": "\"Kalian puas terus menghina aku?\"",
                "aksi": "Berbicara dengan nada marah"
              },
              {
                "who": "Teman 2",
                "text": "\"Yaelah, bercanda doang.\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Kalau itu bercanda, kenapa kalian terus melakukannya?\""
              },
              {
                "who": "Teman 3",
                "text": "\"Santai aja kali.\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Aku datang ke sini buat belajar, bukan buat jadi bahan ejekan kalian!\""
              },
              {
                "who": null,
                "text": "Narasi Penutup:"
              },
              {
                "who": null,
                "text": "Pertengkaran membuat suasana perpustakaan menjadi gaduh. {NAMA} berhasil meluapkan emosinya, tetapi masalah belum benar-benar selesai."
              }
            ]
          },
          {
            "no": 3,
            "judul": "Pergi Dari Perpustakaan",
            "aksi": "pergi",
            "fx": 5,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} memilih menutup bukunya, memasukkannya ke dalam tas, lalu meninggalkan perpustakaan. Ia mencari tempat lain yang lebih tenang agar dapat melanjutkan tugasnya tanpa terus mendengar ejekan."
              },
              {
                "who": "Teman 1",
                "text": "\"Eh, pergi tuh.\"",
                "aksi": "Melihat {NAMA} pergi dari perpustakaan"
              },
              {
                "who": "Teman 2",
                "text": "\"Baper banget.\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Lebih baik aku mencari tempat lain daripada terus mendengar mereka.\"",
                "aksi": "dalam hati"
              },
              {
                "who": null,
                "text": "Narasi Penutup"
              },
              {
                "who": null,
                "text": "{NAMA} berhasil menghindari situasi yang membuatnya tidak nyaman, tetapi ejekan tersebut masih terus teringat di pikirannya."
              }
            ]
          },
          {
            "no": 4,
            "judul": "Meminta bantuan petugas perpustakaan",
            "aksi": "lapor",
            "fx": 15,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} memutuskan menghampiri petugas perpustakaan dan menjelaskan bahwa beberapa siswa terus mengganggunya saat belajar. Petugas segera mendatangi kelompok siswa tersebut dan memberikan teguran karena telah mengganggu ketenangan perpustakaan sekaligus melakukan perundungan."
              },
              {
                "who": "{NAMA}",
                "text": "\"Permisi, Bu. Saya ingin melapor.\""
              },
              {
                "who": "Petugas Perpustakaan",
                "text": "\"Ada yang bisa saya bantu?\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Beberapa teman terus mengejek saya saat sedang belajar. Saya jadi tidak bisa fokus mengerjakan tugas.\""
              },
              {
                "who": "Petugas",
                "text": "\"Terima kasih sudah melapor. Saya akan menanganinya.\""
              },
              {
                "who": "Petugas",
                "text": "\"Perpustakaan adalah tempat belajar. Tolong hentikan tindakan kalian yang mengganggu dan menghina teman.\""
              },
              {
                "who": "Teman",
                "text": "\"Maaf, Bu... Maaf juga, {NAMA}.\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Terima kasih. Saya hanya ingin belajar dengan tenang.\""
              },
              {
                "who": null,
                "text": "Narasi Penutup:"
              },
              {
                "who": null,
                "text": "{NAMA} merasa lebih tenang karena berani meminta bantuan kepada orang yang tepat. Ia berhasil menyelesaikan tugasnya tanpa gangguan lagi."
              }
            ]
          }
        ]
      },
      "kurus": {
        "intro": [
          {
            "who": null,
            "text": "Setelah jam istirahat berakhir, {NAMA} pergi ke perpustakaan untuk mengerjakan tugas kelompok yang harus dikumpulkan hari itu. Ia memilih duduk di sudut ruangan agar dapat membaca dan menyelesaikan tugas dengan tenang."
          },
          {
            "who": null,
            "text": "Beberapa saat kemudian, sekelompok siswa yang sebelumnya sering mengejek {NAMA} melihatnya sedang belajar. Mereka saling tertawa lalu mendekati meja {NAMA}. Meski berada di perpustakaan, mereka tetap melontarkan ejekan tentang tubuh {NAMA} yang kurus."
          },
          {
            "who": null,
            "text": "({NAMA} duduk membelakangi mereka di meja baca, menunduk memegang pulpen dan buku catatan. Kelompok murid di meja belakang berbisik-bisik sambil pura-pura membuka buku.)"
          },
          {
            "who": "Perempuan 1",
            "text": "(Berbisik ke samping)"
          },
          {
            "who": null,
            "text": "\"Tiap kali ke perpus, pasti ada dia di meja itu. Nggak ada temannya sama sekali ya?\""
          },
          {
            "who": "Laki-laki 1",
            "text": "(Terkekeh pelan)"
          },
          {
            "who": null,
            "text": "\"Nggak ada lah. Siapa juga yang betah main sama dia?"
          },
          {
            "who": "Laki-laki 2",
            "text": "(Sambil membuka buku yang ada di tangannya)"
          },
          {
            "who": null,
            "text": "\"Aku pernah coba duduk satu meja sama dia minggu lalu. Nggak sampai lima menit aku pindah.\""
          },
          {
            "who": "Perempuan 1",
            "text": "(Berbisik sambil nahan tawa)"
          },
          {
            "who": null,
            "text": "\"Aku kasihan sih sebenarnya... Nggak pernah kelihatannya dia senyum atau ngobrol sama orang.\""
          },
          {
            "who": "Laki-laki 1",
            "text": "(Mengangkat bahu)"
          },
          {
            "who": null,
            "text": "\"Dia tuh seolah punya gelembung sendiri tau nggak. Orang lain refleks mau menjauh aja dari gelembungnya.\""
          },
          {
            "who": "Perempuan 3",
            "text": "(Memutar bola mata)"
          },
          {
            "who": null,
            "text": "\"Iya, kalau dia lewat di koridor rak buku aja, orang-orang refleks geser. Bukan karena takut, tapi emang males kontak mata.\""
          },
          {
            "who": "Laki-laki 2",
            "text": "(Menegur pelan setengah bercanda)"
          },
          {
            "who": null,
            "text": "\"Hush, pelan-pelan. Suara kamu berdua kedengaran sampai meja depan tuh.\""
          },
          {
            "who": null,
            "text": "Mendengar perkataan itu, {NAMA} mencoba tetap fokus membaca, tetapi pikirannya mulai terganggu."
          },
          {
            "who": null,
            "text": "Kini pemain harus menentukan bagaimana {NAMA} menghadapi situasi tersebut."
          }
        ],
        "opsi": [
          {
            "no": 1,
            "judul": "Tetap diam dan Mengabaikan",
            "aksi": "diam",
            "fx": -5,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} memilih tetap duduk dan melanjutkan membaca bukunya. Ia tidak ingin membuat keributan di perpustakaan. Meskipun ejekan masih terdengar, {NAMA} berusaha mengendalikan emosinya hingga akhirnya mereka bosan dan meninggalkannya."
              },
              {
                "who": "{NAMA}",
                "text": "\"Aku datang ke sini untuk belajar. Jangan sampai mereka mengganggu tujuanku.\"",
                "aksi": "dalam hati"
              }
            ]
          },
          {
            "no": 2,
            "judul": "Membalas ejekan dengan marah",
            "aksi": "balas",
            "fx": -15,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} merasa kesabarannya sudah habis. Ia berdiri dan membalas semua ejekan yang diterimanya. Suasana perpustakaan menjadi tegang karena suara mereka mulai terdengar oleh pengunjung lain."
              },
              {
                "who": "{NAMA}",
                "text": "(Menegur pelaku yang membicarakannya)"
              },
              {
                "who": null,
                "text": "\"Kenapa kalian terus mengejekku? Memangnya aku pernah mengganggu kalian?\""
              },
              {
                "who": "Teman 2",
                "text": "\"Santai aja, cuma bercanda.\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Kalau bercanda itu bikin orang sakit hati, berarti itu bukan bercanda!\""
              },
              {
                "who": "Teman 3",
                "text": "\"Baper banget sih.\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Aku capek dijadikan bahan tertawaan setiap hari!\""
              },
              {
                "who": null,
                "text": "Narasi Penutup:"
              },
              {
                "who": null,
                "text": "{NAMA} berhasil meluapkan emosinya, tetapi suasana perpustakaan menjadi tidak kondusif dan masalah belum benar-benar selesai."
              }
            ]
          },
          {
            "no": 3,
            "judul": "Pergi dari perpustakaan dan mencari tempat lain",
            "aksi": "pergi",
            "fx": 5,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} memilih menutup bukunya dan memasukkannya ke dalam tas. Ia meninggalkan perpustakaan untuk mencari tempat yang lebih tenang agar dapat melanjutkan tugasnya tanpa terus mendengar ejekan."
              },
              {
                "who": "Teman 1",
                "text": "(Melihat {NAMA} pergi dari perpustakaan)"
              },
              {
                "who": null,
                "text": "\"Eh, pergi tuh.\""
              },
              {
                "who": "Teman 2",
                "text": "\"Kabur lagi, hahaha.\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Aku lebih baik mencari tempat lain daripada terus mendengar perkataan mereka.\"",
                "aksi": "dalam hati"
              },
              {
                "who": null,
                "text": "Narasi Penutup:"
              },
              {
                "who": null,
                "text": "{NAMA} berhasil menghindari situasi yang membuatnya tidak nyaman. Namun, perkataan teman-temannya masih terus teringat di pikirannya."
              }
            ]
          },
          {
            "no": 4,
            "judul": "Meminta bantuan petugas perpustakaan",
            "aksi": "lapor",
            "fx": 15,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} memutuskan menghampiri petugas perpustakaan dan menjelaskan bahwa beberapa siswa terus mengganggunya saat belajar. Petugas kemudian mendatangi kelompok siswa tersebut dan menegur mereka karena telah mengganggu ketenangan perpustakaan sekaligus melakukan perundungan."
              },
              {
                "who": "{NAMA}",
                "text": "\"Permisi, Bu. Saya ingin melapor.\""
              },
              {
                "who": "Petugas Perpustakaan",
                "text": "\"Ada yang bisa saya bantu?\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Beberapa teman terus mengejek saya karena tubuh saya. Saya jadi tidak bisa fokus belajar.\""
              },
              {
                "who": "Petugas",
                "text": "\"Terima kasih sudah berani melapor. Saya akan membantu menyelesaikan masalah ini.\""
              },
              {
                "who": null,
                "text": "(Petugas menghampiri kelompok siswa.)"
              },
              {
                "who": "Petugas",
                "text": "\"Perpustakaan adalah tempat belajar. Tolong hentikan ejekan kalian dan hargai teman kalian.\""
              },
              {
                "who": "Teman",
                "text": "\"Maaf, Kak... Maaf juga, {NAMA}.\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Terima kasih. Saya hanya ingin belajar dengan tenang.\""
              },
              {
                "who": null,
                "text": "Narasi Penutup:"
              },
              {
                "who": null,
                "text": "{NAMA} merasa lebih tenang karena berani meminta bantuan kepada orang yang tepat. Ia dapat melanjutkan belajarnya tanpa gangguan dan menyadari bahwa mencari pertolongan bukanlah tanda kelemahan."
              },
              {
                "who": null,
                "text": "Setelah menjawab semua pertanyaannya, akan muncul penjelasan mengenai jenis bully yang dirasakan oleh korban. Berupa deskripsi, contoh dari tindakan tersebut, apa tindakan yang harus kita lakukan dan apa dampaknya dalam kehidupan kita. Desain visualisasi yang dapat digunakan contohnya seperti ini:"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "BOSS1",
    "tipe": "boss",
    "level": "Boss 1",
    "nama": "Negative Thoughts",
    "bg": "boss1",
    "giliran": [
      {
        "label": "1",
        "final": false,
        "serangan": "Kalau banyak orang mengatakan hal yang sama tentangmu, berarti mereka pasti benar.",
        "opsi": [
          {
            "label": "A",
            "text": "Iya... mungkin mereka benar.",
            "benar": false
          },
          {
            "label": "B",
            "text": "Tidak. Perkataan orang lain tidak menentukan nilai diriku.",
            "benar": true
          }
        ]
      },
      {
        "label": "2",
        "final": false,
        "serangan": "Lihat sekelilingmu. Tidak ada yang benar-benar peduli padamu.",
        "opsi": [
          {
            "label": "A",
            "text": "Aku memang harus menghadapi semuanya sendiri.",
            "benar": false
          },
          {
            "label": "B",
            "text": "Aku bisa mencari orang yang aku percaya dan meminta bantuan.",
            "benar": true
          }
        ]
      },
      {
        "label": "3",
        "final": false,
        "serangan": "Apa yang bisa kamu banggakan? Kamu tidak punya sesuatu yang istimewa.",
        "opsi": [
          {
            "label": "A",
            "text": "Mungkin aku memang tidak punya kelebihan.",
            "benar": false
          },
          {
            "label": "B",
            "text": "Aku punya kekurangan, tetapi aku juga punya kemampuan dan kelebihan.",
            "benar": true
          }
        ]
      },
      {
        "label": "4",
        "final": false,
        "serangan": "Jangan ceritakan apa yang terjadi. Mereka akan menganggapmu lemah.",
        "opsi": [
          {
            "label": "A",
            "text": "Lebih baik aku diam dan menyimpannya sendiri.",
            "benar": false
          },
          {
            "label": "B",
            "text": "Meminta bantuan bukan berarti lemah. Aku berhak mendapatkan bantuan.",
            "benar": true
          }
        ]
      },
      {
        "label": "5",
        "final": false,
        "serangan": "Mereka membantumu hanya karena kasihan.",
        "opsi": [
          {
            "label": "A",
            "text": "Mungkin memang benar...",
            "benar": false
          },
          {
            "label": "B",
            "text": "Aku tetap pantas mendapatkan bantuan dan dukungan.",
            "benar": true
          }
        ]
      },
      {
        "label": "Terakhir",
        "final": true,
        "serangan": "Boss mulai retak. Kalau begitu... siapa dirimu sebenarnya? Aku bukan apa yang orang lain katakan tentangku. Boss mulai melemah. Tidak... jangan percaya pada dirimu sendiri... Korban: Aku punya kekurangan, tetapi itu tidak membuatku tidak berharga. Boss hancur. Narasi Akhir Korban menyadari bahwa perkataan orang lain tidak menentukan nilai dirinya. Luka dari bullying mungkin belum sepenuhnya hilang, tetapi kini ia tahu bahwa ia tidak harus mempercayai setiap kata buruk yang diberikan kepadanya. Setelah pemain menyelesaikan boss level, makan akan ada petunjuk untuk mengarah pada peta berikutnya. Setelah semua tindakan yang dilakukan pada level satu sesuai dengan harapan, maka kunci untuk level berikutnya terbuka dan pemain langsung diarahkan untuk bermain ke level 2 scene 1. Untuk level selanjutnya bentuknya sama seperti level 1 namun yang membedakan adalah latar tempatnya dan tindakan yang dilakukan oleh pelaku bully.",
        "opsi": []
      }
    ]
  },
  {
    "id": "L2S1",
    "tipe": "adegan",
    "level": "Level 2",
    "no": 1,
    "lokasi": "Taman Bermain",
    "bg": "park",
    "varian": {
      "gemuk": {
        "intro": [
          {
            "who": null,
            "text": "untuk deskripsi karakter, skor per item, dan bentuk permainan sama seperti yang telah dijelaskan di atas."
          },
          {
            "who": null,
            "text": "Setelah berhasil melewati berbagai ejekan verbal di sekolah, {NAMA} berharap hari liburnya akan terasa lebih menyenangkan. Sore itu, ia pergi ke taman bermain dekat rumahnya untuk bermain petak umpet bersama anak-anak di lingkungan sekitar."
          },
          {
            "who": null,
            "text": "Awalnya permainan berlangsung biasa saja. Namun, ketika {NAMA} mencoba mencari tempat bersembunyi, beberapa anak mulai mengejek bentuk tubuhnya. Tidak hanya mengejek, mereka juga mulai mendorong tubuh {NAMA} sambil tertawa."
          },
          {
            "who": "Cowo 1",
            "text": "...sembilan! “Sepuluh! Aku datang! Kalian di mana?"
          },
          {
            "who": "Cowo 2",
            "text": "Eh, coba lihat belakang perosotan. Kayaknya ada orang."
          },
          {
            "who": "Cowo 1",
            "text": "Ya ampun, {NAMA}... kamu lagi main petak umpet apa lagi uji ketahanan wahana taman sih?"
          },
          {
            "who": "Cewe",
            "text": "Haha kamu ngumpet disitu, serius?"
          },
          {
            "who": "{NAMA}",
            "text": "Aku cuma mau ngumpet... kan emang peraturannya gitu."
          },
          {
            "who": "Cowo 1",
            "text": "Pantesan dari tadi nggak ketemu. Ternyata di tempat yang gampang banget dilihat."
          },
          {
            "who": null,
            "text": "(berbicara dengan nada sarkas)"
          },
          {
            "who": "{NAMA}",
            "text": "Kalian... kalau nggak mau ajak aku main, bilang dari awal aja. Aku bisa pulang."
          },
          {
            "who": "Cowo 1",
            "text": "Eh, kok baperan gitu? Kamu kan maskot permainan sore ini. Kalau nggak ada kamu, kita nggak ada bahan ketawaan dong!"
          },
          {
            "who": "Cowo 2",
            "text": "Tuh kan, didorong dikit aja langsung oleng."
          },
          {
            "who": "Cewe",
            "text": "Udah ah, batal aja petak umpetnya. Selagi ada {NAMA}, space taman ini berasa makin sempit. Oksigennya habis disedot dia doang."
          },
          {
            "who": "Cowo 1",
            "text": "Benar juga. Yaudah, besok-besok kalau kamu mau ikut main petak umpet lagi nggak usah ngumpet ya. Jadi tiangnya aja... biar makin berguna!"
          },
          {
            "who": null,
            "text": "Salah satu anak kemudian sengaja mendorong {NAMA} hingga ia kehilangan keseimbangan. Anak-anak lain justru tertawa melihat kejadian itu. {NAMA} merasa malu, sedih, dan bingung mengapa teman-temannya memperlakukannya seperti itu."
          },
          {
            "who": null,
            "text": "Kini pemain harus menentukan bagaimana {NAMA} menghadapi physical bullying yang dialaminya."
          }
        ],
        "opsi": [
          {
            "no": 1,
            "judul": "Tetap diam dan Menahan diri",
            "aksi": "diam",
            "fx": -5,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} memilih tidak membalas. Ia hanya memeluk lututnya sambil menahan rasa sedih. Ia berharap teman-temannya akan berhenti jika ia tidak memberikan reaksi."
              },
              {
                "who": "{NAMA}",
                "text": "\"Kenapa mereka melakukan ini kepadaku? Aku cuma ingin bermain bersama mereka.\"",
                "aksi": "dalam hati"
              }
            ]
          },
          {
            "no": 2,
            "judul": "Membalas dengan memukul mereka",
            "aksi": "balas",
            "fx": -15,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} merasa marah karena terus didorong dan dihina. Ia akhirnya mendorong balik dan memukul salah satu anak yang mengejeknya. Situasi berubah menjadi pertengkaran hingga anak-anak lain ikut berteriak."
              },
              {
                "who": "Teman 1",
                "text": "\"Hahaha... gemuk kok marah!\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Berhenti dorong aku!\""
              },
              {
                "who": null,
                "text": "({NAMA} mendorong salah satu anak.)"
              },
              {
                "who": "Teman 2",
                "text": "\"Eh, dia mukul!\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Aku capek terus diganggu!\""
              },
              {
                "who": "Teman 3",
                "text": "\"Ayo balas dia!\""
              },
              {
                "who": null,
                "text": "Narasi Penutup"
              },
              {
                "who": null,
                "text": "{NAMA} berhasil meluapkan emosinya, tetapi pertengkaran justru membuat masalah semakin besar dan membahayakan semua yang terlibat."
              }
            ]
          },
          {
            "no": 3,
            "judul": "Pergi menjauh dan mencari tempat aman",
            "aksi": "pergi",
            "fx": 5,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} memilih meninggalkan permainan. Ia berjalan menjauh menuju bangku taman agar tidak terus menjadi sasaran dorongan dan ejekan teman-temannya."
              },
              {
                "who": "Teman 1",
                "text": "\"Eh, kabur tuh!\""
              },
              {
                "who": "Teman 2",
                "text": "\"Dasar penakut.\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Aku lebih baik menjauh daripada terjadi sesuatu yang lebih buruk.\"",
                "aksi": "dalam hati"
              },
              {
                "who": null,
                "text": "Narasi Penutup"
              },
              {
                "who": null,
                "text": "{NAMA} berhasil menghindari situasi yang berbahaya. Walaupun masih sedih, ia berhasil melindungi dirinya dari perlakuan fisik yang lebih buruk."
              }
            ]
          },
          {
            "no": 4,
            "judul": "Meminta bantuan orang dewasa",
            "aksi": "lapor",
            "fx": 15,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} memutuskan mencari bantuan kepada orang dewasa yang sedang berada di taman. Ia menceritakan bahwa beberapa anak mendorong dan mengejeknya saat bermain. Orang dewasa tersebut segera menghentikan permainan dan menegur anak-anak yang melakukan perundungan."
              },
              {
                "who": "{NAMA}",
                "text": "\"Pak... boleh minta tolong?\""
              },
              {
                "who": "Orang Dewasa",
                "text": "\"Ada apa, Nak?\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Teman-teman tadi sengaja mendorong saya dan mengejek saya karena badan saya.\""
              },
              {
                "who": "Orang Dewasa",
                "text": "\"Terima kasih sudah berani bercerita. Mari kita selesaikan baik-baik.\""
              },
              {
                "who": null,
                "text": "(Orang dewasa menghampiri kelompok anak.)"
              },
              {
                "who": "Orang Dewasa",
                "text": "\"Mendorong dan mengejek teman bukanlah cara bermain yang benar. Kalian harus meminta maaf dan tidak mengulanginya lagi.\""
              },
              {
                "who": "Teman",
                "text": "\"Maaf, {NAMA}.\""
              },
              {
                "who": null,
                "text": "Narasi penutup"
              },
              {
                "who": null,
                "text": "{NAMA} merasa lebih aman karena berani meminta bantuan kepada orang dewasa. Ia belajar bahwa mencari pertolongan adalah tindakan yang tepat ketika menghadapi kekerasan fisik."
              }
            ]
          }
        ]
      },
      "kurus": {
        "intro": [
          {
            "who": null,
            "text": "Setelah berhasil melewati berbagai ejekan verbal di sekolah, {NAMA} berharap hari liburnya bisa menjadi waktu untuk melupakan semua masalah yang ia alami. Sore itu, {NAMA} pergi ke taman bermain dekat rumahnya untuk bermain petak umpet bersama teman-teman di lingkungan sekitar."
          },
          {
            "who": null,
            "text": "Awalnya permainan berlangsung dengan menyenangkan. Namun, ketika {NAMA} mulai berlari mencari tempat bersembunyi, beberapa anak mulai mengejek tubuhnya yang kurus. Mereka menganggap {NAMA} terlalu lemah untuk ikut bermain."
          },
          {
            "who": "Cowo 1",
            "text": "...sembilan! Sepuluh! Aku datang, kalian dimana? eh itu kok perosotannya kayak ada tiang tambahan?"
          },
          {
            "who": "Cowo 2",
            "text": "Bukan tiang, Bro! Itu {NAMA} nyoba ngumpet di balik tiang seluncuran! Hahaha!"
          },
          {
            "who": "Cowo 1",
            "text": "Ya ampun, Yan...Kamu lagi main petak umpet apa lagi cosplay jadi orang-orangan sawah?"
          },
          {
            "who": "Cewe",
            "text": "Yan, kamu sadar nggak sih? Kamu ngumpet di situ bukannya ketutup, malah bikin tiangnya kelihatan makin kokoh dibanding badan kamu yang tinggal tulang gitu!"
          },
          {
            "who": "{NAMA}",
            "text": "Aku cuma mau ngumpet... kan emang peraturannya begitu."
          },
          {
            "who": "Cowo 2",
            "text": "Lagian jidat kamu yang penuh jerawat merah-merah itu mantul cahaya, Yan. Dari jarak sepuluh meter juga udah kayak lampu sein menyala!"
          },
          {
            "who": "Cewe",
            "text": "Asli, muka pucat ketemu bentol merah gitu ngeliatnya bikin merinding."
          },
          {
            "who": "{NAMA}",
            "text": "Kalian... kalau nggak mau ajak aku main, bilang dari awal aja. Aku bisa pulang."
          },
          {
            "who": "Cowo 1",
            "text": "Eh, kok baperan gitu? Kamu kan maskot permainan sore ini. Kalau nggak ada kamu, kita nggak ada bahan ejekan dong!"
          },
          {
            "who": "Cowo 2",
            "text": "Tuh kan, didorong dikit aja langsung mau jatuh, melayang disenggol angin!"
          },
          {
            "who": "Cewe",
            "text": "Udah ah, batal aja petak umpetnya. Malas ada {NAMA},"
          },
          {
            "who": "Cowo 1",
            "text": "Benar juga. Yaudah, besok-besok kalau kamu mau ikut main petak umpet lagi nggak usah ngumpet ya. Berdiri diam di pojokan aja... jadi tiang bendera!"
          },
          {
            "who": null,
            "text": "Tidak berhenti sampai disitu, salah satu anak sengaja mendorong bahu {NAMA} hingga ia terjatuh. Anak-anak lain tertawa melihat kejadian tersebut. {NAMA} merasa sedih, malu, dan bingung mengapa teman-temannya memperlakukannya seperti itu."
          },
          {
            "who": null,
            "text": "Kini pemain harus menentukan bagaimana {NAMA} menghadapi physical bullying yang dialaminya."
          }
        ],
        "opsi": [
          {
            "no": 1,
            "judul": "Tetap diam dan Menahan diri",
            "aksi": "diam",
            "fx": -5,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} memilih tidak membalas perlakuan teman-temannya. Ia hanya menundukkan kepala dan berusaha mengabaikan dorongan serta ejekan yang diterimanya. Ia berharap mereka akan berhenti jika ia tidak memberikan reaksi."
              },
              {
                "who": "{NAMA}",
                "text": "\"Aku cuma ingin bermain seperti mereka. Kenapa harus diperlakukan seperti ini?\"",
                "aksi": "dalam hati"
              }
            ]
          },
          {
            "no": 2,
            "judul": "Membalas dengan mendorong teman",
            "aksi": "balas",
            "fx": -15,
            "lines": [
              {
                "who": null,
                "text": "Merasa kesabarannya habis, {NAMA} membalas dorongan yang diterimanya. Situasi berubah menjadi keributan kecil karena teman-temannya ikut mendorong balik."
              },
              {
                "who": "{NAMA}",
                "text": "\"Berhenti dorong aku!\""
              },
              {
                "who": null,
                "text": "({NAMA} mendorong salah satu temannya.)"
              },
              {
                "who": "Teman 2",
                "text": "\"Ayo, balas dia!\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Aku capek terus dijadikan bahan ejekan!\""
              },
              {
                "who": null,
                "text": "(Beberapa anak lain mulai mengerumuni mereka.)"
              },
              {
                "who": null,
                "text": "Narasi Penutup:"
              },
              {
                "who": null,
                "text": "{NAMA} berhasil meluapkan kemarahannya, tetapi pertengkaran membuat keadaan menjadi lebih buruk dan berisiko menimbulkan cedera."
              }
            ]
          },
          {
            "no": 3,
            "judul": "Pergi menjauh dan mencari tempat aman",
            "aksi": "pergi",
            "fx": 5,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} memutuskan meninggalkan permainan. Ia berjalan menuju bangku taman agar bisa menenangkan diri dan menghindari perlakuan fisik yang semakin membahayakan."
              },
              {
                "who": "Teman 1",
                "text": "\"Kabur tuh!\""
              },
              {
                "who": "Teman 2",
                "text": "\"Dasar penakut.\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Lebih baik aku pergi daripada masalahnya semakin besar.\"",
                "aksi": "dalam hati"
              },
              {
                "who": null,
                "text": "Narasi Penutup:"
              },
              {
                "who": null,
                "text": "{NAMA} berhasil melindungi dirinya dari tindakan fisik yang lebih berbahaya. Meski masih merasa sedih, ia mulai berpikir lebih tenang."
              }
            ]
          },
          {
            "no": 4,
            "judul": "Meminta bantuan orang dewasa",
            "aksi": "lapor",
            "fx": 15,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} menghampiri orang dewasa yang sedang berada di taman dan menceritakan bahwa ia didorong serta diejek saat bermain. Orang dewasa tersebut segera menghentikan permainan dan menegur anak-anak yang melakukan perundungan."
              },
              {
                "who": "{NAMA}",
                "text": "\"Pak, boleh minta tolong? Teman-teman tadi sengaja mendorong saya dan terus mengejek saya.\""
              },
              {
                "who": "Orang Dewasa",
                "text": "\"Terima kasih sudah berani bercerita. Mari kita selesaikan bersama.\""
              },
              {
                "who": null,
                "text": "(Orang dewasa mendatangi kelompok anak.)"
              },
              {
                "who": "Orang Dewasa",
                "text": "\"Bermain itu harus saling menghargai. Mendorong dan mengejek teman bukan perilaku yang benar. Sekarang minta maaf kepada {NAMA}.\""
              },
              {
                "who": "Teman",
                "text": "\"Maaf, {NAMA}. Kami tidak akan mengulanginya lagi.\""
              },
              {
                "who": "{NAMA}",
                "text": "\"Terima kasih, Pak. Saya hanya ingin bermain dengan teman-teman tanpa diejek.”"
              },
              {
                "who": null,
                "text": "Narasi penutup:"
              },
              {
                "who": null,
                "text": "{NAMA} merasa lebih aman dan dihargai karena berani meminta bantuan kepada orang dewasa. Ia belajar bahwa meminta pertolongan adalah tindakan yang tepat saat menghadapi physical bullying."
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "L2S2",
    "tipe": "adegan",
    "level": "Level 2",
    "no": 2,
    "lokasi": "Taman Bermain",
    "bg": "park",
    "varian": {
      "gemuk": {
        "intro": [
          {
            "who": null,
            "text": "Level 2 scene 2"
          },
          {
            "who": null,
            "text": "Setelah didorong oleh teman-temannya, {NAMA} masih berada di taman. Ia mencoba menjauh dan duduk di bangku taman sambil menenangkan diri. Namun, teman-teman yang tadi mendorong dan mengejeknya belum berhenti. Mereka mengambil bola yang ada di lapangan lalu sengaja melemparkannya ke arah {NAMA}. Bola mengenai bahunya dan membuat mereka kembali tertawa."
          },
          {
            "who": "Cowo 1",
            "text": "Woy, liat tuh. Ada sasaran tembak nganggur di bangku!"
          },
          {
            "who": "Cowo 2",
            "text": "Wah, pas banget! Coba kamu tes akurasi lemparanmu, kena sasaran gede gitu masa gak masuk?"
          },
          {
            "who": "Cewe",
            "text": "Hati-hati loh, nanti bolanya balik kena muka kamu sendiri! HAHAHA"
          },
          {
            "who": null,
            "text": "(Cowo 1 melempar bola dengan kencang. *BUK!* Bola mengenai tepat di bahu {NAMA}. {NAMA} tersentak kaget sambil memegang bahunya.)"
          },
          {
            "who": "Cowo 1",
            "text": "(Tertawa terbahak-bahak)* \"Strike! Mantap, kan? Sekali lempar langsung kena!"
          },
          {
            "who": "Cowo 2",
            "text": "(Ikut tertawa sambil menunjuk {NAMA})* \"Keren, Bro! Udah kayak nembak target di pasar malam, gampang banget kena sasaran sebesar gitu!"
          },
          {
            "who": null,
            "text": "{NAMA} semakin sedih. Ia mulai merasa bahwa kemanapun ia pergi, teman-temannya akan terus mengganggunya."
          },
          {
            "who": null,
            "text": "Tindakan yang harus dilakukan setelah diperlakukan seperti itu"
          }
        ],
        "opsi": [
          {
            "no": 1,
            "judul": "Menahan diri dan tidak membalas",
            "aksi": "diam",
            "fx": -5,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} memilih tetap duduk dan mengendalikan emosinya. Ia tidak membalas lemparan bola maupun ejekan mereka."
              },
              {
                "who": "{NAMA}",
                "text": "\"Aku memang sedih... tapi aku nggak mau masalah ini semakin besar.\"",
                "aksi": "dalam hati"
              }
            ]
          },
          {
            "no": 2,
            "judul": "Membalas dengan melempar bola",
            "aksi": "balas",
            "fx": -15,
            "lines": [
              {
                "who": null,
                "text": "Karena sudah terlalu kesal setelah didorong dan terus dilempari bola, {NAMA} kehilangan kesabaran. Ia mengambil bola yang mengenai tubuhnya lalu melemparkannya kembali ke arah mereka."
              },
              {
                "who": "{NAMA}",
                "text": "\"Cukup! Rasain juga!\""
              },
              {
                "who": null,
                "text": "({NAMA} melempar bola hingga mengenai salah satu pelaku.)"
              },
              {
                "who": "Pelaku",
                "text": "\"Eh! Berani banget kamu!\""
              },
              {
                "who": "Pelaku lain",
                "text": "\"Ayo balas dia!\""
              },
              {
                "who": null,
                "text": "Mereka saling melempar bola hingga membuat suasana taman menjadi gaduh. Orang-orang di sekitar juga memperhatikan keributan tersebut."
              }
            ]
          },
          {
            "no": 3,
            "judul": "Mencari teman yang bisa membantu",
            "aksi": "pergi",
            "fx": 5,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} memilih mencari sahabatnya yang juga sedang berada di taman. Ia menceritakan semua kejadian sejak dirinya didorong hingga dilempari bola."
              },
              {
                "who": "{NAMA}",
                "text": "\"Mereka dari tadi ganggu aku terus...\""
              },
              {
                "who": "Teman",
                "text": "\"Kamu nggak sendiri. Aku temenin kamu.\""
              },
              {
                "who": "Teman kepada pelaku",
                "text": "\"Kalau mau main ya main yang baik. Jangan ganggu {NAMA} terus.”"
              }
            ]
          },
          {
            "no": 4,
            "judul": "Meminta bantuan orang dewasa",
            "aksi": "lapor",
            "fx": 15,
            "lines": [
              {
                "who": null,
                "text": "Karena kejadian terus berulang sejak tadi, {NAMA} memutuskan mencari bantuan. Ia menghampiri seorang ayah yang sedang menemani anaknya bermain di taman."
              },
              {
                "who": "{NAMA}",
                "text": "\"Pak... dari tadi mereka mendorong saya, sekarang mereka sengaja melempar bola dan mengejek saya.\""
              },
              {
                "who": "Orang Dewasa",
                "text": "\"Kamu sudah benar datang meminta bantuan.\""
              },
              {
                "who": null,
                "text": "(Orang dewasa itu langsung menghampiri para pelaku)"
              },
              {
                "who": "Orang Dewasa",
                "text": "\"Kalian harus berhenti. Mendorong, mengejek, dan melempar bola ke teman bukan permainan.\""
              },
              {
                "who": "Pelaku",
                "text": "\"Maaf, Pak... kami nggak akan mengulanginya.\""
              }
            ]
          }
        ]
      },
      "kurus": {
        "intro": [
          {
            "who": null,
            "text": "Setelah didorong oleh teman-temannya, {NAMA} masih berada di taman. Ia mencoba menjauh dan duduk di bangku taman sambil menenangkan diri. Namun, teman-teman yang tadi mendorong dan mengejeknya belum berhenti."
          },
          {
            "who": null,
            "text": "Mereka mengambil bola yang ada di lapangan lalu sengaja melemparkannya ke arah {NAMA}. Bola mengenai bahunya dan membuat mereka kembali tertawa."
          },
          {
            "who": "Cowo 1",
            "text": "Woy, liat tuh. Ada papan target berjalan lagi diam di bangku!"
          },
          {
            "who": "Cowo 2",
            "text": "Wah, pas banget! Coba kamu tes akurasi lemparanmu. Tapi pelan-pelan ya, ntar orangnya langsung patah!"
          },
          {
            "who": "Cewe",
            "text": "Hati-hati loh, ntar kena mukanya, jerawatnya pada pecah semua!"
          },
          {
            "who": null,
            "text": "(Cowo 1 melempar bola dengan kencang. *BUK!* Bola mengenai tepat di bahu {NAMA}. {NAMA} tersentak kaget, badannya terdorong sedikit ke samping sambil memegangi bahunya.)"
          },
          {
            "who": "Cowo 1",
            "text": "(Tertawa terbahak-bahak)* \"Strike! Mantapkan? Ringan banget badannya, kena bola doang langsung oleng!"
          },
          {
            "who": "Cowo 2",
            "text": "(Ikut tertawa sambil menunjuk {NAMA})* \"Keren, Bro! Udah kayak nembak pin bowling, tipis banget jadi gampang goyang!"
          },
          {
            "who": null,
            "text": "{NAMA} memegang bahunya yang sakit. Ia merasa malu karena banyak anak lain melihat kejadian itu."
          },
          {
            "who": null,
            "text": "Kini pemain harus menentukan bagaimana {NAMA} menghadapi situasi tersebut."
          }
        ],
        "opsi": [
          {
            "no": 1,
            "judul": "Menahan diri dan tidak membalas",
            "aksi": "diam",
            "fx": -5,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} memilih menarik napas panjang dan tidak membalas perlakuan mereka. Ia tetap diam meskipun ejekan masih terdengar."
              },
              {
                "who": "{NAMA}",
                "text": "\"Aku memang sedih... tapi aku nggak mau masalahnya jadi lebih besar.\"",
                "aksi": "dalam hati"
              }
            ]
          },
          {
            "no": 2,
            "judul": "Membalas dengan melempar bola",
            "aksi": "balas",
            "fx": -15,
            "lines": [
              {
                "who": null,
                "text": "Karena kesal, {NAMA} mengambil bola yang mengenai tubuhnya lalu melemparkannya kembali ke arah mereka. Salah satu anak terkena lemparan tersebut sehingga suasana berubah menjadi keributan."
              },
              {
                "who": "{NAMA}",
                "text": "\"Kalian juga rasain!\""
              },
              {
                "who": null,
                "text": "({NAMA} melempar bola.)"
              },
              {
                "who": "Pelaku",
                "text": "\"Eh! Berani banget kamu!\""
              },
              {
                "who": "Pelaku lain",
                "text": "\"Ayo balas dia!\""
              },
              {
                "who": null,
                "text": "Mereka saling melempar bola hingga membuat suasana taman menjadi gaduh. Orang-orang di sekitar juga memperhatikan keributan tersebut."
              }
            ]
          },
          {
            "no": 3,
            "judul": "Mencari teman yang bisa membantumu",
            "aksi": "pergi",
            "fx": 5,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} memilih mendekati sahabatnya yang juga sedang bermain di taman. Ia menceritakan apa yang baru saja terjadi. Temannya langsung berdiri di samping {NAMA} sehingga para pelaku tidak lagi berani mengganggunya."
              },
              {
                "who": "{NAMA}",
                "text": "\"Aku nggak nyaman... mereka sengaja melempar bola ke aku.\""
              },
              {
                "who": "Teman",
                "text": "\"Nggak apa-apa, kamu nggak sendiri.\""
              },
              {
                "who": "Teman kepada pelaku",
                "text": "\"Kalau kalian mau main bola, ya main yang benar. Jangan sengaja menyakiti orang.\""
              },
              {
                "who": null,
                "text": "Para pelaku mulai merasa malu dan akhirnya menghentikan perbuatannya."
              }
            ]
          },
          {
            "no": 4,
            "judul": "Meminta bantuan orang dewasa",
            "aksi": "lapor",
            "fx": 15,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} segera menghampiri ayah salah satu temannya yang sedang berada di taman. Ia menceritakan bahwa dirinya sengaja dilempar bola dan diejek. Orang dewasa tersebut langsung mendatangi anak-anak yang melakukan bullying."
              },
              {
                "who": "{NAMA}",
                "text": "\"Pak... mereka sengaja melempar bola ke saya dan terus mengejek saya.\""
              },
              {
                "who": "Orang Dewasa",
                "text": "\"Terima kasih sudah berani cerita. Bapak akan menyelesaikan masalah ini.\""
              },
              {
                "who": "Orang Dewasa kepada pelaku",
                "text": "\"Kalian tidak boleh memperlakukan teman seperti itu. Segera minta maaf.\""
              },
              {
                "who": "Pelaku",
                "text": "\"Maaf, Pak... kami bercanda.\""
              },
              {
                "who": "Orang Dewasa",
                "text": "\"Bercanda tidak boleh membuat orang lain terluka.\""
              },
              {
                "who": null,
                "text": "Anak-anak itu meminta maaf kepada {NAMA}."
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "L2S3",
    "tipe": "adegan",
    "level": "Level 2",
    "no": 3,
    "lokasi": "Taman Bermain",
    "bg": "park",
    "varian": {
      "kurus": {
        "intro": [
          {
            "who": null,
            "text": "Setelah kejadian didorong dan dilempar bola, {NAMA} berharap teman-temannya berhenti mengganggunya. Namun, saat sore hari di taman bermain, mereka justru kembali mengejeknya. Kali ini mereka tidak hanya melempar bola, tetapi juga mendorong, memukul, dan menendangnya hingga {NAMA} terjatuh ke tanah."
          },
          {
            "who": "Teman 1",
            "text": "Rasain nih"
          },
          {
            "who": "Teman 2",
            "text": "Tendang lebih keras"
          },
          {
            "who": "{NAMA}",
            "text": "Udah! Berhenti ganggu aku!"
          },
          {
            "who": "Teman 1",
            "text": "Halah, baru gitu aja udah ngeluh."
          },
          {
            "who": null,
            "text": "{NAMA} mulai merasa takut, marah, dan tertekan. Ia melihat ke sekeliling taman dan mulai berpikir apa yang harus ia lakukan."
          },
          {
            "who": null,
            "text": "Kini pemain harus menentukan bagaimana {NAMA} menghadapi situasi tersebut."
          }
        ],
        "opsi": [
          {
            "no": 1,
            "judul": "Menahan diri dan diam",
            "aksi": "diam",
            "fx": -5,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} merasa sangat marah setelah didorong dan ditendang. Ia ingin membalas, tetapi ia sadar bahwa membalas dengan kekerasan mungkin justru akan membuat keadaan semakin buruk."
              },
              {
                "who": "pelaku",
                "text": "\"Dasar pengecut! Hahaha!\""
              }
            ]
          },
          {
            "no": 2,
            "judul": "Membalas dengan memukul",
            "aksi": "balas",
            "fx": -15,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} tidak tahan lagi, ia berdiri dan mendorong salah satu pelaku hingga terjatuh. Situasi berubah menjadi perkelahian sehingga orang dewasa harus melerai. Kekerasan justru membuat masalah semakin besar."
              },
              {
                "who": "{NAMA}",
                "text": "\"Cukup! Jangan ganggu aku lagi!\""
              },
              {
                "who": "Pelaku",
                "text": "(Sambil menendang {NAMA})"
              },
              {
                "who": null,
                "text": "\"Berani juga kamu!\""
              },
              {
                "who": null,
                "text": "Mereka langsung membalas. Perkelahian pun kembali terjadi."
              }
            ]
          },
          {
            "no": 3,
            "judul": "Meminta bantuan teman",
            "aksi": "pergi",
            "fx": 5,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} akhirnya memilih untuk tidak menghadapi mereka sendirian. Setelah berhasil menjauh dari kelompok yang terus mengganggunya, {NAMA} berjalan mencari seseorang yang benar-benar ia percaya."
              },
              {
                "who": null,
                "text": "Di kejauhan, ia melihat teman baiknya sedang duduk di dekat taman. {NAMA} menghampirinya dengan langkah pelan. Wajahnya masih terlihat sedih dan tubuhnya terasa lelah setelah kejadian tadi."
              },
              {
                "who": "{NAMA}",
                "text": "“Aku... boleh cerita sesuatu nggak?”"
              },
              {
                "who": "Teman",
                "text": "“Boleh. Kenapa, Yan? Kamu kelihatan takut.”"
              },
              {
                "who": "{NAMA}",
                "text": "“Tadi mereka mengejekku... terus mereka mulai dorong dan nendang aku. Aku udah bilang berhenti, tapi mereka malah ketawa. Aku nggak tahu harus gimana. Aku takut kalau aku cerita, mereka malah makin mengganggu aku.”"
              },
              {
                "who": "Teman",
                "text": "“Kamu nggak salah, Yan. Dan kamu nggak harus menghadapi ini sendirian. Kalau kamu mau, kita bisa cari bantuan bareng. Kita bisa cerita ke guru atau orang tua kita yang bisa dipercaya. Aku juga bisa nemenin kamu.”"
              }
            ]
          },
          {
            "no": 4,
            "judul": "Meminta bantuan orang dewasa",
            "aksi": "lapor",
            "fx": 15,
            "lines": [
              {
                "who": null,
                "text": "Setelah didorong hingga terjatuh, {NAMA} merasa sudah tidak sanggup menghadapi perlakuan teman-temannya sendirian. Ia sempat berpikir untuk membalas, tetapi kemudian mengurungkan niatnya. {NAMA} memilih meninggalkan taman dan segera pulang ke rumah."
              },
              {
                "who": "{NAMA}",
                "text": "“Bu... tadi di taman aku diganggu sama temen-temen. Mereka mengejekku. Terus tadi aku didorong sampai jatuh. Aku udah bilang berhenti, tapi mereka masih terus mengganggu aku.”"
              },
              {
                "who": "Ibu",
                "text": "“Kamu sampai jatuh? Ada yang sakit? Kamu sudah benar karena memilih cerita kepada Ibu. Kamu tidak perlu menghadapi mereka sendirian.”"
              },
              {
                "who": null,
                "text": "Lalu {NAMA} dan ibu berpelukan hangat."
              }
            ]
          }
        ]
      },
      "gemuk": {
        "intro": [
          {
            "who": null,
            "text": "Setelah kejadian didorong dan dilempar bola, {NAMA} berharap teman-temannya berhenti mengganggunya. Namun, saat sore hari di taman bermain, mereka justru kembali mengejeknya. Kali ini mereka tidak hanya melempar bola, tetapi juga mendorong, memukul, dan menendangnya hingga {NAMA} terjatuh ke tanah."
          },
          {
            "who": "Teman 1",
            "text": "Rasain nih"
          },
          {
            "who": "Teman 2",
            "text": "Tendang lebih keras"
          },
          {
            "who": "{NAMA}",
            "text": "Udah! Berhenti ganggu aku!"
          },
          {
            "who": "Teman 1",
            "text": "Halah, baru gitu aja udah ngeluh."
          },
          {
            "who": null,
            "text": "{NAMA} mulai merasa takut, marah, dan tertekan. Ia melihat ke sekeliling taman dan mulai berpikir apa yang harus ia lakukan."
          },
          {
            "who": null,
            "text": "Kini pemain harus menentukan bagaimana {NAMA} menghadapi situasi tersebut."
          }
        ],
        "opsi": [
          {
            "no": 1,
            "judul": "Menahan diri dan diam",
            "aksi": "diam",
            "fx": -5,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} merasa sangat marah setelah didorong dan ditendang. Ia ingin membalas, tetapi ia sadar bahwa membalas dengan kekerasan mungkin justru akan membuat keadaan semakin buruk."
              },
              {
                "who": "pelaku",
                "text": "\"Dasar pengecut! Hahaha!\""
              }
            ]
          },
          {
            "no": 2,
            "judul": "Membalas dengan memukul",
            "aksi": "balas",
            "fx": -15,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} tidak tahan lagi, ia berdiri dan mendorong salah satu pelaku hingga terjatuh. Situasi berubah menjadi perkelahian sehingga orang dewasa harus melerai. Kekerasan justru membuat masalah semakin besar."
              },
              {
                "who": "{NAMA}",
                "text": "\"Cukup! Jangan ganggu aku lagi!\""
              },
              {
                "who": "Pelaku",
                "text": "(Sambil menendang {NAMA})"
              },
              {
                "who": null,
                "text": "\"Berani juga kamu!\""
              },
              {
                "who": null,
                "text": "Mereka langsung membalas. Perkelahian pun terjadi."
              }
            ]
          },
          {
            "no": 3,
            "judul": "Meminta bantuan teman",
            "aksi": "pergi",
            "fx": 5,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} akhirnya memilih untuk tidak menghadapi mereka sendirian. Setelah berhasil menjauh dari kelompok yang terus mengganggunya, {NAMA} berjalan mencari seseorang yang benar-benar ia percaya."
              },
              {
                "who": null,
                "text": "Di kejauhan, ia melihat teman baiknya sedang duduk di dekat taman. {NAMA} menghampirinya dengan langkah pelan. Wajahnya masih terlihat sedih dan tubuhnya terasa lelah setelah kejadian tadi."
              },
              {
                "who": "{NAMA}",
                "text": "“Aku... boleh cerita sesuatu nggak?”"
              },
              {
                "who": "Teman",
                "text": "“Boleh. Kenapa, Yan? Kamu kelihatan takut.”"
              },
              {
                "who": "{NAMA}",
                "text": "“Tadi mereka mengejekku... terus mereka mulai mendorong dan menendang aku. Aku udah bilang berhenti, tapi mereka malah ketawa. Aku nggak tahu harus gimana. Aku takut kalau aku cerita, mereka malah makin mengganggu aku.”"
              },
              {
                "who": "Teman",
                "text": "“Kamu nggak salah, Yan. Dan kamu nggak harus menghadapi ini sendirian. Kalau kamu mau, kita bisa cari bantuan bareng. Kita bisa cerita ke guru atau orang tua kita yang bisa dipercaya. Aku juga bisa nemenin kamu.”"
              }
            ]
          },
          {
            "no": 4,
            "judul": "Meminta bantuan orang dewasa",
            "aksi": "lapor",
            "fx": 15,
            "lines": [
              {
                "who": null,
                "text": "Setelah didorong hingga terjatuh, {NAMA} merasa sudah tidak sanggup menghadapi perlakuan teman-temannya sendirian. Ia sempat berpikir untuk membalas, tetapi kemudian mengurungkan niatnya. {NAMA} memilih meninggalkan taman dan segera pulang ke rumah."
              },
              {
                "who": "{NAMA}",
                "text": "“Bu... tadi di taman aku diganggu sama temen-temen. Mereka mengejekku. Terus tadi aku didorong sampai jatuh. Aku udah bilang berhenti, tapi mereka masih terus mengganggu aku.”"
              },
              {
                "who": "Ibu",
                "text": "“Kamu sampai jatuh? Ada yang sakit? Kamu sudah benar karena memilih cerita kepada Ibu. Kamu tidak perlu menghadapi mereka sendirian.”"
              },
              {
                "who": null,
                "text": "Lalu {NAMA} dan ibu berpelukan hangat."
              },
              {
                "who": null,
                "text": "Setelah pemain menyelesaikan semua pertanyaan, maka akan muncul deskripsi mengenai bully yang terjadi."
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "BOSS2",
    "tipe": "boss",
    "level": "Boss 2",
    "nama": "Physical Trauma",
    "bg": "boss2",
    "giliran": [
      {
        "label": "1",
        "final": false,
        "serangan": "Kalau teman mengajakmu keluar, lebih baik tetap di rumah.",
        "opsi": [
          {
            "label": "A",
            "text": "Aku tidak akan keluar lagi.",
            "benar": false
          },
          {
            "label": "B",
            "text": "Aku bisa keluar bersama orang yang aku percaya.",
            "benar": true
          }
        ]
      },
      {
        "label": "2",
        "final": false,
        "serangan": "Kalau kembali ke sekolah, mereka pasti akan mengganggumu lagi.",
        "opsi": [
          {
            "label": "A",
            "text": "Lebih baik aku tidak masuk.",
            "benar": false
          },
          {
            "label": "B",
            "text": "Aku bisa kembali ke sekolah dan meminta seseorang menemaniku.",
            "benar": true
          }
        ]
      },
      {
        "label": "3",
        "final": false,
        "serangan": "Tidak ada tempat yang aman untukmu.",
        "opsi": [
          {
            "label": "A",
            "text": "Berarti aku harus terus menghindar.",
            "benar": false
          },
          {
            "label": "B",
            "text": "Aku bisa mencari tempat yang aman dan meminta bantuan ketika diperlukan.",
            "benar": true
          }
        ]
      },
      {
        "label": "4",
        "final": false,
        "serangan": "Jangan ceritakan apa yang kamu rasakan.",
        "opsi": [
          {
            "label": "A",
            "text": "Aku akan menyimpannya sendiri.",
            "benar": false
          },
          {
            "label": "B",
            "text": "Aku akan menceritakannya kepada orang yang aku percaya.",
            "benar": true
          }
        ]
      },
      {
        "label": "5",
        "final": false,
        "serangan": "Kejadian itu akan terus menghantuimu. Kamu tidak akan pernah berani lagi. Serangan Terakhir Kalau kamu masih takut, berarti aku menang. Tidak. Berani bukan berarti tidak pernah takut. Berani berarti aku tetap mencari cara untuk melindungi diriku meskipun aku merasa takut. FEAR mulai menghilang. Narasi Akhir Korban memahami bahwa rasa takut adalah sesuatu yang wajar setelah mengalami perlakuan buruk. Namun, rasa takut tidak harus mengendalikan seluruh kehidupannya.",
        "opsi": [
          {
            "label": "A",
            "text": "Mungkin aku memang akan selalu takut.",
            "benar": false
          },
          {
            "label": "B",
            "text": "Aku mungkin masih takut, tetapi aku bisa belajar menghadapi rasa takut dengan aman.",
            "benar": true
          }
        ]
      }
    ]
  },
  {
    "id": "L3S1",
    "tipe": "adegan",
    "level": "Level 3",
    "no": 1,
    "lokasi": "Media Sosial",
    "bg": "phone",
    "varian": {
      "umum": {
        "intro": [
          {
            "who": null,
            "text": "Setelah menyelesaikan level 2, gembok yang mengunci level 3 akan terbuka dan pemain bisa melanjutkan ke level berikutnya. Namun untuk melanjutkannya harus sesuai dengan point/item (mental, hope, courage) yang mereka dapatkan, apakah sudah memenuhi syarat untuk melanjutkan ke level berikutnya atau belum."
          },
          {
            "who": null,
            "text": "Hari itu sebenarnya terasa cukup menyenangkan. {NAMA} baru saja menyelesaikan tugas dan ingin membagikan sedikit momen kepada teman-temannya. Ia mengambil sebuah foto dirinya dan mengunggahnya ke media sosial."
          },
          {
            "who": null,
            "text": "Namun beberapa menit kemudian, muncul komentar dari akun yang tidak ia kenal."
          },
          {
            "who": null,
            "text": "anonim _01: “Wah, kusam banget”"
          },
          {
            "who": null,
            "text": "hitam_putih_22: “Kurang bagus kalau orang kayak gini upload foto.”"
          },
          {
            "who": null,
            "text": "rahasia_akun99: “Siapa juga yang mau lihat beginian?”"
          },
          {
            "who": null,
            "text": "{NAMA} mulai merasa tidak nyaman. Ia membuka kolom komentar lagi dan Jumlah komentar pun semakin banyak."
          },
          {
            "who": null,
            "text": "Ada yang mengejek penampilannya, ada yang menertawakan fotonya, dan ada pula yang ikut-ikutan memberikan komentar jahat setelah melihat komentar sebelumnya."
          },
          {
            "who": null,
            "text": "Apa tindakan yang harus kita pilih untuk mengatasi kondisi seperti itu"
          }
        ],
        "opsi": [
          {
            "no": 1,
            "judul": "Mengabaikan komentar dan menutup hp",
            "aksi": "diam",
            "fx": -5,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} merasa tidak perlu menanggapi komentar jahat tersebut dan memilih untuk melakukan aktivitas lain."
              },
              {
                "who": null,
                "text": "“Aku nggak perlu baca semuanya. Lebih baik aku berhenti lihat.”"
              }
            ]
          },
          {
            "no": 2,
            "judul": "Membalas komentar dengan kata kasar",
            "aksi": "balas",
            "fx": -15,
            "lines": [
              {
                "who": null,
                "text": "Karena merasa kesal, {NAMA} pun membalas komentar tersebut. Ia membalas salah satu akun yang mengejeknya."
              },
              {
                "who": "{NAMA}",
                "text": "Kalian siapa sih? Ngurusin hidup orang terus!"
              },
              {
                "who": null,
                "text": "Beberapa detik kemudian Komentar baru muncul."
              },
              {
                "who": "akun lain",
                "text": "Wih, marah ��” “Baper banget."
              },
              {
                "who": null,
                "text": "Akhirnya, semakin banyak orang ikut masuk ke dalam percakapan, situasi pun semakin panas dan {NAMA} pun merasa tersudutkan."
              }
            ]
          },
          {
            "no": 3,
            "judul": "Memblokir akun-akun yang berkomentar negatif",
            "aksi": "pergi",
            "fx": 5,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} mulai memblokir akun-akun yang terus memberikan komentar buruk. Setelah beberapa akun diblokir, suasana di kolom komentarnya menjadi lebih tenang."
              },
              {
                "who": "{NAMA}",
                "text": "“Setidaknya sekarang aku nggak perlu lihat komentar mereka lagi.”"
              }
            ]
          },
          {
            "no": 4,
            "judul": "Menceritakan kepada orang yang dipercaya",
            "aksi": "lapor",
            "fx": 15,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} memilih tidak membalas komentar tersebut. Ia menyimpan screenshot komentar sebagai bukti, kemudian keluar dari kamar dan menemui orang tuanya di ruang keluarga."
              },
              {
                "who": null,
                "text": "{NAMA} menunjukkan HP-nya kepada orang tuanya dan memperlihatkan komentar-komentar negatif yang diterimanya."
              },
              {
                "who": "{NAMA}",
                "text": "“Tadi aku upload foto. Terus ada beberapa akun yang komentar seperti ini. Awalnya aku coba nggak peduli, tapi lama-lama aku kepikiran.”"
              },
              {
                "who": "Ibu",
                "text": "“Komentar mereka bukan ukuran dari siapa kamu. Kalau komentar seperti ini terus muncul, kita bisa simpan buktinya dan mencari bantuan yang tepat.”"
              },
              {
                "who": null,
                "text": "{NAMA} mengangguk. Ia merasa sedikit lebih tenang karena akhirnya bisa menceritakan apa yang ia alami kepada orang yang berada di dekatnya."
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "L3S2",
    "tipe": "adegan",
    "level": "Level 3",
    "no": 2,
    "lokasi": "Media Sosial",
    "bg": "phone",
    "varian": {
      "umum": {
        "intro": [
          {
            "who": null,
            "text": "Keesokan harinya, {NAMA} kembali membuka media sosial. Ia berharap komentar-komentar negatif sudah berhenti. Namun ternyata, situasinya justru semakin buruk. Jumlah komentar bertambah jauh lebih banyak dibandingkan sebelumnya. Beberapa akun mulai ikut-ikutan memberikan komentar buruk meskipun mereka tidak mengenal {NAMA} secara langsung."
          },
          {
            "who": "Akun 1",
            "text": "Masih belum dihapus juga?"
          },
          {
            "who": "Akun 2",
            "text": "Kok berani banget upload foto kayak gitu?"
          },
          {
            "who": "Akun 3",
            "text": "Nggak malu?"
          },
          {
            "who": "Akun 4",
            "text": "Udah, jangan bikin orang lain sakit mata."
          },
          {
            "who": null,
            "text": "{NAMA} mulai merasa tertekan. Ia membuka kolom komentar lagi dan lagi meskipun setiap kali membacanya, perasaannya semakin buruk. Kemudian muncul sebuah komentar baru."
          },
          {
            "who": "Akun anonim",
            "text": "Teman-teman, lihat akun ini. Kasih tahu dia kalau fotonya jelek."
          },
          {
            "who": null,
            "text": "Beberapa akun lain mulai ikut memberikan reaksi. Komentar yang awalnya hanya berasal dari beberapa orang sekarang berubah menjadi serangan beramai-ramai. {NAMA} mulai merasa bahwa dirinya sedang menjadi sasaran banyak orang. Ia meletakkan HP sebentar. Namun notifikasi terus berdatangan."
          },
          {
            "who": null,
            "text": "TING!"
          },
          {
            "who": null,
            "text": "TING!"
          },
          {
            "who": null,
            "text": "TING!"
          },
          {
            "who": null,
            "text": "{NAMA} kembali mengambil HP."
          },
          {
            "who": null,
            "text": "Apa tindakan yang harus dipilih ketika menghadapi situasi seperti ini"
          }
        ],
        "opsi": [
          {
            "no": 1,
            "judul": "Mengabaikan komentar dan menutup hp",
            "aksi": "diam",
            "fx": -5,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} merasa tidak perlu menanggapi komentar jahat tersebut dan memilih untuk melakukan aktivitas lain."
              },
              {
                "who": null,
                "text": "“Aku nggak perlu baca semuanya. Lebih baik aku berhenti lihat.”"
              }
            ]
          },
          {
            "no": 2,
            "judul": "Membalas komentar dengan kata kasar",
            "aksi": "balas",
            "fx": -15,
            "lines": [
              {
                "who": null,
                "text": "Karena merasa kesal, {NAMA} pun membalas komentar tersebut. Ia membalas salah satu akun yang mengejeknya."
              },
              {
                "who": "{NAMA}",
                "text": "Kalian siapa sih? Ngurusin hidup orang terus!"
              },
              {
                "who": null,
                "text": "Beberapa detik kemudian Komentar baru muncul."
              },
              {
                "who": "akun lain",
                "text": "Wih, marah ��” “Baper banget."
              },
              {
                "who": null,
                "text": "Akhirnya, semakin banyak orang ikut masuk ke dalam percakapan, situasi pun semakin panas dan {NAMA} pun merasa tersudutkan."
              }
            ]
          },
          {
            "no": 3,
            "judul": "Memblokir akun-akun yang berkomentar negatif",
            "aksi": "pergi",
            "fx": 5,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} mulai memblokir akun-akun yang terus memberikan komentar buruk. Setelah beberapa akun diblokir, suasana di kolom komentarnya menjadi lebih tenang."
              },
              {
                "who": "{NAMA}",
                "text": "“Setidaknya sekarang aku nggak perlu lihat komentar mereka lagi.”"
              }
            ]
          },
          {
            "no": 4,
            "judul": "Menceritakan kepada orang yang dipercaya",
            "aksi": "lapor",
            "fx": 15,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} memilih tidak membalas komentar tersebut. Ia menyimpan screenshot komentar sebagai bukti, kemudian keluar dari kamar dan menemui orang tuanya di ruang keluarga."
              },
              {
                "who": null,
                "text": "{NAMA} menunjukkan HP-nya kepada orang tuanya dan memperlihatkan komentar-komentar negatif yang diterimanya."
              },
              {
                "who": "{NAMA}",
                "text": "“Tadi aku upload foto. Terus ada beberapa akun yang komentar seperti ini. Awalnya aku coba nggak peduli, tapi lama-lama aku kepikiran.”"
              },
              {
                "who": "Ibu",
                "text": "“Komentar mereka bukan ukuran dari siapa kamu. Kalau komentar seperti ini terus muncul, kita bisa simpan buktinya dan mencari bantuan yang tepat.”"
              },
              {
                "who": null,
                "text": "{NAMA} mengangguk. Ia merasa sedikit lebih tenang karena akhirnya bisa menceritakan apa yang ia alami kepada orang yang berada di dekatnya."
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "L3S3",
    "tipe": "adegan",
    "level": "Level 3",
    "no": 3,
    "lokasi": "Media Sosial",
    "bg": "phone",
    "varian": {
      "umum": {
        "intro": [
          {
            "who": null,
            "text": "Beberapa hari berlalu. {NAMA} berharap semuanya akan berhenti. Namun ketika ia membuka media sosial, ia justru melihat sesuatu yang jauh lebih buruk. Foto {NAMA} telah disebarkan oleh akun lain. Bukan hanya satu akun. Foto tersebut sudah diunggah ulang oleh banyak orang. Jumlah komentar mencapai ratusan bahkan ribuan. {NAMA} melihat berbagai reaksi memenuhi layar."
          },
          {
            "who": "Akun 1",
            "text": "Wah, ini yang kemarin viral!"
          },
          {
            "who": "Akun 2",
            "text": "Aku baru lihat. Kok bisa begini?"
          },
          {
            "who": "Akun 3",
            "text": "Sebarin lagi!"
          },
          {
            "who": null,
            "text": "Beberapa orang bahkan mulai membuat postingan baru menggunakan foto tersebut. {NAMA} merasa kehilangan kendali. Ia tidak pernah meminta fotonya disebarkan. Tetapi sekarang foto tersebut sudah berada di banyak akun dan sulit dihentikan."
          },
          {
            "who": "{NAMA} dalam hati",
            "text": "Aku sudah nggak tahu harus gimana... Semua orang bisa lihat foto ini.”"
          },
          {
            "who": null,
            "text": "Ia menutup aplikasi. Namun notifikasi terus muncul. Kemudian {NAMA} mendapatkan pesan dari seseorang yang ia percaya."
          },
          {
            "who": "Teman",
            "text": "Rey, aku lihat postingannya. Kamu nggak apa-apa?"
          },
          {
            "who": null,
            "text": "{NAMA} terdiam cukup lama."
          },
          {
            "who": null,
            "text": "Ia kemudian menyadari bahwa selama ini ia terlalu fokus menghadapi komentar tersebut sendirian. Sekarang ia harus menentukan langkah berikutnya."
          }
        ],
        "opsi": [
          {
            "no": 1,
            "judul": "Mengabaikan komentar dan menutup hp",
            "aksi": "diam",
            "fx": -5,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} merasa tidak perlu menanggapi komentar jahat tersebut dan memilih untuk melakukan aktivitas lain."
              },
              {
                "who": null,
                "text": "“Aku nggak perlu baca semuanya. Lebih baik aku berhenti lihat.”"
              }
            ]
          },
          {
            "no": 2,
            "judul": "Membalas komentar dengan kata kasar",
            "aksi": "balas",
            "fx": -15,
            "lines": [
              {
                "who": null,
                "text": "Karena merasa kesal, {NAMA} pun membalas komentar tersebut. Ia membalas salah satu akun yang mengejeknya."
              },
              {
                "who": "{NAMA}",
                "text": "Kalian siapa sih? Ngurusin hidup orang terus!"
              },
              {
                "who": null,
                "text": "Beberapa detik kemudian Komentar baru muncul."
              },
              {
                "who": "akun lain",
                "text": "Wih, marah ��” “Baper banget."
              },
              {
                "who": null,
                "text": "Akhirnya, semakin banyak orang ikut masuk ke dalam percakapan, situasi pun semakin panas dan {NAMA} pun merasa tersudutkan."
              }
            ]
          },
          {
            "no": 3,
            "judul": "Memblokir akun-akun yang berkomentar negatif",
            "aksi": "pergi",
            "fx": 5,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} mulai memblokir akun-akun yang terus memberikan komentar buruk. Setelah beberapa akun diblokir, suasana di kolom komentarnya menjadi lebih tenang."
              },
              {
                "who": "{NAMA}",
                "text": "“Setidaknya sekarang aku nggak perlu lihat komentar mereka lagi.”"
              }
            ]
          },
          {
            "no": 4,
            "judul": "Menceritakan kepada orang yang dipercaya",
            "aksi": "lapor",
            "fx": 15,
            "lines": [
              {
                "who": null,
                "text": "{NAMA} memilih tidak membalas komentar tersebut. Ia menyimpan screenshot komentar sebagai bukti, kemudian keluar dari kamar dan menemui orang tuanya di ruang keluarga."
              },
              {
                "who": null,
                "text": "{NAMA} menunjukkan HP-nya kepada orang tuanya dan memperlihatkan komentar-komentar negatif yang diterimanya."
              },
              {
                "who": "{NAMA}",
                "text": "“Tadi aku upload foto. Terus ada beberapa akun yang komentar seperti ini. Awalnya aku coba nggak peduli, tapi lama-lama aku kepikiran.”"
              },
              {
                "who": "Ibu",
                "text": "“Komentar mereka bukan ukuran dari siapa kamu. Kalau komentar seperti ini terus muncul, kita bisa simpan buktinya dan mencari bantuan yang tepat.”"
              },
              {
                "who": null,
                "text": "{NAMA} mengangguk. Ia merasa sedikit lebih tenang karena akhirnya bisa menceritakan apa yang ia alami kepada orang yang berada di dekatnya."
              },
              {
                "who": null,
                "text": "Setelah menyelesaikan semua levelnya, akan ada final boss atau musuh terakhir yang menjadi tantangan."
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "BOSSF",
    "tipe": "boss",
    "level": "Final Boss",
    "nama": "The Crack of Soul",
    "bg": "crack",
    "giliran": [
      {
        "label": "1",
        "final": false,
        "serangan": "Semua orang membencimu.",
        "opsi": [
          {
            "label": "A",
            "text": "Iya, mungkin begitu",
            "benar": false
          },
          {
            "label": "B",
            "text": "Tidak semua orang membenciku",
            "benar": true
          }
        ]
      },
      {
        "label": "2",
        "final": false,
        "serangan": "Kamu tidak berguna.",
        "opsi": [
          {
            "label": "A",
            "text": "Mungkin aku memang begitu",
            "benar": false
          },
          {
            "label": "B",
            "text": "Aku tetap punya kelebihan dan berharga",
            "benar": true
          }
        ]
      },
      {
        "label": "3",
        "final": false,
        "serangan": "Tidak ada yang peduli padamu",
        "opsi": [
          {
            "label": "A",
            "text": "Aku memang sendirian",
            "benar": false
          },
          {
            "label": "B",
            "text": "Ada orang yang peduli padaku",
            "benar": true
          }
        ]
      },
      {
        "label": "4",
        "final": false,
        "serangan": "Kamu sendirian. Tidak akan ada yang membantumu Jika pemain memilih beberapa jawaban yang positif, sistem “Mereka yang Peduli Padamu” akan aktif dan dapat dipilih oleh pemain. Karakternya yaitu Ibu, Guru bk, Sahabat, dan Teman kelas. Orang-orang yang dapat memberikan dukungan: 1\\. Ibu 2\\. Guru BK 3\\. Sahabat 4\\. Teman kelas Mereka memberikan dukungan kepada {NAMA} dan mengingatkannya bahwa ia tidak harus menghadapi masalah seorang diri. Jika pemain memilih salah satu orang tersebut sebagai *support system,* maka akan muncul dialog yang dapat memberikan dukungan dan semangat kepada korban. Contoh dialog: Ibu: Kamu tidak harus menghadapi semuanya sendirian Guru bk: Apa yang terjadi bukan salahmu, kamu boleh meminta bantuan. Sahabat: Aku ada disini, kamu tidak sendirian Teman Kelas: Kami akan selalu bersamamu, jangan takut Setelah Support System aktif, Hope dan Courage {NAMA} bertambah dan HP Boss mulai berkurang. Meskipun mendapat dukungan, The Crack of Soul belum menyerah. Boss kembali mencoba membuat {NAMA} meragukan dirinya sendiri.",
        "opsi": [
          {
            "label": "A",
            "text": "Aku harus menghadapi sendirian",
            "benar": false
          },
          {
            "label": "B",
            "text": "Aku bisa meminta bantuan orang yang aku percaya",
            "benar": true
          }
        ]
      },
      {
        "label": "5",
        "final": false,
        "serangan": "Mereka hanya kasihan kepadamu. Serangan Terakhir Final Boss Kalau begitu... siapa dirimu sebenarnya? Layar menjadi gelap. Muncul tiga pilihan. Boss kembali menguat Boss melemah Support system aktif kembali Pada tahap ini, pemain mulai memahami bahwa melawan bullying bukan berarti harus melawan semuanya sendirian. Mencari bantuan dan mendapatkan dukungan juga merupakan bentuk keberanian. Maka The Crack of Soul berhasil dikalahkan. Boss berkata: Tidak…kamu tidak lagi mempercayai kata-kataku Kemudian The Crack of Soul retak dan menghilang. Narasi kemenangan: {NAMA} akhirnya menyadari bahwa dirinya tidak ditentukan oleh perkataan orang lain. Ia mungkin memiliki kekurangan dan pernah terluka, tetapi ia tetap memiliki nilai dan berhak mendapatkan dukungan. Setelah berhasil mengalahkan Final boss, pemain akan diarahkan true ending atau akhir dari game tersebut. Didalam true ending ini terdapat beberapa kolom bagian, diantaranya rangkuman perjalanan yang telah terselesaikan, Statistik akhir atau jumlah poin yang telah didapatkan, pelajaran penting yang dapat diambil, tombol menu dan tombol untuk mengakhiri.",
        "opsi": [
          {
            "label": "A",
            "text": "Mungkin memang benar",
            "benar": false
          },
          {
            "label": "B",
            "text": "Aku tetap pantas mendapatkan bantuan",
            "benar": true
          },
          {
            "label": "A",
            "text": "Aku adalah apa yang orang lain katakan tentangku.",
            "benar": false
          },
          {
            "label": "B",
            "text": "Aku punya kekurangan, tetapi aku tetap berharga.",
            "benar": true
          },
          {
            "label": "C",
            "text": "Aku tidak harus menghadapi semuanya sendirian. Aku akan meminta bantuan ketika membutuhkannya.",
            "benar": true
          }
        ]
      }
    ]
  }
];
