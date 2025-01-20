import React, { useState } from "react";
import Button from "./button";

const productCard = () => {
  const [data, setData] = useState({
    name: "Toy",
    price: 69,
    image: "toy.png",
  });
  return (
    <div>
      <img src={data.image} alt="" />
      <h2>{data.name}</h2>
      <p>Price: {data.price}</p>
      <Button />
    </div>
  );
};

export default productCard;
