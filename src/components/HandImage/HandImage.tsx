import Image from "next/image";

import handImg from "../../../public/handImg.webp";
import s from "./HandImage.module.css";

const HandImage = () => {
  return (
    <Image
      src={handImg}
      alt="hand illustration"
      className={s.img}
      width={288}
      height={192}
      priority
    />
  );
};

export default HandImage;
