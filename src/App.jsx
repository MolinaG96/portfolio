import "./App.css";
import botonMadera from "./assets/boton-madera.png";
import soga from "./assets/soga-nada-sinF.png";
import Navbar from "./components/Navbar";
import "./assets/fonts/sifonn/nuevo-sifonn/sifonn/stylesheet.css";

function App() {
  return (
    <div>
      <Navbar />
      <h1 className="nombre">
        <span>Gonzalo</span>
        <span>Molina</span>
        <span className="profession">Full Stack Developer</span>
      </h1>
    </div>
  );
}

export default App;
