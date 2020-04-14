import React, { useState, useEffect, useRef } from "react";
import "./Modal.css";

import icon_skill from "../assets/icon/magic.svg";
import icon_bonus from "../assets/icon/bonus.svg";

const ModalCookie = ({ isOpen, pet, bonus, left, top }) => {
  const container = useRef();
  const [position, setPosition] = useState({ left: 0, top: 0 });

  function handleImageLoaded(event) {
    event.target.classList.add("loaded");
  }

  useEffect(() => {
    if (container.current) {
      setPosition({
        left: left - container.current.offsetWidth + 20,
        top: top,
        visibility: "visible",
      });
    }
  }, [left, top]);

  return (
    <React.Fragment>
      {isOpen ? (
        <div ref={container} className="modal" style={position}>
          <section className="modalItem">
            <figure className="imageWrapper">
              <img
                src={require(`../assets/pet/${pet.imageURL}`)}
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
                        <li key={index} className="petSkill">
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
                                width: 20,
                                height: 10,
                                display: "inline-block",
                              }}
                            ></div>
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
      ) : null}
    </React.Fragment>
  );
};

export default ModalCookie;
