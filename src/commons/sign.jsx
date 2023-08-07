import React, { useEffect, useState } from "react";
import letrero from "../assets/sign.png";
import "../styles/sign.css";

const Sign = ({ selectedButton }) => {
  const [signStyles, setsignStyles] = useState("letrero");

  useEffect(() => {
    if (selectedButton === "Home") setsignStyles("letreront");
    else {
      setTimeout(() => {
        setsignStyles("letreront");
        setTimeout(() => {
          setsignStyles("letrero");
        }, [1000]);
      }, [1000]);
      setsignStyles("letrero");
    }
  }, [selectedButton]);

  return (
    <div>
      <img src={letrero} alt="Letrero" className={signStyles} />
    </div>
  );
};

export default Sign;
