import { FaReact, FaVuejs, FaCss3Alt, FaHtml5, FaSass } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiJavascript, SiTypescript } from "react-icons/si";
import "../styles/about.css";

export const AboutPage = () => {
  return (
    <section className="mainContainer aboutContainer">
      <div className="aboutMeText">
        <h2>Vem är jag?</h2>
        <p>
          Djup fråga, men jag ska inte gå så djupt. Jag heter Amanda och är en
          nyexaminerad front end utvecklare från Medieinstitutet.
        </p>
        <br />
        <p>
          Innan jag började utbildningen hade jag ingen tidigare erfarenhet inom
          området, men jag blev snabbt fascinerad och inspirerad av
          möjligheterna och utvecklingspotentialen inom yrket.
        </p>
        <br />
        <p>
          Jag är en noggrann och samarbetsvillig problemlösare som är uppmärksam
          på detaljer. Att designa användarvänliga och estetiskt tilltalande
          gränssnitt är en aspekt av webbutveckling som jag verkligen
          uppskattar.
        </p>
      </div>

      <div className="skillsInAboutContainer">
        <div>
          <FaReact className="icon" />
          <span className="iconText">React</span>
        </div>

        <div>
          <RiNextjsFill className="icon" />
          <span className="iconText">Next.js</span>
        </div>

        <div>
          <FaVuejs className="icon" />
          <span className="iconText">Vue</span>
        </div>

        <div>
          <FaCss3Alt className="icon" />
          <span className="iconText">CSS</span>
        </div>

        <div>
          <SiTypescript className="icon" />
          <span className="iconText">TypeScript</span>
        </div>

        <div>
          <SiJavascript className="icon" />
          <span className="iconText">Javascript</span>
        </div>

        <div>
          <FaSass className="icon" />
          <span className="iconText">Sass</span>
        </div>

        <div>
          <FaHtml5 className="icon" />
          <span className="iconText">HTML</span>
        </div>
      </div>
    </section>
  );
};
