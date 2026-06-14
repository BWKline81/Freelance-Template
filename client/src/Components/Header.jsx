import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router";
import styles from "../Styles/Header.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
//assets
import Logo from "../../public/Placeholder_Logo.png";

export default function Header() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  const headerElements = [
    {
      name: "Home",
      icon: "fa-solid fa-house",
      path: "/",
    },
    {
      name: "Services",
      icon: "fa-solid fa-scissors",
      path: "/services",
    },
    {
      name: "Employees",
      icon: "fa-solid fa-users",
      path: "/employees",
    },
    {
      name: "About",
      icon: "fa-solid fa-address-card",
      path: "/about",
    },
    {
      name: "Contact",
      icon: "fa-solid fa-phone",
      path: "/contact",
    },
  ];

  return (
    <header
      className={styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.lo_co}>
        <motion.img
          src={Logo}
          alt="Logo"
          className={styles.logo}
          data-aos="fade-down"
          data-aos-delay="1000"
        />
      </div>
      <div className={styles.nav_co}>
        {headerElements.map((element, index) => {
          return (
            <div
              className={styles.button_wrap}
              key={index}
              data-aos="fade-down-left"
              data-aos-delay={(index + 3) * 100}
            >
              <motion.button
                className={styles.nav_item}
                onClick={() => navigate(element.path)}
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9, rotate: 0 }}
              >
                <i
                  className={element.icon}
                  style={{ opacity: isHovered ? "1" : "0" }}
                ></i>
                <p>{element.name}</p>
              </motion.button>
            </div>
          );
        })}
      </div>
    </header>
  );
}
