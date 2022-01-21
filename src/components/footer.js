import logo from "../assets/img/logo.svg";
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <footer className="footer section scroll-header" id="contact">
      <div className="footer__container container grid">
        <div className="footer__content">
          <a href="/#" className="footer__logo">
            <img src={logo} alt="" className="footer__logo-img"></img>
            anapriya
          </a>

          <p className="footer__description">
            Enjoy the life in the <br></br> way you wish.
          </p>

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
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Sections</h3>

          <ul className="footer__links">
            <li>
              <a href="/#" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="/#" className="footer__link">
                Skills
              </a>
            </li>
            <li>
              <a href="/#" className="footer__link">
                Resume
              </a>
            </li>
            <li>
              <a href="/#" className="footer__link">
                Projects
              </a>
            </li>
            <li>
              <a href="/#" className="footer__link">
                Blogs
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Contact</h3>
          <div className="contact">
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              justifyContent="center"
              alignItems="space-around"
            >
              <Grid item xs={12}>
                <div className="info-box">
                  <h3>Email Me</h3>
                  <p>ganapriyakheersagar@gmail.com</p>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="info-box">
                  <h3>Call Me</h3>
                  <p>+91 9123574078</p>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>

      <span className="footer__copy">
        &#169; Ganapriya Kheersagar - All rigths reserved
      </span>
    </footer>
  );
}

export default Footer;
