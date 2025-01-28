const express = require("express");
const router = express.Router();
const { handleFormSubmission } = require("../controllers/formController");

// Ruta para recibir el formulario
router.post("/", handleFormSubmission);

module.exports = router;