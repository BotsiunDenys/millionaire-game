import { MoneyInfoBorder } from "../Icons";
import s from "./InfoMoneyCard.module.css";

interface Props {
  children: React.ReactNode;
  variant: "active" | "inactive" | "default";
}

const InfoMoneyCard = ({ children, variant }: Props) => {
  const style = `${s[variant]}`;

  return (
    <div className={`${s.wrapper} ${style}`}>
      <MoneyInfoBorder className={s.border} />
      <span className={s.children}>{children}</span>
    </div>
  );
};

export default InfoMoneyCard;
