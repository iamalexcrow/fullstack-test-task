import type { NextPage } from "next";
import Main from "../components/layout/Main";
import HomeMain from "../components/home/HomeMain";

const HomePage: NextPage = () => {
  return (
    <Main>
      <HomeMain />
    </Main>
  );
};

export default HomePage;
