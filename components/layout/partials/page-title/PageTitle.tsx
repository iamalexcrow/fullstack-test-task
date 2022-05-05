import { ReactElement } from "react";
import styles from "./PageTitle.module.scss";
import { IPageTitle } from "./PageTitle.typing";

const PageTitle: React.FunctionComponent<IPageTitle> = ({
  title,
}): ReactElement => {
  return <h1 className={styles.title}>{title}</h1>;
};

export default PageTitle;
