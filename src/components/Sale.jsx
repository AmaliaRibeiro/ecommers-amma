import React from "react";
import { useNavigate } from "react-router-dom"; 
import styles from "./Sale.module.css"; 

const Sale = () => {
    const navigate = useNavigate(); // Inicializar el hook para redirigir

    const handleButtonClick = () => {
      navigate("src/Pages/Offers.jsx"); // Redirige a la página de ofertas
    };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>¡SALE! 🌟</h2>
      <p className={styles.subtitle}>Disfruta de nuestras promociones exclusivas</p>
      <div className={styles.videoContainer}>
        <video
          className={styles.video}
          src="./videos/LOVERS.mp4" 
          controls
          autoPlay
          loop
          muted
        ></video>
      </div>
      <button className={styles.button} onClick={handleButtonClick}>¡Descúbrelo ahora!</button>
    </div>
  );
};

export default Sale;