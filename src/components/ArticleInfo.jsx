import { useEffect, useState } from "react";
import { getArticleByID } from "../utils/utils";
import styles from "../styles/review.module.scss";
import utils from "../styles/utils.module.scss";
import Vote from "./Vote";

function ArticleInfo({ articleId, error, setError, loading, setLoading }) {
  const [article, setArticle] = useState({});

  useEffect(() => {
    setLoading(true);
    getArticleByID(articleId)
      .then((res) => {
        setArticle(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, [articleId, setError, setLoading]);

  if (error)
    return (
      <section className={styles.content}>
        <h1>Article Not found</h1>
      </section>
    );

  return (
    <section className={styles.content}>
      <p className={loading ? "" : utils.hidden}>Loading...</p>
      <div>
        <h1>{article.title}</h1>
        <img src={article.article_img_url} alt={article.title} />
        <p>{article.body}</p>
      </div>
      {loading ? null : (
        <Vote isArticle={true} id={articleId} votes={article.votes} />
      )}
    </section>
  );
}

export default ArticleInfo;
