import React from "react";
import "./Item.css";

const CookieItem = ({ cookie }) => {
  function handleImageLoaded(event) {
    event.target.classList.add("loaded");
  }

  return (
    <li className="listItem">
      <section className="item">
        <figure className="imageWrapper">
          <img
            src={require(`./api/${cookie.imageURL}`)}
            alt={cookie.name}
            onLoad={handleImageLoaded}
          />
        </figure>
        <div className="infoWrapper">
          <div className="info-title">
            <div className="info-first">
              <span className="itemName">{cookie.name}</span>
              <strong>{cookie.grade}</strong>
            </div>
            <span className="partner">짝꿍펫</span>
          </div>
          <ul className="info-detail">
            <li>{cookie.health}</li>
            <li>
              {cookie.skill} {cookie.candySkill}
            </li>
            <li>{cookie.unlockCondition}</li>
          </ul>
        </div>
      </section>
    </li>
  );
};

export default CookieItem;
