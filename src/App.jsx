import "./App.css";
import Navbar from "./components/Navbar";
import "./assets/fonts/sifonn/nuevo-sifonn/sifonn/stylesheet.css";
import Sign from "./commons/sign";

function App() {
  return (
    <div>
      <Navbar />
      <h1 className="nombre">
        <span>Gonzalo</span>
        <span>Molina</span>
        <span className="profession">Full Stack Developer</span>
      </h1>
      <Sign />
    </div>
  );
}

export default App;
