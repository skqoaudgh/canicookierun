import React, { useState, useEffect, useRef } from "react";
import "./Modal.css";

import icon_hp from "../assets/icon/heart.svg";
import icon_skill from "../assets/icon/magic.svg";
import icon_candy from "../assets/icon/candy.svg";
import icon_lock from "../assets/icon/lock.svg";

const ModalPet = ({ cookie, left, top }) => {
  const container = useRef();
  const [position, setPosition] = useState({ left: 0, top: 0 });

  function handleImageLoaded(event) {
    event.target.classList.add("loaded");
  }

  useEffect(() => {
    setPosition({
      left: left - container.current.offsetWidth + 20,
      top: top,
      visibility: "visible",
    });
  }, [left, top]);

  return (
    <div ref={container} className="modal" style={position}>
      <section className="modalItem">
        <figure className="imageWrapper">
          <img
            src={require(`../assets/cookie/${cookie.imageURL}`)}
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
                />
                {cookie.skill}
              </div>
              <div>
                <img
                  src={icon_candy}
                  alt="마법사탕"
                  title="마법사탕"
                  onLoad={handleImageLoaded}
                />
                {cookie.candySkill}
              </div>
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
    </div>
  );
};

export default ModalPet;
