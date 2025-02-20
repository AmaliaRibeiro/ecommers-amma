
import React, { useState } from 'react';

import contact from '../components/Contact.module.css'

import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'


export const Contact = () => {

    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        mensaje: "",
    });

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

      const [isLoading, setIsLoading] = useState(false);

      const handleSubmit = async (e) => {
        e.preventDefault(); // Evita que la página se recargue
        setIsLoading(true); // Activa el indicador de carga
    
        try {
          const response = await fetch("http://localhost:5000/api/contacto", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            alert("Mensaje enviado correctamente");
            setFormData({ nombre: "", apellido: "", email: "", mensaje: "" });
          } else {
            alert("Hubo un error al enviar el mensaje");
          }
        } catch (error) {
          console.error("Error al enviar el formulario:", error);
          alert("Error al conectar con el servidor");
        } finally {
          setIsLoading(false); // Desactiva el indicador de carga
        }
      };
    

    return (
        <>
        <h1 className={contact.titleContacto}>CONTACTO</h1>
            <div className={contact.containerContact}>
                <div className={contact.card}>
                    <h2 className={contact.titleCard}>Comunicate con AMMA</h2>
                    <p className={contact.subtVenta}>Venta online</p>

                    <p className={contact.subOnline}>¡Encontranos en nuestras redes sociales!</p>
                    <p className={contact.subOnline}>Haz click en cualquiera de estos íconos para visitar nuestra red social preferida.</p>
                    <div className={contact.containerIcons}>
                        <a href="https://www.instagram.com/amma_ribeicoiro_zapatos/" target="_blank" className={contact.icon}><FaInstagram /></a>
                        <a href="https://www.facebook.com/profile.php?id=100080571537645" target="_blank" className={contact.icon}><FaFacebook /></a>
                        <a href="https://wa.me/5493764210156" target="_blank" className={contact.icon}><FaWhatsapp /></a>
                    </div>
                    <p className={contact.subOnline}>POSADAS, MISIONES</p>
                </div>

                <div className={contact.container}>
                    <form className={contact.formulario} onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="nombre"
                            placeholder="Nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            className={contact.input}
                            required
                        />
                        <input
                            type="text"
                            name="apellido"
                            placeholder="Apellido"
                            value={formData.apellido}
                            onChange={handleChange}
                            className={contact.input}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Ingrese su Mail"
                            value={formData.email}
                            onChange={handleChange}
                            className={contact.input}
                            required
                        />
                        <textarea
                            name="mensaje"
                            placeholder="Escriba su mensaje"
                            value={formData.mensaje}
                            onChange={handleChange}
                            className={contact.textarea}
                            required
                        />
                        <button type="submit" className={contact.button} disabled={isLoading}>
                        {isLoading ? "Enviando..." : "Enviar"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};