import { Route, Routes } from "react-router-dom";
import HomeContainer from "./components/HomeContainer";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
import ArticleContainer from "./components/ArticleContainer";
import ArticlesContainer from "./components/ArticlesContainer";

function App() {
  return (
    <div className="App">
        <Nav />
        <Routes>
          <Route path="/articles" element={<ArticlesContainer />} />
          <Route path="/articles/:article_id" element={<ArticleContainer />} />
          <Route path="/" element={<HomeContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
