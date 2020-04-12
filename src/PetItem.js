import React from "react";
import "./Item.css";

const PetItem = ({ pet }) => {
  function handleImageLoaded(event) {
    event.target.classList.add("loaded");
  }

  return (
    <li className="listItem">
      <section className="item">
        <figure className="imageWrapper">
          <img
            src={require(`./api/${pet.imageURL}`)}
            alt={pet.name}
            onLoad={handleImageLoaded}
          />
        </figure>
        <div className="infoWrapper">
          <div className="info-title">
            <div className="info-first">
              <span className="itemName">{pet.name}</span>
              <strong>{pet.grade}</strong>
            </div>
            <span className="partner">짝꿍쿠키</span>
          </div>
          <div className="info-detail">{pet.skill}</div>
        </div>
      </section>
    </li>
  );
};

export default PetItem;
