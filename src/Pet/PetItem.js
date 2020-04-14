import React, { useState } from "react";
import ModalPet from "../Modal/ModalPet";

import "../Cookie/Item.css";

import icon_skill from "../assets/icon/magic.svg";

const PetItem = ({ cookie, pet }) => {
  const [modalPosition, setModalPosition] = useState([0, 0]);

  function handleImageLoaded(event) {
    event.target.classList.add("loaded");
  }

  function handleMouseEnter(event) {
    setModalPosition([event.target.offsetLeft, event.clientY]);
  }

  function handleMouseLeave(event) {
    setModalPosition([0, 0]);
  }

  return (
    <li className="listItem">
      {modalPosition[0] > 0 ? (
        <ModalPet
          cookie={cookie}
          bonus={cookie.bonus}
          left={modalPosition[0]}
          top={modalPosition[1]}
        />
      ) : null}
      <section className="item">
        <figure className="imageWrapper">
          <img
            src={require(`../assets/pet/${pet.imageURL}`)}
            alt={pet.name}
            title={pet.name}
            onLoad={handleImageLoaded}
          />
        </figure>
        <div className="infoWrapper">
          <div className="info-title">
            <div className="info-first">
              <span className="itemName">{pet.name}</span>
              <strong>{pet.grade}</strong>
            </div>
            {pet.partner !== -1 ? (
              <span
                className="partner"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                짝꿍쿠키
              </span>
            ) : null}
          </div>
          <div className="info-detail">
            <ul className="petSkills">
              {pet.skills.map((skill, index) => (
                <li className="petSkill" key={index}>
                  {index === 0 ? (
                    <img
                      src={icon_skill}
                      alt="펫능력"
                      title="펫능력"
                      onLoad={handleImageLoaded}
                    />
                  ) : (
                    <div
                      style={{
                        width: 18.5,
                        height: 10,
                        display: "inline-block",
                      }}
                    ></div>
                  )}
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </li>
  );
};

export default PetItem;
