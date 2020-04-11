import React from "react";
import './Item.css';

const PetItem = ({ pet }) => {
  function handleImageLoaded(event) {
    event.target.classList.add('loaded');
  }

  return (
    <li className="listItem">
      <section className="item">
        <figure className="imageWrapper"><img src={require(`./api/${pet.imageURL}`)} alt={pet.name} onLoad={handleImageLoaded} /></figure>
        <div className="infoWrapper">
          <div className="info-title">{pet.name} <strong>{pet.grade}</strong> <span>짝꿍쿠키</span></div>
          <div className="info-detail">{pet.skill}</div>
        </div>
      </section>
    </li>
  );
};

export default PetItem;
