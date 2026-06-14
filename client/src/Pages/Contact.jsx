import { useEffect } from "react";
import styles from "../Styles/Contact.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Link } from "react-router";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Heading from "../Utilities/Heading";
import Placeholder from "../assets/Placeholder.png";
import Con_Con_Sec from "../Components/Con_Con_Sec";
import Map_Con_Sec from "../Components/Map_Con_Sec";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
    document.title = "[Business Name] | Contact";
  });

  const contacts = [
    {
      name: "123-456-7890",
      link: "tel:123-456-7890",
      icon: "fa-solid fa-phone",
    },
    {
      name: "LzSsI@example.com",
      link: "mailto:LzSsI@example.com",
      icon: "fa-solid fa-envelope",
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
      <div className={styles.Header_container}>
        <Header />
      </div>
      <Con_Con_Sec
        content={contacts}
        bg={"bg_1"}
        title="Contact Us"
        subtitle="Have any questions? Feel free to reach out to us by phone or email!"
      />
      <Con_Con_Sec
        content={socials}
        bg={"bg_2"}
        title="Check Out Our Socials"
        subtitle="Follow us on social media to stay up to date with the latest news and updates!"
      />
      <Map_Con_Sec />
      <Footer />
    </div>
  );
}
