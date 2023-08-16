import "../App.css";
import "../styles/home.css";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

function Home() {
  const [selectedButton, setSelectedButton] = useState("Home");
  const [previousButton, setpreviousButton] = useState("Home");
  const [newButton, setNewButton] = useState("Home");
  const [component, setComponent] = useState(<></>);

  const isTrue = true;
  const isFalse = false;

  useEffect(() => {
    function components() {
      if (selectedButton === "Home") {
        setpreviousButton("Home");
        setComponent(<></>);
      } else {
        if (selectedButton == "About" && previousButton == "Home") {
          setpreviousButton(selectedButton);
          setComponent(<About visible={isTrue} />);
        }
        if (selectedButton == "Contact" && previousButton == "Home") {
          setpreviousButton(selectedButton);
          setComponent(<Contact visible={isTrue} />);
        }
        if (selectedButton == "Projects" && previousButton == "Home") {
          setpreviousButton(selectedButton);
          setComponent(<Projects visible={isTrue} />);
        }
        if (selectedButton == "Skills" && previousButton == "Home") {
          setpreviousButton(selectedButton);
          setComponent(<Skills visible={isTrue} />);
        }
        //
        if (selectedButton == "About") {
          if (previousButton == "About") {
            setpreviousButton(selectedButton);
            setComponent(<About visible={isFalse} />);
          }
          if (previousButton == "Contact") {
            setpreviousButton(selectedButton);
            setComponent(<Contact visible={isFalse} />);
          }
          if (previousButton == "Projects") {
            setpreviousButton(selectedButton);
            setComponent(<Projects visible={isFalse} />);
          }
          if (previousButton == "Skills") {
            setpreviousButton(selectedButton);
            setComponent(<Skills visible={isFalse} />);
          }
          setTimeout(() => {
            setComponent(<></>);
          }, 950);
          setTimeout(() => {
            setComponent(<About visible={isTrue} />);
          }, 950);
        }
        if (selectedButton == "Contact") {
          if (previousButton == "About") {
            setpreviousButton(selectedButton);
            setComponent(<About visible={isFalse} />);
          }
          if (previousButton == "Contact") {
            setpreviousButton(selectedButton);
            setComponent(<Contact visible={isFalse} />);
          }
          if (previousButton == "Projects") {
            setpreviousButton(selectedButton);
            setComponent(<Projects visible={isFalse} />);
          }
          if (previousButton == "Skills") {
            setpreviousButton(selectedButton);
            setComponent(<Skills visible={isFalse} />);
          }
          setTimeout(() => {
            setComponent(<></>);
          }, 950);
          setTimeout(() => {
            setComponent(<Contact visible={isTrue} />);
          }, 950);
        }
        if (selectedButton == "Projects") {
          if (previousButton == "About") {
            setpreviousButton(selectedButton);
            setComponent(<About visible={isFalse} />);
          }
          if (previousButton == "Contact") {
            setpreviousButton(selectedButton);
            setComponent(<Contact visible={isFalse} />);
          }
          if (previousButton == "Projects") {
            setpreviousButton(selectedButton);
            setComponent(<Projects visible={isFalse} />);
          }
          if (previousButton == "Skills") {
            setpreviousButton(selectedButton);
            setComponent(<Skills visible={isFalse} />);
          }
          setTimeout(() => {
            setComponent(<></>);
          }, 950);
          setTimeout(() => {
            setComponent(<Projects visible={isTrue} />);
          }, 950);
        }
        if (selectedButton == "Skills") {
          if (previousButton == "About") {
            setpreviousButton(selectedButton);
            setComponent(<About visible={isFalse} />);
          }
          if (previousButton == "Contact") {
            setpreviousButton(selectedButton);
            setComponent(<Contact visible={isFalse} />);
          }
          if (previousButton == "Projects") {
            setpreviousButton(selectedButton);
            setComponent(<Projects visible={isFalse} />);
          }
          if (previousButton == "Skills") {
            setpreviousButton(selectedButton);
            setComponent(<Skills visible={isFalse} />);
          }
          setTimeout(() => {
            setComponent(<></>);
          }, 950);
          setTimeout(() => {
            setComponent(<Skills visible={isTrue} />);
          }, 950);
        }
      }
    }
    components();
  }, [selectedButton]);

  return (
    <div>
      <Navbar setSelectedButton={setSelectedButton} />
      <h1 className="nombre">
        <span>Gonzalo</span>
        <span>Molina</span>
        <span className="profession">Full Stack Developer</span>
      </h1>
      {component}
    </div>
  );
}

export default Home;

{
  /* {selectedButton === "About" && <About />}
{selectedButton === "Skills" && <Skills />}
{selectedButton === "Projects" && <Projects />}
{selectedButton === "Contact" && <Contact />} */
}

// import "../App.css";
// import "../styles/home.css";
// import React, { useEffect, useRef, useState } from "react";
// import Navbar from "../components/Navbar";
// import About from "./About";
// import Skills from "./Skills";
// import Projects from "./Projects";
// import Contact from "./Contact";

// function Home() {
//   const [selectedButton, setSelectedButton] = useState("Home");
//   const [previousButton, setpreviousButton] = useState(selectedButton);
//   const [newButton, setNewButton] = useState("Home");
//   const [isVisible, setIsVisible] = useState(false);
//   const [component, setComponent] = useState(null);

//   useEffect(() => {
//     function components() {
//       if (selectedButton === "Home") return;
//       else {
//         if (selectedButton == "About") {
//           return <About visible={isVisible} />;
//         }
//         if (selectedButton == "Contact") {
//           return <Contact visible={isVisible} />;
//         }
//         if (selectedButton == "Projects") {
//           return <Projects visible={isVisible} />;
//         }
//         if (selectedButton == "Skills") {
//           return <Skills visible={isVisible} />;
//         }
//       }
//     }
//   }, [selectedButton]);

//   return (
//     <div>
//       <Navbar setSelectedButton={setSelectedButton} />
//       <h1 className="nombre">
//         <span>Gonzalo</span>
//         <span>Molina</span>
//         <span className="profession">Full Stack Developer</span>
//       </h1>
//       {components()}
//     </div>
//   );
// }

// export default Home;
