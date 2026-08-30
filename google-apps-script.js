/**
 * =========================================================================
 * GOOGLE APPS SCRIPT — THE CRACK OF SOUL (DATA RECEIVER)
 * =========================================================================
 * 
 * Script ini digunakan untuk menerima data identitas pemain & metrik hasil
 * permainan dari game The Crack of Soul, lalu otomatis menyimpannya ke
 * Google Spreadsheet guru / peneliti.
 * 
 * PANDUAN PEMASANGAN CEPAT:
 * 1. Buka Google Spreadsheet baru di https://sheets.new
 * 2. Klik menu "Extensions" (Ekstensi) > "Apps Script".
 * 3. Hapus semua kode default, lalu tempel (paste) seluruh isi file ini.
 * 4. Klik "Save" (ikon disket), lalu klik tombol biru "Deploy" > "New deployment".
 * 5. Pilih tipe: "Web app".
 * 6. Set "Execute as": "Me" (email Anda).
 * 7. Set "Who has access": "Anyone" (Siapa saja).
 * 8. Klik "Deploy" & salin URL Web App yang dihasilkan.
 * 9. Tempelkan URL tersebut ke konfigurasi CONFIG.GAS_URL di game The Crack of Soul.
 * =========================================================================
 */

function doPost(e) {
  try {
    const lock = LockService.getScriptLock();
    lock.waitLock(10000); // Tunggu antrian maksimal 10 detik

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Inisialisasi Header Otomatis jika Sheet masih kosong
    if (sheet.getLastRow() === 0) {
      const headers = [
        "Waktu Selesai (WIB)",
        "Nama Siswa",
        "Asal Sekolah",
        "Kelas",
        "Karakter",
        "Hope Akhir",
        "Courage Akhir",
        "Mental Akhir",
        "Skor Pilihan Baik",
        "Total Lapor",
        "Total Pergi / Dukungan",
        "Total Diam",
        "Total Membalas",
        "Jumlah Ulang Adegan",
        "Durasi Main (Menit)",
        "Status Akhir",
        "Data JSON Mentah"
      ];
      sheet.appendRow(headers);
      
      // Styling Header
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground("#4b256d");
      headerRange.setFontColor("#ffffff");
      headerRange.setFontWeight("bold");
      headerRange.setHorizontalAlignment("center");
      sheet.setFrozenRows(1);
    }

    // Parsing data yang masuk
    let data;
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter;
      }
    } else {
      data = e.parameter || {};
    }

    const waktuWIB = Utilities.formatDate(new Date(), "Asia/Jakarta", "yyyy-MM-dd HH:mm:ss");
    
    const row = [
      waktuWIB,
      data.nama || "-",
      data.sekolah || "-",
      data.kelas || "-",
      data.karakter || "-",
      data.hope !== undefined ? data.hope : "-",
      data.courage !== undefined ? data.courage : "-",
      data.mental !== undefined ? data.mental : "-",
      data.pilihanBaik !== undefined ? data.pilihanBaik : "-",
      data.totalLapor !== undefined ? data.totalLapor : 0,
      data.totalPergi !== undefined ? data.totalPergi : 0,
      data.totalDiam !== undefined ? data.totalDiam : 0,
      data.totalBalas !== undefined ? data.totalBalas : 0,
      data.ulangAdegan !== undefined ? data.ulangAdegan : 0,
      data.durasiMenit !== undefined ? data.durasiMenit : "-",
      data.status || "TAMAT",
      JSON.stringify(data)
    ];

    sheet.appendRow(row);
    lock.releaseLock();

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "Data berhasil disimpan" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "online", message: "The Crack of Soul Data Endpoint siap menerima data POST." }))
    .setMimeType(ContentService.MimeType.JSON);
}
