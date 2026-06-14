import { useEffect } from "react";
import styles from "../Styles/Con_Home_Sec.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Link } from "react-router";
import Placeholder from "../assets/user_placeholder.jpg";
import Heading from "../Utilities/Heading";

export default function Con_Home_Sec() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const content = [
    {
      name: "123-456-7890",
      icon: "fa-solid fa-phone",
      link: "tel:1234567890",
      type: "phone",
    },
    {
      name: "LzSsI@example.com",
      icon: "fa-solid fa-envelope",
      link: "mailto:LzSsI@example.com",
      type: "email",
    },
  ];

  const socials = [
    {
      name: "@facebook",
      path: "https://www.facebook.com/",
      icon: "fa-brands fa-facebook",
    },
    {
      name: "@twitter",
      path: "https://www.twitter.com/",
      icon: "fa-brands fa-twitter",
    },
  ];

  return (
    <div className={styles.container}>
      <Heading
        path="/contact"
        text="Contact Us! →"
        subtext="Have questions or want to learn more about our services? Contact us today to speak with one of our friendly representatives!"
      />
      <div className={styles.bg_1} data-aos="zoom-in" data-aos-delay="200">
        {" "}
      </div>
      <div
        className={styles.bg_2}
        data-aos="zoom-in"
        data-aos-delay="400"
      ></div>
      <div
        className={styles.bg_3}
        data-aos="zoom-in"
        data-aos-delay="600"
      ></div>
      <div
        className={styles.bg_4}
        data-aos="zoom-in"
        data-aos-delay="800"
      ></div>
      <div
        className={styles.bg_5}
        data-aos="zoom-in"
        data-aos-delay="1000"
      ></div>
      <div className={styles.content_wrap}>
        {content.map((item, index) => {
          return (
            <div
              className={styles.content}
              key={index}
              data-aos="fade-left"
              data-aos-delay={150 + index * 150}
            >
              <Link
                to={item.link}
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <motion.i
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
                <motion.a
                  href={item.link}
                  className={styles.link}
                  whileHover={{ color: "var(--secondary-color)" }}
                  whileTap={{ color: "var(--accent-color)" }}
                  target="_blank"
                >
                  {item.name}
                </motion.a>
              </motion.h3>
            </div>
          );
        })}
        <div className={styles.socials_wrap}>
          {socials.map((item, index) => {
            return (
              <div
                className={styles.content}
                key={index}
                data-aos="fade-right"
                data-aos-delay={450 + index * 150}
              >
                <Link
                  to={item.path}
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <motion.i
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
                  <motion.a
                    href={item.link}
                    className={styles.link}
                    whileHover={{ color: "var(--secondary-color)" }}
                    whileTap={{ color: "var(--accent-color)" }}
                    target="_blank"
                  >
                    {item.name}
                  </motion.a>
                </motion.h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
