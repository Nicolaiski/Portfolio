import styles from "../MusicPlayer/Time.module.css";

export const Time = ({ time }) => {
  return <h1 className={styles.time}>{time}</h1>;
};