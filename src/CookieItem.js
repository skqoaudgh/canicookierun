import React, { useState } from "react";
import ModalCookie from "./ModalCookie";
import ItemDetail from "./ItemDetail";

import "./Item.css";

import icon_hp from "./assets/icon/heart.svg";
import icon_skill from "./assets/icon/magic.svg";
import icon_candy from "./assets/icon/candy.svg";
import icon_lock from "./assets/icon/lock.svg";

const CookieItem = ({ cookie, pet }) => {
  const [modalPosition, setModalPosition] = useState([0, 0]);
  const [popUpShowed, setPopUpShowed] = useState(false);

  function handleImageLoaded(event) {
    event.target.classList.add("loaded");
  }

  function handleMouseEnter(event) {
    if (!popUpShowed) {
      setModalPosition([event.target.offsetLeft, event.clientY]);
    }
  }

  function handleMouseLeave(event) {
    if (modalPosition[0] > 0) {
      setModalPosition([0, 0]);
    }
  }

  function handleHealthListOpen(event) {
    if (modalPosition[0] === 0) {
      setPopUpShowed(true);
      document.body.style.overflowY = "hidden";
    }
  }

  function handleHealthListClose(event) {
    if (popUpShowed) {
      setPopUpShowed(false);
      document.body.style.overflowY = "scroll";
      event.stopPropagation();
    }
  }

  return (
    <React.Fragment>
      <ItemDetail
        isOpen={popUpShowed}
        handleHealthListClose={handleHealthListClose}
        cookie={cookie}
        pet={pet}
      />
      <ModalCookie
        isOpen={modalPosition[0] > 0}
        pet={pet}
        bonus={cookie.bonus}
        left={modalPosition[0]}
        top={modalPosition[1]}
      />
      <li className="listItem" onClick={handleHealthListOpen}>
        <section className="item">
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
              ) : null}
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
                <img
                  src={icon_skill}
                  alt="쿠키능력"
                  title="쿠키능력"
                  onLoad={handleImageLoaded}
                />
                {cookie.skill}
              </li>
              <li>
                <img
                  src={icon_candy}
                  alt="마법사탕"
                  title="마법사탕"
                  onLoad={handleImageLoaded}
                />
                {cookie.candySkill}
              </li>
              <li>
                <img
                  src={icon_lock}
                  alt="잠금해제"
                  title="잠금해제"
                  onLoad={handleImageLoaded}
                />
                {cookie.unlockCondition}
              </li>
            </ul>
          </div>
        </section>
      </li>
    </React.Fragment>
  );
};

export default CookieItem;
