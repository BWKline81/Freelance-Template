import { useEffect, useRef } from "react";
import styles from "../Styles/Services.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router"; // <-- Imported correctly
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Heading from "../Utilities/Heading";
import Placeholder from "../assets/Placeholder.png";
import Service from "../Components/Service";

export default function Services() {
  const location = useLocation(); // <-- 1. Initialize location hook

  useEffect(() => {
    AOS.init({ duration: 1000 });
    document.title = "[Business Name] | Services";

    // 2. Only snap scroll to top if we AREN'T targeted to look at a specific employee
    if (!location.state?.scrollToId) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  useEffect(() => {
    const targetId = location.state?.scrollToId;

    if (targetId) {
      // Small timeout guarantees elements have completely painted/rendered first
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location]);

  const serv1Ref = useRef(null);
  const serv2Ref = useRef(null);
  const serv3Ref = useRef(null);

  const services = [
    {
      name: "Service 1",
      ref: serv1Ref,
      image: Placeholder,
      link: "/services/",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, ",
    },
    {
      name: "Service 2",
      ref: serv2Ref,
      image: Placeholder,
      link: "/services/",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, ",
    },
    {
      name: "Service 3",
      ref: serv3Ref,
      image: Placeholder,
      link: "/services/",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, ",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.Header_container}>
        <Header />
      </div>
      <div className={styles.content}>
        <Heading
          text="Our Services"
          subtext="See what we can do for you here at [Business Name]!"
        />
        <div className={styles.services}>
          {services.map((serv, index) => {
            return (
              <div
                className={styles.service_aos}
                key={index}
                data-aos="fade-right"
                data-aos-delay={(index + 1) * 100}
              >
                <motion.div
                  className={styles.service}
                  style={{ backgroundImage: `url(${serv.image})` }}
                  onClick={() => {
                    serv.ref.current.scrollIntoView({ behavior: "smooth" });
                  }}
                  whileHover={{
                    scale: 0.9,
                    rotate: 1,
                    boxShadow:
                      "20px 20px 0px var(--secondary-color), -20px -20px 0px var(--primary-color), 20px -20px 0px var(--secondary-color), -20px 20px 0px var(--primary-color)",
                    filter: "brightness(1)",
                  }}
                >
                  <div className={styles.service_text}>
                    <motion.p
                      className={styles.name}
                      whileHover={{ scale: 1.05 }}
                    >
                      {serv.name}
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
      {services.map((serv, index) => {
        return (
          /* 3. Added id here so document.getElementById queries can find it */
          <div
            className={styles.emp_sec_wrap}
            key={index}
            ref={serv.ref}
            id={`service${index + 1}`}
          >
            <Service
              name={serv.name}
              position={serv.position}
              image={serv.image}
              description={serv.description}
              no={index + 1}
              link={serv.link}
            />
          </div>
        );
      })}
      <Footer />
    </div>
  );
}
