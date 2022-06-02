import { ReactElement, ReactNode } from "react";
import { Container } from "react-bootstrap";
import MetaHead from "../layout/partials/meta-head/MetaHead";
import Footer from "../layout/partials/footer/Footer";
import styles from "./Main.module.scss";
import UIModal from "../ui/modal/UIModal";

const Main: React.FunctionComponent<{ children: ReactNode }> = ({
  children,
}): ReactElement => {
  return (
    <>
      <div className={styles.container}>
        <MetaHead />

        <main className={styles.main}>
          <Container>{children}</Container>
        </main>

        <Footer />
      </div>
      <UIModal />
    </>
  );
};

export default Main;
