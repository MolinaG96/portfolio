import React from "react";
import "../styles/navbar.css"; // Crearemos estilos para la barra de navegación en este archivo
import mano from "../assets/mano.png";
import soga from "../assets/soga-nada-sinF.png";
import madera from "../assets/boton-madera.png";

const Navbar = () => {
  return (
    <div className="navbar-container">
      {/* Mano */}
      <img src={mano} alt="Mano" className="mano" />
      {/* Soga superior */}
      <img src={soga} alt="Soga" className="soga-top" />
      {/* Maderas */}
      <img
        src={madera}
        alt="Madera"
        className="madera"
        style={{ left: "100px" }}
      />
      <img
        src={madera}
        alt="Madera"
        className="madera"
        style={{ left: "300px" }}
      />
      <img
        src={madera}
        alt="Madera"
        className="madera"
        style={{ left: "500px" }}
      />
      <img
        src={madera}
        alt="Madera"
        className="madera"
        style={{ left: "700px" }}
      />
      <img
        src={madera}
        alt="Madera"
        className="madera"
        style={{ left: "900px" }}
      />
      {/* Soga inferior */}
      <img src={soga} alt="Soga" className="soga-bottom" />
    </div>
  );
};

export default Navbar;

// import React from "react";
// import "../styles/navbar.css"; // Crearemos estilos para la barra de navegación en este archivo
// import mano from "../assets/mano.png";
// import soga from "../assets/soga-nada-sinF.png";
// import madera from "../assets/boton-madera.png";

// const Navbar = () => {
//   return (
//     <div className="navbar-container">
//       {/* Mano */}
//       <img
//         src={mano}
//         alt="Mano"
//         style={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//         }}
//       />

//       {/* Soga superior */}
//       <img
//         src={soga}
//         alt="Soga"
//         style={{
//           position: "absolute",
//           top: "0",
//           left: "50%",
//           transform: "translateX(-50%)",
//         }}
//       />

//       {/* Soga inferior */}
//       <img
//         src={soga}
//         alt="Soga"
//         style={{
//           position: "absolute",
//           bottom: "0",
//           left: "50%",
//           transform: "translateX(-50%)",
//         }}
//       />

//       {/* Maderas */}
//       <img
//         src={madera}
//         alt="Madera"
//         style={{ position: "absolute", top: "0", left: "10%" }}
//       />
//       <img
//         src={madera}
//         alt="Madera"
//         style={{ position: "absolute", top: "0", left: "30%" }}
//       />
//       <img
//         src={madera}
//         alt="Madera"
//         style={{ position: "absolute", top: "0", left: "50%" }}
//       />
//       <img
//         src={madera}
//         alt="Madera"
//         style={{ position: "absolute", top: "0", left: "70%" }}
//       />
//       <img
//         src={madera}
//         alt="Madera"
//         style={{ position: "absolute", top: "0", left: "90%" }}
//       />
//     </div>
//   );
// };

// export default Navbar;
