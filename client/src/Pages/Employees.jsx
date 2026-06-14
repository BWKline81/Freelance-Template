import { useEffect, useRef } from "react";
import styles from "../Styles/Employees.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router"; // <-- Imported correctly
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Heading from "../Utilities/Heading";
import Placeholder from "../assets/user_placeholder.jpg";
import Employee from "../Components/Employee";

export default function Employees() {
  const location = useLocation(); // <-- 1. Initialize location hook

  useEffect(() => {
    AOS.init({ duration: 1000 });
    document.title = "[Business Name] | Employees";

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

  const emp1Ref = useRef(null);
  const emp2Ref = useRef(null);
  const emp3Ref = useRef(null);
  const emp4Ref = useRef(null);

  const employees = [
    {
      name: "Employee 1",
      ref: emp1Ref,
      image: Placeholder,
      link: "/employees/",
      position: "CEO",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, ",
    },
    {
      name: "Employee 2",
      ref: emp2Ref,
      image: Placeholder,
      link: "/employees/",
      position: "CTO",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, ",
    },
    {
      name: "Employee 3",
      ref: emp3Ref,
      image: Placeholder,
      link: "/employees/",
      position: "COO",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, ",
    },
    {
      name: "Employee 4",
      ref: emp4Ref,
      image: Placeholder,
      link: "/employees/",
      position: "CFO",
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
          text="Our Team"
          subtext="Meet our talented team of employees"
        />
        <div className={styles.employees}>
          {employees.map((emp, index) => {
            return (
              <div
                className={styles.employee_aos}
                key={index}
                data-aos="fade-right"
                data-aos-delay={(index + 1) * 100}
              >
                <motion.div
                  className={styles.employee}
                  style={{ backgroundImage: `url(${emp.image})` }}
                  onClick={() => {
                    emp.ref.current.scrollIntoView({ behavior: "smooth" });
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 1,
                    boxShadow:
                      "20px 20px 0px var(--secondary-color), -20px -20px 0px var(--primary-color)",
                    filter: "brightness(1)",
                  }}
                >
                  <div className={styles.emp_text}>
                    <motion.p
                      className={styles.name}
                      whileHover={{ scale: 1.05 }}
                    >
                      {emp.name}
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
      {employees.map((emp, index) => {
        return (
          /* 3. Added id here so document.getElementById queries can find it */
          <div
            className={styles.emp_sec_wrap}
            key={index}
            ref={emp.ref}
            id={`emp${index + 1}`}
          >
            <Employee
              name={emp.name}
              position={emp.position}
              image={emp.image}
              description={emp.description}
              no={index + 1}
              link={emp.link}
            />
          </div>
        );
      })}
      <Footer />
    </div>
  );
}
