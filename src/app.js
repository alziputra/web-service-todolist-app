// Import modul express
const express = require("express");
const { all } = require("./routes");

// Buat instance dari express
const app = express();

// Import route
const allRoutes = require("./routes");

// Port 5000 sebagai nilai default, dapat diubah dengan mengatur variabel lingkungan (environment variable) PORT
const PORT = process.env.PORT || 5000;

// Menggunakan middleware express.json() untuk menghandle parsing JSON pada request body
app.use(express.json());

// Menggunakan seluruh route yang didefinisikan di "./routes"
app.use(allRoutes);

// Mendengarkan port yang telah ditentukan, dan mencetak pesan di console saat server dimulai
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));