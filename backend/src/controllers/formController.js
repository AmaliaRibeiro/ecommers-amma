exports.handleFormSubmission = (req, res) => {
    const { nombre, apellido, email, mensaje } = req.body;
  
    // Validar los datos
    if (!nombre || !apellido || !email || !mensaje) {
      return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }
  
    // Aquí puedes guardar los datos en una base de datos o enviarlos por correo
    console.log("Formulario recibido:", { nombre, apellido, email, mensaje });
  
    res.status(200).json({ message: "Formulario enviado con éxito" });
  };