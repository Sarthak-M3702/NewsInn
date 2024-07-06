import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
   let { title,description,imageUrl,newsUrl,author,date,source} = this.props;
    return (
   
      <div className="my-3">
    <div className="card" style={{width: "18rem"}}>
    <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex : '1' , left:'90%'}}>
    {source}
    <span class="visually-hidden">unread messages</span>
  </span> 
  <img src={imageUrl?imageUrl:"https://www.hindustantimes.com/ht-img/img/2024/07/01/1600x900/ANI-20240629168-0_1719813023681_1719813033599.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p class="card-text"><small class="text-body-secondary">By {!author?"Unknown":author} on {date}</small></p>
    <a href={newsUrl} rel="noreferrer" target="_blank"  className="btn btn-dark">Read More</a>
  </div>
   </div>
      </div>
    )
  }
}

export default NewsItem
