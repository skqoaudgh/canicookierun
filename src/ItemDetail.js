import React from "react";
import "./ItemDetail.css";

const ItemDetail = ({ isOpen, handleHealthListClose, cookie }) => {
  return (
    <React.Fragment>
      {isOpen ? (
        <div className="itemDetailBackground">
          <div className="itemDetailListContainer">
            <div className="detail_left">
              <img src={require(`./assets/cookie/${cookie.imageURL}`)} alt={cookie.name} title={cookie.name} />
            </div>
            <div className="detail_right">
              <div className="itemDetailTitle">{cookie.name} <span>{cookie.grade}</span></div>
              <div className="itemDetailStory">Story</div>
            </div>
          </div>
          <div className="buttonContainer">
              <button onClick={handleHealthListClose}>닫기</button>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default ItemDetail;
