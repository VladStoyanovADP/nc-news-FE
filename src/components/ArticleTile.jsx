import styles from "../styles/cards.module.scss";
import placeholder from "../assets/placeholder_profile.png";
import { Link } from "react-router-dom";
import { formatDate, getUser } from "../utils/utils";
import { useEffect, useState } from "react";

function ArticleTile({ article }) {
  const [owner, setOwner] = useState(null);
  useEffect(() => {
    getUser(article.author).then((res) => setOwner(res));
  }, [article]);
  return (
    <Link to={`/articles/${article.article_id}`} className={styles.large_card}>
      <div className={styles.img_container}>
        <img src={article.article_img_url} alt="" />
      </div>
      <div className={styles.content}>
        <p className={styles.tag}>{article.topic}</p>
        <h2>{article.title}</h2>
        <div className={styles.info_wrapper}>
          <div className={styles.owner}>
            <img
              src={owner === null ? placeholder : owner.avatar_url}
              onError={(e) => (e.target.src = placeholder)}
              alt=""
            />
            <div className={styles.info}>
              <p>{article.author}</p>
              <p>{formatDate(Date.parse(article.created_at))}</p>
            </div>
          </div>
          <div className={styles.stats}>
            <p>
              {article.votes}
              <span className="material-symbols-outlined">thumb_up</span>
            </p>
            <p>
              {article.comment_count}
              <span className="material-symbols-outlined">comment</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ArticleTile;
