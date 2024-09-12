import { redirect } from "next/navigation";

import Container from "@/components/Container/Container";
import HandImage from "@/components/HandImage/HandImage";
import PageLink from "@/components/PageLink/PageLink";

import commonStyles from "../page.module.css";
import s from "./page.module.css";

interface Props {
  searchParams: {
    sum: string;
  };
}

const EndGamePage = ({ searchParams }: Props) => {
  if (!searchParams.sum) redirect("/");

  return (
    <main className={s.wrapper}>
      <Container className={commonStyles.container}>
        <HandImage />
        <article className={commonStyles.textContentWrapper}>
          <div className={s.titleWrapper}>
            <h3 className={s.heading}>Total score:</h3>
            <h1 className={commonStyles.title}>
              ${parseInt(searchParams.sum).toLocaleString()} earned
            </h1>
          </div>
          <PageLink href="/" label="home page">
            Try again
          </PageLink>
        </article>
      </Container>
    </main>
  );
};

export default EndGamePage;
