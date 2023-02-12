import { useEffect, useState } from "react";
import { getTopics } from "../utils/utils";

function Filter({ setParams, params, loading, setPage }) {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getTopics().then((res) => setTopics(res));
  }, []);
  return (
    <select
      disabled={loading}
      aria-label="filter by topic"
      value={params.get("topic") ? params.get("topic") : "all"}
      onChange={(e) => {
        setParams({ topic: e.target.value });
        setPage(1);
      }}
    >
      <option value="all">Filter</option>
      {topics.map(({ slug }) => (
        <option key={slug} value={slug}>
          {slug}
        </option>
      ))}
    </select>
  );
}

export default Filter;
