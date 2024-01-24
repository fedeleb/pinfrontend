import React, { useState } from 'react';
import Swal from 'sweetalert2';

export default function ContactMe() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    topic: '',
    message: '',
    termsAccepted: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const submitForm = async () => {
    try {
      const response = await fetch('https://pinbackend-production.up.railway.app/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Manejar la respuesta del backend según sea necesario
      if (response.ok) {
        console.log('Datos enviados correctamente');
        Swal.fire({
          icon: 'success',
          title: '¡Muchas Gracias!',
          text: 'Su mensaje ha sido enviado. En breve nos estaremos contactando con usted',
        });

        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          topic: '',
          message: '',
          termsAccepted: false,
        });
      } else {
        console.error('Error al enviar los datos');
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Failed to send data.',
        });
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'An unexpected error occurred.',
      });
    }
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Estemos en contacto</p>
        <h2>Contactame</h2>
        <p className="text-lg">
        Si desea hacerme una consulta, o agendar una reunión conmigo, por favor complete sus datos en el formulario a continuación. Le estaré respondiendo a la brevedad.
        </p>
      </div>
      <form className="contact--form--container" onSubmit={(e) => { e.preventDefault(); submitForm(); }}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">Nombre</span>
            <input
              type="text"
              className="contact--input text-md"
              name="firstName"
              id="first-name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Apellido</span>
            <input
              type="text"
              className="contact--input text-md"
              name="lastName"
              id="last-name"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Teléfono</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phoneNumber"
              id="phone-number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Elige un tema</span>
          <select
            id="choose-topic"
            className="contact--input text-md"
            name="topic"
            value={formData.topic}
            onChange={handleInputChange}
            required
          >
            <option>Selecciona una opción</option>
            <option>Consulta sobre proyectos</option>
            <option>Agendar una reunión</option>
            <option>Otros</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Mensaje</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Escriba su mensaje..."
            required
          />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input
            type="checkbox"
            required
            name="termsAccepted"
            id="checkbox"
            checked={formData.termsAccepted}
            onChange={handleInputChange}
          />
          <span className="text-sm">Acepto los términos y condiciones</span>
        </label>
        <div>
          <button type="submit" className="btn btn-primary contact--form--btn">
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
}
