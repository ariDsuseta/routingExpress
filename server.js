const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const contactsRoutes = require("./routes/contactsRoutes");
const biodataRoutes = require("./routes/biodataRoutes");

require("dotenv").config();
const uri = process.env.CONNECTMONGO;

const app = express();
const PORT = 3000;

// midelware
app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactsRoutes);
app.use("/api/biodata", biodataRoutes);

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server berjalan di http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error(`Gaga Koneksi ke DataBase: ${err}`));
