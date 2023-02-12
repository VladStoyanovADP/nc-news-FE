import ArticleTile from "./ArticleTile";
import styles from "../styles/cards.module.scss";

function Articles({ articles }) {
  return (
    <section className={styles.container}>
      {articles.map((article) => (
        <ArticleTile key={article.article_id} article={article} />
      ))}
    </section>
  );
}

export default Articles;
