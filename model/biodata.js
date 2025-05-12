const mongoose = require("mongoose");
const bioSchema = new mongoose.Schema({
  namaDepan: {
    type: String,
    required: true,
  },
  namaBelakang: {
    type: String,
  },
  tanggalLahir: {
    type: Date,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true, // Menyimpan email dalam huruf kecil
    trim: true, // Menghapus spasi di awal dan akhir
  },
  alamat: {
    jalan: {
      type: String,
    },
    kota: {
      type: String,
    },
    provinsi: {
      type: String,
    },
    kodePos: {
      type: String,
    },
  },
  nomorTelepon: {
    type: String,
  },
  pekerjaan: {
    type: String,
  },
  hobi: {
    type: [String], // Array berisi string
    default: [],
  },
  statusAktif: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Otomatis mencatat waktu pembuatan
  },
  updatedAt: {
    type: Date,
    default: Date.now, // Otomatis mencatat waktu pembaruan
  },
});

module.exports = mongoose.model("Biodata", bioSchema);

// contoh data
// {
//   namaDepan: "Budi",
//   namaBelakang: "Santoso",
//   tanggalLahir: "1990-05-15",
//   email: "budi.santoso@example.com",
//   alamat: {
//     jalan: "Jl. Mawar No. 10",
//     kota: "Jakarta Selatan",
//     provinsi: "DKI Jakarta",
//     kodePos: "12345"
//   },
//   nomorTelepon: "081234567890",
//   pekerjaan: "Software Engineer",
//   hobi: ["Membaca", "Berenang"],
//   statusAktif: true
// },
