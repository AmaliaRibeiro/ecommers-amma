
import React, { useState } from 'react';

import contact from '../components/Contact.module.css'

import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'

const iconsStyles = { color: 'white', fontSize: '50px', padding: '8px' }

export const Contact = () => {

    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        mensaje: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos enviados:", formData);
        // Aquí puedes procesar los datos o enviarlos a un servidor
    };

    return (
        <>
        <div className={contact.containerContact}>
            <div className={contact.card}>
                <h2>Comunicate con AMMA</h2>
                <p>Venta online</p>

                <p>Seguínos en nuestras redes sociales</p>
                <div className={contact.containerIcons}>
                <a href="https://www.instagram.com/amma_ribeicoiro_zapatos/" target="_blank"><FaInstagram style={iconsStyles} /></a>
                <a href="https://www.facebook.com/profile.php?id=100080571537645" target="_blank"><FaFacebook style={iconsStyles} /></a>
                <a href="https://wa.me/5493764210156" target="_blank"><FaWhatsapp style={iconsStyles} /></a>
                </div>
                <p>POSADAS, MISIONES</p>
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
                    />
                    <input
                        type="text"
                        name="apellido"
                        placeholder="Apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        className={contact.input}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Ingrese su Mail"
                        value={formData.email}
                        onChange={handleChange}
                        className={contact.input}
                    />
                    <textarea
                        name="mensaje"
                        placeholder="Escriba su mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        className={contact.textarea}
                    />
                    <button type="submit" className={contact.button}>
                        Enviar
                    </button>
                </form>
            </div>
            </div>
        </>
    );
};