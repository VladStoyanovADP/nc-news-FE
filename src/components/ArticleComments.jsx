import { useEffect, useState } from "react";
import { getArticleComments } from "../utils/utils";
import styles from "../styles/review.module.scss";
import utils from "../styles/utils.module.scss";
import Comment from "./Comment";

function ArticleComments({ articleId, error, waiting }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    getArticleComments(articleId).then((res) => {
      setComments(res);
      setLoading(false);
    });
  }, [articleId]);

  useEffect(() => {
    if (page === 1) return;
    setLoading(true);
    getArticleComments(articleId, { p: page }).then((res) => {
      setComments((old) => [...old, ...res]);
      setLoading(false);
    });
  }, [articleId, page]);

  if (error) return;
  if (waiting) return;

  return (
    <section className={styles.comments}>
      <h2 className={!loading ? "" : utils.hidden}>Comments</h2>
      <p className={loading ? "" : utils.hidden}>Loading...</p>
      <div className={styles.wrapper}>
        {comments.length === 0
          ? "No comments yet..."
          : comments.map((comment) => (
              <Comment
                key={comment.comment_id}
                comment={comment}
                // username={user?.username}
                setComments={setComments}
              />
            ))}
      </div>
      <button onClick={() => setPage((prev) => prev + 1)}>LOAD MORE</button>
    </section>
  );
}

export default ArticleComments;
