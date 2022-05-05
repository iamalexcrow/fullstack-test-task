import type { NextPage } from "next";
import Main from "../components/layout/Main";
import AboutMain from "../components/about/AboutMain";

const AboutPage: NextPage = () => {
  return (
    <Main>
      <AboutMain />
    </Main>
  );
};

export default AboutPage;
