import { useEffect } from "react";
import styles from "../Styles/TI_Home_Sec.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Link } from "react-router";
import Heading from "../Utilities/Heading";
import Placeholder from "../assets/Placeholder.png";

export default function TI_Home_Sec() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const content = [
    {
      title: "Service 1",
      image: Placeholder,
      path: "/services",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Service 2",
      image: Placeholder,
      path: "/about",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Service 3",
      image: Placeholder,
      path: "/contact",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className={styles.container}>
      <div
        className={styles.bg}
        data-aos="fade-up-left"
        data-aos-delay="100"
      ></div>
      <Heading
        text="Welcome to [Business Name]! →"
        subtext="Your one-stop shop for all your [Service Type] needs."
        path="/services"
      />
      <div className={styles.content_wrap}>
        {content.map((item, index) => {
          return (
            <div className={styles.content_container}>
              <Link
                state={{ scrollToId: `service${index + 1}` }}
                to={"/services"}
                className={styles.path}
                data-aos="fade-right"
                data-aos-delay={200 + index * 200}
              >
                <motion.h2
                  className={styles.content_title}
                  whileHover={{
                    color: "var(--secondary-color)",
                    scale: 1.05,
                    rotate: 1.5,
                  }}
                  whileTap={{
                    scale: 0.95,
                    y: 2,
                    rotate: 0,
                    color: "var(--accent-color)",
                  }}
                >
                  {item.title}
                </motion.h2>
              </Link>
              <div
                className={styles.content_image_wrap}
                data-aos="fade-right"
                data-aos-delay={300 + index * 200}
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className={styles.content_image}
                  whileHover={{
                    scale: 1.05,
                    translateY: -10,
                    translateX: 10,
                    boxShadow:
                      index == 0 || index == 1
                        ? "20px 20px 0px var(--primary-color)"
                        : "20px 20px 0px var(--background-color)",
                  }}
                />
              </div>
              <div
                className={styles.content_desc_wrap}
                data-aos="fade-right"
                data-aos-delay={400 + index * 200}
              >
                <motion.p
                  className={styles.content_desc}
                  whileHover={{
                    scale: 1.02,
                    rotate: 0.25,
                  }}
                >
                  {item.description}
                </motion.p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
