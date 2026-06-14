import { useEffect } from "react";
import styles from "../Styles/Service.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router";
import Heading from "../Utilities/Heading";
import Placeholder from "../assets/Placeholder.png";

export default function Service(props) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    // Check if an ID was passed in the navigation state
    const targetId = location.state?.scrollToId;

    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        // Scroll smoothly to the element
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const content_array = props.description.split(" ");

  const navigate = useNavigate();

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor:
          props.no % 2 === 0
            ? "var(--background-color)"
            : "var(--background-color-alt)",
      }}
    >
      {props.no % 2 === 0 ? (
        <>
          <div className={styles.img_wrap} data-aos="fade-right">
            <motion.img
              src={props.image}
              alt={props.name}
              className={styles.img}
              whileHover={{
                scale: 1.05,
                y: -20,
                boxShadow:
                  "-10px 50px 0px var(--secondary-color), 10px 50px 0px var(--secondary-color)",
              }}
            />
          </div>
          <div className={styles.con_wrap} data-aos="fade-left">
            <Heading text={props.name} subtext={props.position} />
            <p
              className={styles.description}
              data-aos="fade-right"
              data-aos-delay="200"
            >
              {content_array.map((word, index) => {
                return (
                  <span className={styles.motion_span_wrap} key={index}>
                    <motion.span
                      whileHover={{
                        scale: 1.15,
                        color: "var(--secondary-color)",
                        y: -2,
                      }}
                      duration={0.1}
                      className={styles.word_span}
                    >
                      {word}&nbsp;
                    </motion.span>
                  </span>
                );
              })}
            </p>
            <motion.button
              onClick={() => navigate(props.link)}
              className={styles.btn}
              whileHover={{
                scale: 1.1,
                backgroundColor: "var(--primary-color)",
                y: -10,
                x: 10,
              }}
              whileTap={{
                scale: 0.9,
                y: 10,
                x: -10,
                backgroundColor: "var(--accent-color)",
              }}
            >{`Book with ${props.name}`}</motion.button>
          </div>
        </>
      ) : (
        <>
          <div className={styles.con_wrap} data-aos="fade-left">
            <Heading text={props.name} subtext={props.position} />
            <p
              className={styles.description}
              data-aos="fade-right"
              data-aos-delay="200"
            >
              {content_array.map((word, index) => {
                return (
                  <span className={styles.motion_span_wrap} key={index}>
                    <motion.span
                      whileHover={{
                        scale: 1.15,
                        color: "var(--secondary-color)",
                        y: -2,
                      }}
                      duration={0.1}
                      className={styles.word_span}
                    >
                      {word}&nbsp;
                    </motion.span>
                  </span>
                );
              })}
            </p>
            <motion.button
              onClick={() => navigate(props.link)}
              className={styles.btn}
              whileHover={{
                scale: 1.1,
                backgroundColor: "var(--primary-color)",
                y: 10,
                x: -10,
              }}
              whileTap={{
                scale: 0.9,
                y: -10,
                x: 10,
                backgroundColor: "var(--accent-color)",
              }}
            >{`Schedule for ${props.name}`}</motion.button>
          </div>
          <div className={styles.img_wrap} data-aos="fade-left">
            <motion.img
              src={props.image}
              alt={props.name}
              className={styles.img}
              whileHover={{
                scale: 1.05,
                y: -20,
                boxShadow:
                  "-10px 50px 0px var(--background-color), 10px 50px 0px var(--background-color)",
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}
