import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getArticles } from "../utils/utils";
import styles from "../styles/filter.module.scss";
import utils from "../styles/utils.module.scss";
import Articles from "./Articles";
import Sort from "./Sort";
import Filter from "./Filter";

function ArticlesContainer() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useSearchParams();
  const [sort, setSort] = useState({ sort_by: "created_at", order: "desc" });
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getArticles(formatQueries())
      .then((res) => {
        setError(false);
        if (page === 1) {
          setArticles(res);
        } else {
          setArticles((old) => [...old, ...res]);
        }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });

    function formatQueries() {
      const query = { limit: 6, p: page, ...sort };
      if (params.has("topic")) {
        const filter = params.get("topic");
        if (filter !== "all") {
          query.topic = filter;
        }
      }
      return query;
    }
  }, [page, params, sort]);

  if (error)
    return (
      <main>
        <h1 className={styles.heading}>Browse Articles</h1>
        <form className={styles.container}>
          <Filter
            setParams={setParams}
            setPage={setPage}
            params={params}
            loading={loading}
          />
          <Sort setSort={setSort} setPage={setPage} loading={loading} />
        </form>
        <h2>No Articles Found</h2>
      </main>
    );

  return (
    <main>
      <h1 className={styles.heading}>Browse Articles</h1>
      <form className={styles.container}>
        <Filter
          setParams={setParams}
          setPage={setPage}
          params={params}
          loading={loading}
        />
        <Sort setSort={setSort} setPage={setPage} loading={loading} />
      </form>
      <Articles articles={articles} />
      <p className={loading ? "" : utils.hidden}>Loading...</p>
      <button
        className={loading ? utils.hidden : ""}
        onClick={() => setPage((prev) => prev + 1)}
      >
        Load More
      </button>
    </main>
  );
}

export default ArticlesContainer;
