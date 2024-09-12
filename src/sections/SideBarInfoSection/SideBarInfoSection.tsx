import { SetStateAction } from "react";

import Image from "next/image";

import InfoMoneyCard from "@/components/InfoMoneyCard/InfoMoneyCard";

import s from "./SideBarInfoSection.module.css";

interface Props {
  isToggled: boolean;
  setIsToggled: React.Dispatch<SetStateAction<boolean>>;
}

const SideBarInfoSection = ({ isToggled, setIsToggled }: Props) => {
  return (
    <aside className={`${s.wrapper} ${isToggled ? s.visibleWrapper : ""}`}>
      <Image
        onClick={() => setIsToggled(false)}
        alt="close icon"
        src="/closeIcon.svg"
        width={14}
        height={14}
        className={s.closeIcon}
      />
      <div className={s.infoWrapper}>
        <InfoMoneyCard variant="default">$1 000 000</InfoMoneyCard>
        <InfoMoneyCard variant="default">$500 000</InfoMoneyCard>
        <InfoMoneyCard variant="default">$250 000</InfoMoneyCard>
        <InfoMoneyCard variant="default">$125 000</InfoMoneyCard>
        <InfoMoneyCard variant="default">$64 000</InfoMoneyCard>
        <InfoMoneyCard variant="default">$32 000</InfoMoneyCard>
        <InfoMoneyCard variant="default">$16 000</InfoMoneyCard>
        <InfoMoneyCard variant="default">$8 000</InfoMoneyCard>
        <InfoMoneyCard variant="default">$4 000</InfoMoneyCard>
        <InfoMoneyCard variant="default">$2 000</InfoMoneyCard>
        <InfoMoneyCard variant="active">$1 000</InfoMoneyCard>
        <InfoMoneyCard variant="inactive">$500</InfoMoneyCard>
      </div>
    </aside>
  );
};

export default SideBarInfoSection;
