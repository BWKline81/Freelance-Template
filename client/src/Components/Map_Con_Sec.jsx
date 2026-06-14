import { useEffect } from "react";
import styles from "../Styles/Map_Con_Sec.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Link } from "react-router";
import Heading from "../Utilities/Heading";
import Placeholder from "../assets/Placeholder.png";

export default function Map_Con_Sec() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content_wrap}>
        <Heading text="Location" subtext="Find out where we do our business!" />
        <div className={styles.content}>
          <div className={styles.location_map} data-aos="zoom-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6988.029945411025!2d-82.0113995!3d28.8681727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7c3002eb52a5f%3A0x4777082eb1352a70!2sTarget!5e0!3m2!1sen!2sus!4v1781124866615!5m2!1sen!2sus"
              style={{
                width: "100%",
                height: "100%",
                border: "0",
                borderRadius: "30px",
              }}
              allowfullscreen={true}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
