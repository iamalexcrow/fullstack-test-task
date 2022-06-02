import { ReactElement } from "react";
import { Table, Button, Stack } from "react-bootstrap";
import MainNav from "../layout/partials/main-nav/MainNav";
import PageTitle from "../layout/partials/page-title/PageTitle";
import UISkeleton from "../ui/skeleton/UISkeleton";
import styles from "./AboutMain.module.scss";

const AboutMain: React.FunctionComponent = (): ReactElement => {
  return (
    <>
      <PageTitle title="О нас" />

      <MainNav />

      <UISkeleton />
    </>
  );
};

export default AboutMain;
