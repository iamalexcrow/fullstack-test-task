import { ReactElement } from "react";
import { Table, Button, Stack } from "react-bootstrap";
import MainNav from "../layout/partials/main-nav/MainNav";
import PageTitle from "../layout/partials/page-title/PageTitle";
import styles from "./AboutMain.module.scss";

const AboutMain: React.FunctionComponent = (): ReactElement => {
  return (
    <>
      <PageTitle title="О нас" />

      <MainNav />

      <p className={`lead ${styles.lead}`}>
        Теплица социальных технологий — независимый просветительский и
        развивающий проект, миссия которого — усилить российское гражданское
        общество с помощью информационных технологий.
      </p>
    </>
  );
};

export default AboutMain;
