import { useEffect, useState } from "react";
import { getTopics } from "../utils/utils";
import styles from "../styles/home.module.scss";
import Topic from "./Topic";

function TopicsContainer()
{
  const [isPending, setIsPending] = useState(true)
  const [topic, setTopics] = useState([]);
  useEffect(() => {
    getTopics().then((res) =>
    {
      setTopics(res)
      setIsPending(false);
    });
  }, []);
  return (
    <section className={styles.cat_container}>
      <h2>
        <span className={`material-symbols-outlined ${styles.icon}`}>
          folder_open
        </span>{" "}
        Browse by topic
      </h2>
      <div className={styles.cat_wrapper}>
        {isPending && <div> Loading... </div>}
        {topic.map((topic) => (
          <Topic key={topic.slug} topic={topic} />
        ))}
      </div>
    </section>
  );
}

export default TopicsContainer;
