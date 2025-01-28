const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

// Cargar variables de entorno
dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5173", // Cambia por el puerto donde corre tu frontend (por ejemplo, Vite usa 5173 por defecto)
  methods: ["GET", "POST"], // Permite métodos específicos
})); // Habilitar CORS
app.use(bodyParser.json()); // Parsear JSON en las solicitudes

// Rutas
const formRoutes = require("./src/routes/formRoutes");
app.use("/api/contacto", formRoutes);

// Puerto y servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});