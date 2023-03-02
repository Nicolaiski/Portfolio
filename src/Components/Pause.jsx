import styles from "../MusicPlayer/Pause.module.css";

export const Pause = ({ src, onClick }) => {
  return <img className={styles.pause} src={src} onClick={onClick} />;
};