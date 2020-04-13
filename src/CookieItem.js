import React, { useState } from "react";
import ModalCookie from "./ModalCookie";

import "./Item.css";

import icon_hp from "./assets/icon/heart.svg";
import icon_skill from "./assets/icon/magic.svg";
import icon_candy from "./assets/icon/candy.svg";
import icon_lock from "./assets/icon/lock.svg";

const CookieItem = ({ cookie, pet }) => {
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
      <section className="item">
        {modalPosition[0] > 0 ? (
          <ModalCookie
            pet={pet}
            bonus={cookie.bonus}
            left={modalPosition[0]}
            top={modalPosition[1]}
          />
        ) : (
          ""
        )}
        <figure className="imageWrapper">
          <img
            src={require(`./assets/cookie/${cookie.imageURL}`)}
            alt={cookie.name}
            title={cookie.name}
            onLoad={handleImageLoaded}
          />
        </figure>
        <div className="infoWrapper">
          <div className="info-title">
            <div className="info-first">
              <span className="itemName">{cookie.name}</span>
              <strong>{cookie.grade}</strong>
            </div>
            {cookie.partner !== -1 ? (
              <span
                className="partner"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                짝꿍펫
              </span>
            ) : (
              ""
            )}
          </div>
          <ul className="info-detail">
            <li>
              <img
                src={icon_hp}
                alt="체력"
                title="체력"
                onLoad={handleImageLoaded}
              />
              {cookie.health}
            </li>
            <li>
              <div>
                <img
                  src={icon_skill}
                  alt="쿠키능력"
                  title="쿠키능력"
                  onLoad={handleImageLoaded}
                />{" "}
                {cookie.skill}
              </div>
              <div>
                <img
                  src={icon_candy}
                  alt="마법사탕"
                  title="마법사탕"
                  onLoad={handleImageLoaded}
                />{" "}
                {cookie.candySkill}
              </div>
            </li>
            <li>
              <img
                src={icon_lock}
                alt="잠금해제"
                title="잠금해제"
                onLoad={handleImageLoaded}
              />{" "}
              {cookie.unlockCondition}
            </li>
          </ul>
        </div>
      </section>
    </li>
  );
};

export default CookieItem;
