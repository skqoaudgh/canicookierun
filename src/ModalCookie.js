import React, { useEffect, useRef } from "react";
import "./Modal.css";

import icon_skill from "./assets/icon/magic.svg";
import icon_bonus from "./assets/icon/bonus.svg";

const ModalCookie = ({ pet, bonus, left, top }) => {
  const container = useRef();

  function handleImageLoaded(event) {
    event.target.classList.add("loaded");
  }

  useEffect(() => {
    container.current.style.left = `${
      left - container.current.offsetWidth + 20
    }px`;
    container.current.style.top = `${top - 130}px`;
    container.current.style.visibility = "visible";
  }, []);

  return (
    <div ref={container} className="modal">
      <section className="modalItem">
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
          </div>
          <div className="info-detail">
            <ul className="detailList">
              <li>
                <ul className="petSkills">
                  {pet.skills.map((skill, index) => (
                    <li className="petSkill">
                      {index === 0 ? (
                        <img
                          src={icon_skill}
                          alt="펫능력"
                          title="펫능력"
                          onLoad={handleImageLoaded}
                        />
                      ) : (
                        <div style={{width:14, height: 10, display: 'inline-block'}}></div>
                      )}
                      {skill}
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <img
                  src={icon_bonus}
                  alt="조합보너스"
                  title="조합보너스"
                  onLoad={handleImageLoaded}
                />
                {bonus}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModalCookie;
