require("dotenv").config();
const express = require("express");
const cors = require("cors");
const allRoutes = require("./routes");
const { sequelize, Todolist } = require("./models");

// Buat instance dari express
const app = express();

// Menggunakan middleware cors
app.use(cors());
// Menggunakan middleware express.json() untuk menghandle parsing JSON pada request body
app.use(express.json());
// Menggunakan seluruh route yang didefinisikan di "./routes"
app.use(allRoutes);

const PORT = process.env.PORT || 5000;

// Periksa koneksi ke database sebelum menjalankan server
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to the database has been established successfully.");

    // Sinkronkan model dengan database
    Todolist.sync()
      .then(() => {
        console.log("Models synchronized with the database.");
        
        // Jalankan server
        app.listen(PORT, () => {
          console.info("App is listening on port:", PORT);
        });
      })
      .catch((syncError) => {
        console.error("Failed to synchronize models with the database:", syncError);
      });
  })
  .catch((authError) => {
    console.error("Unable to connect to the database:", authError);
  });
