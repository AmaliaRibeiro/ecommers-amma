import React from "react";
import styles from "./Steps.module.css"; 

const Steps = () => {
  const steps = [
    {
      number: "1",
      title: "DESCUBRÍ TU PRODUCTO IDEAL",
      description:
        "Explorá nuestro e-shop de Amma, donde encontrarás una amplia variedad de calzados y bikinis exclusivos. Elegí tus artículos favoritos indicando talle, color y cantidad, ¡y disfrutá de un estilo único pensado para vos!",
    },
    {
      number: "2",
      title: "CONFIRMÁ TU PEDIDO",
      description:
      "En tu carrito están tus productos seleccionados. Para completar la compra, ingresa tus datos de pago y dirección de envío. Si el producto está disponible, se enviará al día siguiente; si está pendiente, se enviará en un plazo de hasta 10 días hábiles.",
    },
    {
      number: "3",
      title: "PAGÁ Y RECIBÍ EN TIEMPO Y FORMA",
      description:
        "En Amma trabajamos con servicios de pago seguros y confiables para garantizar la máxima tranquilidad en cada transacción. Nos aseguramos de que tus prendas lleguen a tiempo y en perfecto estado, gracias a un servicio de logística ágil y eficiente."
    },
    {
      number: "4",
      title: "DISFRUTÁ TU COMPRA EN AMMA",
      description:
        "Una vez confirmado tu pago, tu compra llegará a destino dentro de los próximos 10 días hábiles. Te proporcionaremos un código de seguimiento para que puedas verificar el estado de tu envío en cualquier momento."
    },
  ];

  return (
    <>
    <p className={styles.stepTitle}> TUS PRIMEROS PASOS CON AMMA</p>
    <div className={styles.container}>
      {steps.map((step, index) => (
        <div key={index} className={styles.card}>
          <h2 className={styles.number}>{step.number}</h2>
          <h3 className={styles.title}>{step.title}</h3>
          <p className={styles.description}>{step.description}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default Steps;