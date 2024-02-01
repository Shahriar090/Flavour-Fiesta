import React from "react";

const RenderItem = ({ singleItem }) => {
  const { item, itemImg, itemDes } = singleItem;
  return (
    <div className="card-container flex flex-col gap-6 shadow-lg p-4 rounded-md">
      <picture>
        <img
          src={itemImg}
          alt=""
          className="w-full h-auto lg:h-[250px] rounded-md"
        />
      </picture>
      <div>
        <h1 className="text-xl lg:text-2xl font-bold text-black font-mono">
          {item}
        </h1>
        <p className="text-lg font-sans text-gray-700 max-w-[40ch]">
          {itemDes}
        </p>
      </div>
    </div>
  );
};

export default RenderItem;
