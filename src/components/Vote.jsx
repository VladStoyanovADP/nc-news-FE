import { useState } from "react";
import styles from "../styles/votes.module.scss";
import { patchArticleVote } from "../utils/utils";

function Vote({ isArticle, id, votes }) {
  const [articleVotes, setArticleVotes] = useState(votes);
  const voteHandler = (inc) => {
    setArticleVotes((prev) => prev + inc);
    if (isArticle) {
      patchArticleVote(id, inc).catch(({ response }) => {
        setArticleVotes((prev) => prev - inc);
      });
    }
  };
  return (
    <div className={styles.container}>
      <button onClick={() => voteHandler(1)}>
        <span className={`material-symbols-outlined ${styles.icon}`}>
          thumb_up
        </span>
      </button>
      <p>{articleVotes}</p>
      <button onClick={() => voteHandler(-1)}>
        <span className={`material-symbols-outlined ${styles.icon}`}>
          thumb_down
        </span>
      </button>
    </div>
  );
}

export default Vote;
