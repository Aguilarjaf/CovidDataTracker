import React from "react";

function Article(props) {
  console.log("author " + props.author);

  return (
    <div className="container">
      <div className="row border mb-3 pt-3 bg-light ml-1 mr-1 mt-1">
            <div className="col-md-4">
              <img src={props.articleImage} width="135" alt=""></img>
            </div>
            
            <div className="col-md-8 text-left">
              <p className="p-0 m-0"><a href={props.link}>{props.title}</a></p>
              {/* <p>By {props.author}</p> */}
              <p className="p-0 m-0">{props.articleDescription}</p>
              {/* <p>{props.articleContent}</p> */}
            </div>
      </div>
    </div>
  );
}

export default Article;
