// import modul express
const express = require("express");
// buat instance dari express
const app = express();

// port 5000 sebagai nilai default
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
