import React from "react";
import styles from "./Steps.module.css"; 

const Steps = () => {
  const steps = [
    {
      number: "1",
      title: "ELEGÍ EL PRODUCTO",
      description:
        "Navegá en nuestro e-shop, contamos con una gran variedad de prendas, seleccioná los artículos que más te gusten, indicando el talle, color y cantidad que deseas adquirir.",
    },
    {
      number: "2",
      title: "HACÉ EL PEDIDO",
      description:
        "En tu carrito vas a encontrar los productos que hayas elegido anteriormente, para confirmar la compra es necesario que finalices tu pedido, ingresando tus datos de pago y dirección de envío.",
    },
    {
      number: "3",
      title: "FORMA DE PAGO Y ENVÍO",
      description:
        "Utilizamos los servicios de terceros para ofrecerte la máxima seguridad a la hora de realizar tu pago. Garantizamos la integridad y pronta entrega de la prenda gracias al servicio de logística.",
    },
    {
      number: "4",
      title: "DISFRUTÁ TU PRENDA",
      description:
        "En los próximos 10 días hábiles de haber confirmado tu pago, la compra llegará a destino. Recibirás un código de seguimiento para que puedas conocer en todo momento el estado de tu envío.",
    },
  ];

  return (
    <>
    <p className={styles.stepTitle}> PASOS A SEGUIR PARA COMPRAR EN AMMA</p>
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