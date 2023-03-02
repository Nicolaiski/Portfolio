import styles from "../MusicPlayer/ButtonsAndVolumeBox.module.css";

export const ButtonsAndVolumeBox = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};