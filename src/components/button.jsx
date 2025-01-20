import React from "react";

const button = () => {
  const handelOnClick = () => {
    console.log("It works ╰(*°▽°*)╯");
  };
  return (
    <div>
      <button onClick={handelOnClick}>View Product</button>
    </div>
  );
};

export default button;
