import { useState, useEffect } from "react";
import styles from "../Styles/Main_Image.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router";
import Placeholder from "../assets/Placeholder.png";
import Barbershop from "../assets/Barbershop.webp";
import { motion } from "framer-motion";

export default function Main_Image() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className={styles.container}
      data-aos="fade-up"
      data-aos-delay="500"
      style={{ backgroundImage: `url(${Barbershop})` }}
    >
      <h1 className={styles.bg_text} data-aos="zoom-in-up" data-aos-delay="500">
        [Phrase Here]
      </h1>
      <motion.button
        className={styles.btn}
        onClick={() => navigate("/services")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95, y: 2 }}
      >
        View Our Services!
      </motion.button>
    </div>
  );
}
