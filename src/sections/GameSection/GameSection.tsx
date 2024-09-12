"use client";

import { useState } from "react";

import Image from "next/image";

import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";

import SideBarInfoSection from "../SideBarInfoSection/SideBarInfoSection";
import s from "./GameSection.module.css";

const GameSection = () => {
  const [isToggledSidebar, setIsToggledSidebar] = useState(false);

  const handleClick = () => {
    console.log("click");
  };

  return (
    <main className={s.wrapper}>
      <Container className={s.container}>
        <Image
          onClick={() => setIsToggledSidebar(true)}
          className={s.burger}
          alt="burger icon"
          src="/burgerIcon.svg"
          width={16}
          height={14}
        />
        <h2 className={s.title}>
          How old your elder brother was 10 years before you was born, mate?
        </h2>
        <div className={s.buttonsWrapper}>
          <Button onClick={handleClick}>
            <span className={s.highlight}>A</span>
            10 years
          </Button>
          <Button onClick={handleClick}>
            <span className={s.highlight}>B</span>
            11 years
          </Button>
          <Button onClick={handleClick}>
            <span className={s.highlight}>C</span>
            12 years
          </Button>
          <Button onClick={handleClick}>
            <span className={s.highlight}>D</span>
            13 years
          </Button>
        </div>
      </Container>
      <SideBarInfoSection
        isToggled={isToggledSidebar}
        setIsToggled={setIsToggledSidebar}
      />
    </main>
  );
};

export default GameSection;
