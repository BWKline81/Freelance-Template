import { useEffect } from "react";
import styles from "../Styles/Con_Con_Sec.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Link } from "react-router";
import Heading from "../Utilities/Heading";
import Placeholder from "../assets/Placeholder.png";

export default function Con_Con_Sec(props) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor:
          props.bg == "bg_1"
            ? "var(--primary-color)"
            : "var(--background-color)",
      }}
    >
      <div
        className={styles.bg_1}
        style={{
          backgroundColor:
            props.bg == "bg_1"
              ? "var(--background-color)"
              : "var(--primary-color)",
          top:
            window.innerWidth < 550
              ? props.bg == "bg_1"
                ? "-30%"
                : "70%"
              : "-30%",
        }}
        data-aos={props.bg == "bg_1" ? "zoom-in" : "zoom-out"}
      ></div>
      <div className={styles.content_wrap}>
        <Heading text={props.title} subtext={props.subtitle} />
        <div className={styles.content}>
          {props.content.map((item, index) => {
            return (
              <div className={styles.contact_item} key={index}>
                <Link
                  to={item.link}
                  className={styles.link}
                  data-aos="fade-down"
                  data-aos-delay="200"
                >
                  <motion.i
                    className={item.icon}
                    className={item.icon}
                    whileHover={{
                      scale: 1.1,
                      color: "var(--secondary-color)",
                      rotate: 10,
                    }}
                    whileTap={{
                      scale: 0.9,
                      rotate: 0,
                      color: "var(--secondary-color)",
                      y: -2,
                    }}
                  ></motion.i>
                </Link>
                <a
                  href={item.link}
                  className={styles.link}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <motion.h3
                    whileHover={{
                      scale: 1.05,
                      color: "var(--secondary-color)",
                      rotate: 1,
                      textDecoration: "underline",
                    }}
                    whileTap={{
                      scale: 0.9,
                      rotate: 0,
                      color: "var(--accent-color)",
                      y: -2,
                    }}
                  >
                    {item.name}
                  </motion.h3>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
