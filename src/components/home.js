import home from "../assets/img/home-img.svg";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
function Home() {
  return (
    <section className="home container" id="home">
      <div className="home__content grid">
        <div className="home__group">
          <img src={home} alt="" className="home__img"></img>
          {/* <div className="home__indicator"></div> */}
        </div>

        <div className="home__data">
          <h3 className="home__subtitle">Hello&nbsp;!&nbsp; I'm </h3>
          <h1 className="home__title">Ganapriya &nbsp; Kheersagar </h1>
          <h3 className="home__description">
            Passionate Full Stack Web Developer
          </h3>
          <div className="footer__social">
            <a
              href="https://www.linkedin.com/in/ganapriyas/"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
            >
              <LinkedInIcon fontSize="small" />
            </a>
            <a
              href="https://github.com/GanapriyaS"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
            >
              <GitHubIcon fontSize="small" />
            </a>
            <a
              href="https://www.instagram.com/priya_kheersagar/"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
            >
              <InstagramIcon fontSize="small" />
            </a>
          </div>
          <br></br>

          <div className="home__buttons">
            <Link
              to="/files/Ganapriya_Resume.pdf"
              target="_blank"
              download
              className="button"
            >
              Download Resume
            </Link>
            {/* <a href="#" className="button--link button--flex">Track Record <i className='bx bx-right-arrow-alt button__icon'></i></a> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
