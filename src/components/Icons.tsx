interface Props {
  className?: string;
}

export const ButtonBorder = ({ className }: Props) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 389 72"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className={className}
    >
      <path d="M33.012 0.5H355.988C359.607 0.5 363.014 2.2033 365.186 5.09772L388.375 36L365.186 66.9023C363.014 69.7967 359.607 71.5 355.988 71.5H33.012C29.3933 71.5 25.9857 69.7967 23.8137 66.9023L0.625116 36L23.8137 5.09773C25.9857 2.2033 29.3933 0.5 33.012 0.5Z" />
    </svg>
  );
};

export const MoneyInfoBorder = ({ className }: Props) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 240 40"
      preserveAspectRatio="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.4526 4.63788C15.6376 2.01596 18.8742 0.5 22.2872 0.5H217.713C221.126 0.5 224.362 2.01597 226.547 4.63788L239.349 20L226.547 35.3621C224.362 37.984 221.126 39.5 217.713 39.5H22.2872C18.8742 39.5 15.6376 37.984 13.4526 35.3621L0.650853 20L13.4526 4.63788Z" />
    </svg>
  );
};
