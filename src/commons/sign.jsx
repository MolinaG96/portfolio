import React, { useEffect, useState } from "react";
import letrero from "../assets/sign.png";
import "../styles/sign.css";

const Sign = () => {
  return (
    <div>
      <img src={letrero} alt="Letrero" className="letrero" />
    </div>
  );
};

export default Sign;
