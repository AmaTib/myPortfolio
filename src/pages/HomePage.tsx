import { useState, useEffect } from "react";
import "../styles/Homepage.css";

export const HomePage = () => {
  const [width, setWidth] = useState(window.innerWidth);

  //this useeffect makes sure the width state updates when resizing the window
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(width);

  return (
    <>
      <section className="mainContent">
        <div className="nameContainer">
          <h1>Amanda</h1>
        </div>
        <div className="underLine"></div>
        <div className="textContainer">
          {width < 600 ? (
            <>
              <p>Front</p>
              <p>End</p>
              <p>Developer</p>
            </>
          ) : (
            <p>Front End Developer</p>
          )}
        </div>
      </section>
    </>
  );
};
