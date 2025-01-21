import "../styles/footer.css";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { RxOpenInNewWindow } from "react-icons/rx";

export const Footer = () => {
  return (
    <>
      <footer>
        <a href="https://github.com/AmaTib" target="_blank">
          <FiGithub className="icon" />
          <span className="iconText">
            Github <RxOpenInNewWindow />
          </span>
        </a>
        <a href="https://www.linkedin.com/in/amanda-tibell/" target="_blank">
          <FiLinkedin className="icon" />
          <span className="iconText">
            Linkedin <RxOpenInNewWindow />
          </span>
        </a>
      </footer>
    </>
  );
};
