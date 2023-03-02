import styles from "../MusicPlayer/PlaylistTemplate.module.css";

export const PlaylistTemplate = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};