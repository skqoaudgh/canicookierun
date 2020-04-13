import React from "react";
import "./ItemDetail.css";

const ItemDetail = ({ isOpen, handleHealthListClose, cookie, pet }) => {
  return (
    <React.Fragment>
      {isOpen ? (
        <div className="detail_background">
          <div className="detail_container">
            <div className="detail_title">
              <span>{cookie.name}</span>
              <button onClick={handleHealthListClose}>X</button>
            </div>
            <div className="detail_content">
              <div className="detail_left">
                <div className="left_info">
                  <div className="left_first">
                    <div className="left_pet">
                      <span>짝꿍 펫:</span>
                      <img
                        src={require(`./assets/pet/${pet.imageURL}`)}
                        alt={pet.name}
                        title={pet.name}
                      />
                    </div>
                    <div className="left_about">
                      <button>스토리</button>
                      <button>관계도</button>
                    </div>
                  </div>
                  <div className="left_second">
                    <span>{cookie.grade}</span>
                    <img
                      src={require(`./assets/cookie/${cookie.imageURL}`)}
                      alt={cookie.name}
                      title={cookie.name}
                    />
                  </div>
                  <div className="left_third">
                    <div>
                      <span>스킨</span>
                    </div>
                    <div>
                      <span>마법사탕</span>
                    </div>
                  </div>
                </div>
                <div className="left_health">체력: {cookie.health}</div>
              </div>
              <div className="detail_right">
                <h2>쿠키 능력:</h2>
                <h3>무대에 올라가 장미 탱고를 춘다.</h3>
                <p>상세 설명</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default ItemDetail;
