import Link from "next/link";

import s from "./PageLink.module.css";

interface Props {
  href: string;
  children: React.ReactNode;
  label: string;
  className?: string;
}

const PageLink = ({ href, children, label, className }: Props) => {
  return (
    <Link className={`${s.link} ${className}`} href={href} aria-label={label}>
      {children}
    </Link>
  );
};

export default PageLink;
