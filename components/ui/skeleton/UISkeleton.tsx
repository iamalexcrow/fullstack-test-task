import { ReactElement, PropsWithChildren } from "react";
import styles from "./UISkeleton.module.scss";

const UISkeleton: React.FunctionComponent<PropsWithChildren<{}>> = ({
  children,
}): ReactElement => {
  return (
    <main className={styles["skeleton-main"]}>
      <div className={styles["skeleton-main__content"]}>{children}</div>
    </main>
  );
};

export default UISkeleton;
