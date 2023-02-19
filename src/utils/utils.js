import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-api-fpd6.onrender.com/api",
});

async function getArticles(queries) {
  const { data } = await api.get("/articles", { params: queries });
  return data.articles;
}

async function getArticleByID(id) {
  const { data } = await api.get(`/articles/${id}`);
  return data.article;
}

async function getArticleComments(id, queries) {
  const { data } = await api.get(`/articles/${id}/comments`, {
    params: queries,
  });
  return data.comments;
}

async function getUser(username) {
  const { data } = await api.get("/users/" + username);
  return data.user;
}

function patchArticleVote(id, inc_votes) {
  return api.patch(`/articles/${id}`, { inc_votes });
}

async function getTopics() {
  const { data } = await api.get("/topics");
  return data.topics;
}

function formatDate(dateS) {
  const timeNow = new Date().getTime();

  const seconds = (timeNow - dateS) / 1000;
  if (seconds < 60) {
    return `Less than a minute ago`;
  }
  const minutes = seconds / 60;
  const roundedMins = Math.floor(minutes);
  if (minutes < 60)
    return roundedMins === 1 ? "1 minute ago" : `${roundedMins} minutes ago`;
  const hours = minutes / 60;
  const roundedHours = Math.floor(hours);
  if (hours < 24)
    return roundedHours === 1 ? "1 hour ago" : `${roundedHours} hours ago`;
  const days = hours / 24;
  const roundedDays = Math.floor(days);
  if (days < 365)
    return roundedDays === 1 ? "1 day ago" : `${roundedDays} days ago`;
  return Math.floor(days / 365) === 1
    ? "1 year ago"
    : `${Math.floor(days / 365)} years ago`;
}

export {
  getArticles,
  getArticleByID,
  getArticleComments,
  getUser,
  patchArticleVote,
  getTopics,
  formatDate,
};
