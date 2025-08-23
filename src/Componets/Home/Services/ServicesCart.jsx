import React from "react";

export const ServicesCart = ({item}) => {
      const {title,img,price} = item
  return (
    <div className="card space-x-5 bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={img}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-[#FF3811]">
         ${price}
        </p>
      </div>
    </div>
  );
};

export default ServicesCart;
