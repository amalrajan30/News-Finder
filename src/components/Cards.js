import React from "react";
import "../style.css";
import Loading from "../layouts/Loading";
export class Cards extends React.Component {
  render() {
    let elements = [];
    elements = this.props.items.map((item, arr) => {
      return (
        <div className="card" key={arr}>
        <div className="cardHead">
          <h4>{item.title}</h4>
        </div>
        <div className="cardBody">
          <img src={item.urlToImage} alt="pst-img" />
        </div>
        <div className="cardFooter">
          <p>{item.description}</p>
          <a className="buttn" href={item.url}>
            <button style={{color:"#ecf0f1"}}>Read More</button>
          </a>
        </div>
      </div>
      );
    });
    return(
      <div className="cards">
      {elements}
      </div>
    );
  }
}