import React, { useEffect, useState } from "react";
import Article from "./Article.jsx";
import uuid from "react-uuid";

function CovidNews() {
  const [articlesArray, setArticlesArray] = useState([]);
  const [arrayUpdated, setArrayUpdated] = useState(false);

  useEffect(() => {
    // Retrieves data from API
    fetch(
      `https://newsapi.org/v2/top-headlines?q=covid&sortBy=popularity&country=us&apiKey=${process.env.REACT_APP_NEWS_KEY}`
    )
      .then((response_data) => {
        // console.log(response_data);
        return response_data.json();
      })
      .then((parsed_data) => {
        console.log("Getting Covid News");
        console.log(parsed_data.articles);
        setArticlesArray(parsed_data.articles);
        setArrayUpdated(true);
      })
      .catch((error_data) => {
        console.log(error_data);
      });
  }, []);

  return (
    <div className="container">
      <h3>Covid News Section</h3>
      {arrayUpdated
        ? articlesArray.map((singleArticle) => (
            <Article
              key={uuid()}
              articleImage={singleArticle.urlToImage}
              title={singleArticle.title}
              author={singleArticle.author}
              articleDescription={singleArticle.description}
              link={singleArticle.url}
            />
          ))
        : null}
    </div>
  );
}

export default CovidNews;
