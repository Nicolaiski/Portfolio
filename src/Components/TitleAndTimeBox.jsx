import styles from "../MusicPlayer/TitleAndTimeBox.module.css";

export const TitleAndTimeBox = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};