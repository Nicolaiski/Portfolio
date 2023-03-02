import styles from "../MusicPlayer/Play.module.css";


const Play = ({ src, onClick }) => {
  return ( <img className={styles.play} src={src} onClick={onClick} />);
};

export default Play;