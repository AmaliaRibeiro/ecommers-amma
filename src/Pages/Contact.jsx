import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

import contact from '../components/Contact.module.css'

import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'

const iconsStyles = { color: 'pink', fontSize: '50px', padding: '8px' }

export const Contact = () => {

        const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar lógica para enviar los datos a tu servidor o realizar otras acciones.
        console.log('Datos enviados:', formData);
    };

    return (
        <div className={contact.contact}>
            <h1>Formulario de Contacto</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
                <label>
                    Correo Electrónico:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
                <label>
                    Mensaje:
                    <textarea name="message" value={formData.message} onChange={handleChange} />
                </label>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
