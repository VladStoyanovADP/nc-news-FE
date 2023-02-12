import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/review.module.scss";
import ArticleComments from "./ArticleComments";
import ArticleInfo from "./ArticleInfo";

function ArticleContainer() {
  const { article_id } = useParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <main className={styles.review_wrapper}>
      <ArticleInfo
        articleId={article_id}
        error={error}
        setError={setError}
        loading={loading}
        setLoading={setLoading}
      />
      <ArticleComments error={error} articleId={article_id} waiting={loading} />
    </main>
  );
}

export default ArticleContainer;
