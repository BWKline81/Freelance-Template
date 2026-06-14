import { useEffect } from "react";
import styles from "../Styles/Emp_Home_Sec.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Link } from "react-router";
import Placeholder from "../assets/user_placeholder.jpg";
import Heading from "../Utilities/Heading";

export default function Emp_Home_Sec() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const content = [
    {
      name: "Employee 1",
      image: Placeholder,
    },
    {
      name: "Employee 2",
      image: Placeholder,
    },
    {
      name: "Employee 3",
      image: Placeholder,
    },
    {
      name: "Employee 4",
      image: Placeholder,
    },
  ];

  return (
    <div className={styles.container}>
      <Heading
        path="/employees"
        text="Meet Our Team! →"
        subtext="Our employees are dedicated to providing a positive and productive experience for our clients. Click an employee's name to learn more about them!"
      />
      <div className={styles.bg_l} data-aos="fade-right"></div>
      <div className={styles.bg_r} data-aos="fade-left"></div>
      <div className={styles.content_wrap}>
        {content.map((item, index) => {
          return (
            <div
              className={styles.content_container}
              key={index}
              data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
              data-aos-delay={150 + index * 150}
            >
              <motion.img
                src={item.image}
                alt={item.name}
                className={styles.image}
                whileHover={{
                  filter: "brightness(1)",
                  scale: 0.95,
                  boxShadow:
                    "20px 20px 0px var(--secondary-color), -20px -20px 0px var(--secondary-color)",
                }}
              />
              <Link
                to={`/employees`}
                state={{ scrollToId: `emp${index + 1}` }}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <motion.h3
                  className={styles.name}
                  whileHover={{
                    color: "var(--accent-color)",
                    scale: 1.05,
                    rotate: 1.5,
                    textDecoration: "underline",
                  }}
                >
                  {item.name}
                </motion.h3>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
