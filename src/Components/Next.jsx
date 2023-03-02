import styles from "../MusicPlayer/Next.module.css";

export const Next = ({ src, onClick }) => {
  return <img className={styles.next} src={src} onClick={onClick} />;
};