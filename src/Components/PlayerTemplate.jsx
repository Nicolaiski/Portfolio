import styles from "../MusicPlayer/PlayerTemplate.module.css";

export const PlayerTemplate = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};