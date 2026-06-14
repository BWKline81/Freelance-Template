import { useState, useEffect } from "react";
import styles from "./Heading.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Link } from "react-router";

export default function Heading(props) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.header_wrap} data-aos="fade-up" data-aos-delay="0">
      <Link
        to={props.path}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <motion.h1
          className={styles.header}
          style={{}}
          whileHover={{
            scale: 1.05,
            rotate: 1.5,
            color: "var(--secondary-color)",
            textShadow: "2px 2px 4px rgba(117, 117, 117, 0.5)",
            textDecoration: "underline",
          }}
        >
          {props.text}
        </motion.h1>
      </Link>
      <div
        className={styles.line}
        data-aos="fade-down"
        data-aos-delay="100"
      ></div>
      <motion.p
        className={styles.subtext}
        whileHover={{ color: "var(--accent-color)", scale: 1.02, rotate: 0.5 }}
      >
        {props.subtext}
      </motion.p>
    </div>
  );
}
