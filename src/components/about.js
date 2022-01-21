import about from "../assets/img/about-img.svg";
import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Grid from "@mui/material/Grid";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { deepOrange, pink, amber } from "@mui/material/colors";

function About() {
  return (
    <section className="section about" id="about">
      <div className="about__container container grid">
        <div className="about__data">
          <h2 className="section__title about__title">About me</h2>
          <h3 className="home__description">Full Stack Web Developer</h3>
          <p className="about__description">
            <b>“ IQ is better than I can ”</b> are the words which I believe. I
            am more passionate towards technology which simplified our lives.
            Working according to my passion and interest lead me as a Computer
            Science Engineer and efficient Full Stack Web Developer
            <FavoriteIcon
              style={{ verticalAlign: "bottom" }}
              sx={{ color: pink[500] }}
            />
            . I am curious to know new things and learn new technologies. I am
            good at pencil sketching & video editing too ...{" "}
            <AddReactionOutlinedIcon
              style={{ verticalAlign: "bottom" }}
              sx={{ color: amber[400] }}
            />
          </p>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 1, md: 3 }}
          >
            <Grid item md={6}>
              <ul style={{ textAlign: "left" }}>
                <li>
                  <KeyboardArrowRightIcon
                    style={{ verticalAlign: "bottom" }}
                    sx={{ color: deepOrange[500] }}
                  />{" "}
                  <strong>Birthday:</strong> <span>25 Oct 2001</span>
                </li>
                <li>
                  <KeyboardArrowRightIcon
                    style={{ verticalAlign: "bottom" }}
                    sx={{ color: deepOrange[500] }}
                  />
                  <strong>College:</strong> <span>GCT, Coimbatore</span>
                </li>
                <li>
                  <KeyboardArrowRightIcon
                    style={{ verticalAlign: "bottom" }}
                    sx={{ color: deepOrange[500] }}
                  />
                  <strong>Phone:</strong> <span>9123574078</span>
                </li>
              </ul>
            </Grid>
            <Grid item md={6}>
              <ul style={{ textAlign: "left" }}>
                <li>
                  <KeyboardArrowRightIcon
                    style={{ verticalAlign: "bottom" }}
                    sx={{ color: deepOrange[500] }}
                  />{" "}
                  <strong>Age:</strong> <span>20</span>
                </li>
                <li>
                  <KeyboardArrowRightIcon
                    style={{ verticalAlign: "bottom" }}
                    sx={{ color: deepOrange[500] }}
                  />{" "}
                  <strong>Degree:</strong> <span>BE CSE (UG) </span>
                </li>
                <li>
                  <KeyboardArrowRightIcon
                    style={{ verticalAlign: "bottom" }}
                    sx={{ color: deepOrange[500] }}
                  />{" "}
                  <strong>Email:</strong>{" "}
                  <span>ganapriyakheersagar@gmail.com</span>
                </li>
              </ul>
            </Grid>
          </Grid>
        </div>

        <img src={about} alt="" className="about__img"></img>
      </div>
    </section>
  );
}

export default About;
