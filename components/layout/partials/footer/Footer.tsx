import { ReactElement } from "react";
import Image from "next/image";
import { Stack } from "react-bootstrap";
import styles from "./Footer.module.scss";

const Footer: React.FunctionComponent = (): ReactElement => {
  return (
    <footer className={styles.footer}>
      <Stack gap={3} className={`p-3 ${styles.footer__inner}`}>
        <span className={styles.logo}>
          <a href="https://te-st.ru/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/teplitsa-logo.svg"
              alt="Teplitsa. Technologies for Social Good"
              width={131}
              height={71}
            />
          </a>
        </span>
        <small>
          &copy; 2012 - {new Date().getFullYear()} &laquo;Теплица социальных
          технологий&raquo;
        </small>
      </Stack>
    </footer>
  );
};

export default Footer;
