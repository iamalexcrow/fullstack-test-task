import type { NextPage } from "next";
import Main from "../components/layout/Main";
import HomeMain from "../components/home/HomeMain";
import NotFound404 from "../components/404/404";

const HomePage: NextPage = () => {
  return (
    <Main>
      <NotFound404 />
    </Main>
  );
};

export default HomePage;
