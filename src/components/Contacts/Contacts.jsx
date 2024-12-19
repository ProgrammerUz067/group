import React from "react";
import styles from "./Contacts.module.scss";
import Button from "../Button/Button.jsx";

import { useTranslation } from "react-i18next";
import TextUp from "../Reveal/TextUp.jsx";
import Reveal from "../Reveal/Reveal.jsx";

export default function Contacts() {
  const { t } = useTranslation();
  return (
    <section id="contacts" className={styles.contacts}>
      <h1 className={styles.title}>{t("map.title")}</h1>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.2764570900745!2d66.98631867601168!3d39.68848767156592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d191dab2d0e2f%3A0xc760f3162c836017!2sUZIT%20Group!5e0!3m2!1sru!2s!4v1734626534963!5m2!1sru!2s"
        width="1400"
        height="300"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className={styles.map}
      ></iframe>
    </section>
  );
}
