import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title, description,imageUrl, newsUrl,author,date} = this.props;
    return (
      <div>
        <div class="card" >
          <img src={imageUrl?imageUrl:"https://images.hindustantimes.com/img/2022/07/08/1600x900/1fdb9d4e-fed1-11ec-8171-8e816335ea07_1657296440278.jpg"} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{title}...</h5>
            <p class="card-text">
              {description}...
            </p>
            <p class="card-text"> <small class="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" class="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
