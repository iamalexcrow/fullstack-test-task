import Link from "next/link";
import { ReactElement } from "react";
import styles from "./404.module.scss";

const NotFound404 = (): ReactElement => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>Страница не найдена</h2>
      <div className={styles.text}>
        Вы можете вернуться на{" "}
        <Link href="/">
          <span className={styles.button}>главную страницу</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound404;
