import styles from "../Styles/Footer.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router";

export default function Footer() {
  const links = [
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

  const forms = [
    {
      name: "Privacy Policy",
      path: "/privacy-policy",
    },
    {
      name: "Terms and Conditions",
      path: "/terms-and-conditions",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        {links.map((item, index) => {
          return (
            <Link to={item.path} className={styles.link} key={index}>
              <motion.p
                className={styles.name}
                whileHover={{
                  scale: 1.05,
                  rotate: 1.5,
                  textDecoration: "underline",
                  color: "var(--secondary-color)",
                }}
                whileTap={{
                  scale: 0.95,
                  rotate: 0,
                  textDecoration: "none",
                  color: "var(--accent-color)",
                }}
              >
                {item.name}
              </motion.p>
            </Link>
          );
        })}
      </div>
      <div className={styles.wrap}>
        {forms.map((form, index) => {
          return (
            <Link to={form.path} className={styles.link} key={index}>
              <motion.p
                className={styles.name}
                whileHover={{
                  scale: 1.05,
                  rotate: 1.5,
                  textDecoration: "underline",
                  color: "var(--secondary-color)",
                }}
                whileTap={{
                  scale: 0.95,
                  rotate: 0,
                  textDecoration: "none",
                  color: "var(--accent-color)",
                }}
              >
                {form.name}
              </motion.p>
            </Link>
          );
        })}
      </div>
      <div className={styles.wrap}>
        <motion.p
          whileHover={{
            scale: 1.05,
            rotate: 1.5,
            color: "var(--secondary-color)",
          }}
          whileTap={{
            scale: 0.95,
            rotate: 0,
            textDecoration: "none",
            color: "var(--accent-color)",
          }}
        >
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </motion.p>
      </div>
    </div>
  );
}
