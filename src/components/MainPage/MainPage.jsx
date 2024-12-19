import React from "react";
import style from "./MainPage.module.scss";
import Sphere from "../Nova/Sphere";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
import Reveal from "../Reveal/Reveal";
import { useEffect, useState } from "preact/hooks";
import img from "../../../public/main.png"

export default function MainPage() {
  const { t } = useTranslation();
  const [showMain, setShowMain] = useState(false);
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    console.log(scrollTop);
    if (scrollTop >= 900) {
      setShowMain(true);
    } else {
      setShowMain(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${style.mainPage}`}>
      <div className="w-[50%] z-10">
        {" "}
        <Reveal delay="8.8">
          <p className={style.title}>{t("main.titleGreen")} <span>{t("main.titleWhite")}</span></p>
        </Reveal>
        <Reveal delay="8.8">
          <p className={style.subtitle}>{t("main.main-text")}</p>
        </Reveal>
        
      </div>
      <div className="w-[50%] z-10 mt-[100px] ml-[100px]">
        <img src={img} alt="img" />
      </div>
    </div>
  );
}
