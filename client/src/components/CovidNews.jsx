import React, { useEffect, useState } from "react";
import Article from "./Article.jsx";
import uuid from "react-uuid";

function CovidNews() {
  const [articlesArray, setArticlesArray] = useState(["overwrite"]);
  const [arrayUpdated, setArrayUpdated] = useState(false);

  useEffect(() => {
    // Retrieves data from API
    fetch("/newsapi")
      .then((response_data) => response_data.json())
      .then((parsed_data) => {
        console.log("Getting Covid News");
        console.log(parsed_data);
        setArticlesArray(parsed_data);
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
