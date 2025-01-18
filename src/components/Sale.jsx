import React from "react";
import { useNavigate } from "react-router-dom"; 
import styles from "./Sale.module.css"; 
import homeVideo from "../videos/lovers.mp4";

const Sale = () => {
    const navigate = useNavigate(); // Inicializar el hook para redirigir

    const handleButtonClick = () => {
      navigate("../offers"); // Redirige a la página de ofertas
    };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>¡SALE! 🌟</h2>
      <p className={styles.subtitle}>¡Descubrí nuestras promociones exclusivas!</p>
      <div className={styles.videoContainer}>
        <video
          className={styles.video}
          src={homeVideo} 
          controls
          autoPlay
          loop
          muted
        ></video>
      </div>
      <button className={styles.button} onClick={handleButtonClick}>Ver ahora</button>
    </div>
  );
};

export default Sale;