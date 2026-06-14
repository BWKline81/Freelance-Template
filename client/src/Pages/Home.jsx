import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../Styles/Home.module.css";
//Components
import Header from "../Components/Header";
import Main_Image from "../Components/Main_Image";
import TI_Home_Sec from "../Components/Three_Img_Home_Sec";
import Emp_Home_Sec from "../Components/Emp_Home_Sec";
import Con_Home_Sec from "../Components/Con_Home_Sec";
import Footer from "../Components/Footer";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
    document.title = "[Business Name] | Home";
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.Header_container} data-aos="fade-down">
        <Header />
      </div>
      <Main_Image />
      <TI_Home_Sec />
      <Emp_Home_Sec />
      <Con_Home_Sec />
      <Footer />
    </div>
  );
}
