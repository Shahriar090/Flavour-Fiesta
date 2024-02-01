import React from "react";

const RenderItem = ({ singleItem }) => {
  const { item, itemImg, itemDes } = singleItem;
  return (
    <div className="card-container ">
      <picture>
        <img src={itemImg} alt="" className="card-img" />
      </picture>
      <div>
        <h1 className="card-title">{item}</h1>
        <p className="card-des">{itemDes}</p>
      </div>
    </div>
  );
};

export default RenderItem;
