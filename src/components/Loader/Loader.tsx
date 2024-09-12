import s from "./Loader.module.css";

interface Props {
  className?: string;
}

const Loader = ({ className }: Props) => {
  return (
    <div className={`${s.wrapper} ${className}`}>
      <span className={s.loader}></span>
    </div>
  );
};

export default Loader;
