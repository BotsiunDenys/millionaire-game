import s from "./Container.module.css";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return <section className={`${s.wrapper} ${className}`}>{children}</section>;
};

export default Container;
