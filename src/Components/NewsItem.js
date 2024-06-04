import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title,descripton,imgUrl,newUrl,author,date,source}=this.props;
    return (
      <div>
        <div className="card my-3">
          <img src={imgUrl}className="card-img-top " style={{hover:""}}alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...<span className="badge badge-pill badge-">{source}</span></h5>
            <p className="card-text">
              {descripton}...
            </p>
            <a href={newUrl} target="_black" className="button btn btn-primary">
             Read More
            </a>
            <p className="author"><small>By  {!author?"Unknown":author}  on  {new Date(date).toGMTString()}</small></p>
          </div>
        </div>
      </div>
    );
  }
}
export default NewsItem;