import { useEffect } from "react";
import styles from "../Styles/About.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Link } from "react-router";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Heading from "../Utilities/Heading";
import Placeholder from "../assets/Placeholder.png";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);
    document.title = "[Business Name] | About";
  }, []);

  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor.  `;

  const content_array = content.split(" ");

  const content_title = `Nice to Meet You`;

  const content_title_array = content_title.split(" ");

  return (
    <div className={styles.container}>
      <div className={styles.bg_l} data-aos="fade-left"></div>
      <div className={styles.bg_r} data-aos="fade-right"></div>
      <div className={styles.Header_container} data-aos="fade-down">
        <Header />
      </div>
      <div className={styles.wrap}>
        <Heading
          text="About Us"
          subtext="Learn more about the history of our company and learn what our mission is"
        />
        <div
          className={styles.content}
          data-aos="fade-right"
          data-aos-delay={0}
        >
          <motion.img
            src={Placeholder}
            alt="Placeholder"
            className={styles.img}
            whileHover={{
              scale: 0.95,
              transition: { duration: 0.15 },
              rotate: 1.5,
              boxShadow:
                "15px 15px 0px var(--secondary-color), -15px -15px 0px var(--secondary-color), 15px -15px 0px var(--secondary-color), -15px 15px 0px var(--secondary-color)",
            }}
          />
          <div className={styles.text_wrap} data-aos="fade-up">
            <h2>
              {content_title_array.map((word, index) => {
                return (
                  <span
                    className={styles.title_span_wrap}
                    key={index}
                    data-aos="fade-right"
                    data-aos-delay={index * 100}
                  >
                    <motion.span
                      whileHover={{
                        scale: 1.05,
                        color: "var(--background-color)",
                        textShadow:
                          "3px 3px 1px var(--text-color), -3px -3px 1px var(--text-color), 3px -3px 1px var(--text-color), -3px 3px 1px var(--text-color)",
                      }}
                      duration={0.1}
                      className={styles.title_span}
                    >
                      {word}&nbsp;
                    </motion.span>
                  </span>
                );
              })}{" "}
              <span className={styles.wave}>👋</span>
            </h2>
            <p>
              {content_array.map((word, index) => {
                return (
                  <span
                    className={styles.motion_span_wrap}
                    key={index}
                    data-aos="fade-right"
                    data-aos-delay={index * 50}
                  >
                    <motion.span
                      whileHover={{
                        scale: 1.05,
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
