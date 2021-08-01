import React from "react";

function Article(props) {
  console.log("author " + props.author);

  return (
    <div className="container mainContainer">
      <div className="card mb-3" style={{backgroundColor: "offwhite"}}>
          <div className="card-body">
            <img src={props.articleImage} width="300" alt=""></img>
            <h5 className="mt-3">{props.title}</h5>
            <p>By {props.author}</p>
            <p>{props.articleDescription}</p>
            <p>
              <b>Link to article: </b>
              <a href={props.link}>{props.link}</a>
            </p>
          </div>
        </div>
    </div>
  );
}

export default Article;
