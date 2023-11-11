// import modul express
const express = require("express");
const { all } = require("./routes");
// buat instance dari express
const app = express();

// import route
const allRoutes = require("./routes");

// port 5000 sebagai nilai default
const PORT = process.env.PORT || 3000;

app.use(allRoutes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
