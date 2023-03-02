import styles from "../MusicPlayer/Title.module.css";

export const Title = ({ title }) => {
  return <h1 className={styles.title}>{title}</h1>;
};