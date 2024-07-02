import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
   let { title,description,imageUrl,newsUrl} = this.props;
    return (
   
      <div className="my-3">
    <div className="card" style={{width: "18rem"}}>
  <img src={imageUrl?imageUrl:"https://www.hindustantimes.com/ht-img/img/2024/07/01/1600x900/ANI-20240629168-0_1719813023681_1719813033599.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={newsUrl} target="_blank"  className="btn btn-dark">Read More</a>
  </div>
   </div>
      </div>
    )
  }
}

export default NewsItem
