import { useEffect } from "react";
import styles from "../Styles/404.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

export default function NotFound() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const navigate = useNavigate();

  return (
    <div className={styles.container} data-aos="fade-up">
      <div className={styles.content} data-aos="fade-right">
        <motion.i
          className="fa-solid fa-triangle-exclamation"
          whileHover={{ scale: 1.1, rotate: 2, color: "var(--warning)" }}
        ></motion.i>
        <motion.h1
          whileHover={{ scale: 1.1, rotate: 2, color: "var(--accent-color)" }}
        >
          404
        </motion.h1>
        <motion.h2
          whileHover={{ scale: 1.05, rotate: 1, color: "var(--accent-color)" }}
        >
          Page Not Found
        </motion.h2>
        <motion.p whileHover={{ scale: 1.05, color: "var(--accent-color)" }}>
          The page you are looking for does not exist.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles.btn}
          onClick={() => navigate("/")}
        >
          <i className="fa-solid fa-house"></i> Home
        </motion.button>
      </div>
    </div>
  );
}
