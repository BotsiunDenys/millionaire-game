import Container from "@/components/Container/Container";
import HandImage from "@/components/HandImage/HandImage";
import PageLink from "@/components/PageLink/PageLink";

import s from "./page.module.css";

interface Props {
  searchParams: {
    sum: string;
  };
}

const EndGamePage = ({ searchParams }: Props) => {
  return (
    <main className={s.wrapper}>
      <Container className={s.container}>
        <HandImage />
        <article className={s.textContentWrapper}>
          <div className={s.titleWrapper}>
            <h3 className={s.heading}>Total score:</h3>
            <h1 className={s.title}>
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
