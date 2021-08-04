import React from "react";

function Article(props) {
  console.log("author " + props.author);

  return (
    <div >
      <div className="card mb-3 newsArticle">
          <div className="card-body">
            <img src={props.articleImage} width="300" alt=""></img>
            <h5 className="mt-3"><a href={props.link}>{props.title}</a></h5>
            <p>By {props.author}</p>
            <p>{props.articleDescription}</p>
            <p>{props.articleContent}</p>
          </div>
        </div>
    </div>
  );
}

export default Article;
