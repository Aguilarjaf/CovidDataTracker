import React, { useState } from "react";
import Article from "./Article.jsx";
import uuid from "react-uuid";

function CovidNews() {
  const newsApiUrl = `https://newsapi.org/v2/top-headlines?q=covid&sortBy=popularity&country=us&apiKey=${process.env.REACT_APP_NEWS_KEY}`;
  const [articlesArray, setArticlesArray] = useState([]);

  function fetchNews() {
    // Retrieves data from API
    fetch(newsApiUrl)
      .then((response_data) => {
        // console.log(response_data);
        return response_data.json();
      })
      .then((parsed_data) => {
        console.log(parsed_data.articles);

        setArticlesArray(parsed_data.articles);
      })
      .catch((error_data) => {
        console.log(error_data);
      });
  }

  return (
    <div className="container">
      <h3>Covid News Section</h3>
      <button className="btn btn-lg btn-primary btn-block mb-3" style={{maxWidth: "250px", margin: "auto"}} onClick={fetchNews}>Fetch Covid News</button>
      {articlesArray.map((singleArticle) => (
        <Article
          key={uuid()}
          articleImage={singleArticle.urlToImage}
          title={singleArticle.title}
          author={singleArticle.author}
          articleDescription={singleArticle.description}
          link={singleArticle.url}
        />
      ))}
    </div>
  );
}

export default CovidNews;
