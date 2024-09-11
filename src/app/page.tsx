import Container from "@/components/Container/Container";
import HandImage from "@/components/HandImage/HandImage";
import PageLink from "@/components/PageLink/PageLink";

import s from "./page.module.css";

export default function Home() {
  return (
    <main className={s.page}>
      <Container className={s.container}>
        <HandImage />
        <article className={s.textContentWrapper}>
          <h1 className={s.title}>Who wants to be a millionaire?</h1>
          <PageLink href="/" label="start the game">
            Start
          </PageLink>
        </article>
      </Container>
    </main>
  );
}
