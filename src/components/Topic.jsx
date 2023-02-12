import { Link } from "react-router-dom";
import styles from "../styles/home.module.scss";

function Topic({ topic }) {
  return (
    <Link to={`/articles?topic=${topic.slug}`} className={styles.category}>
      <h3>{topic.slug}</h3>
      <p>{topic.description}</p>
    </Link>
  );
}

export default Topic;
