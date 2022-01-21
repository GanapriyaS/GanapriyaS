import VisibilityIcon from "@mui/icons-material/Visibility";
import Grid from "@mui/material/Grid";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { deepOrange } from "@mui/material/colors";

function Resume() {
  return (
    <section className="section trick" id="resume">
      <h2 className="section__title">Resume</h2>
      <section className="resume category__container container">
        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          justifyContent="center"
          alignItems="space-around"
        >
          <Grid item xs={12} sm={12} md={6}>
            <div className="icon-box">
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <h4>Ganapriya Kheersagar</h4>
                <ul>
                  <li>
                    <KeyboardArrowRightIcon
                      style={{ verticalAlign: "bottom" }}
                      sx={{ color: deepOrange[500] }}
                    />{" "}
                    <span>B.E Computer Science and Engineering</span>
                  </li>
                  <li>
                    <KeyboardArrowRightIcon
                      style={{ verticalAlign: "bottom" }}
                      sx={{ color: deepOrange[500] }}
                    />
                    Government College of Technology, Coimbatore
                  </li>
                  <li>
                    <KeyboardArrowRightIcon
                      style={{ verticalAlign: "bottom" }}
                      sx={{ color: deepOrange[500] }}
                    />
                    <strong>Mobile: </strong> <span>+91 9123574078</span>
                  </li>
                  <li>
                    <KeyboardArrowRightIcon
                      style={{ verticalAlign: "bottom" }}
                      sx={{ color: deepOrange[500] }}
                    />{" "}
                    <strong>Email: </strong>{" "}
                    <span>ganapriyakheersagar@gmail.com</span>
                  </li>
                </ul>
              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>B.E - Computer Science and Engineering</h4>
                <h5>2019 - 2023</h5>
                <p>
                  <em>Government College of Technology, Coimbatore</em>
                </p>
                {/* <p></p> */}
              </div>
              <div className="resume-item">
                <h4>Higher Secondary (XII)</h4>
                <h5>2017 - 2019</h5>
                <p>
                  <em>Sri Vijay Vidyalaya, Hosur</em>
                </p>
                <p>
                  <strong>Percentage: </strong>93.8%
                </p>
              </div>
              <div className="resume-item">
                <h4>Secondary (X)</h4>
                <h5>2016 - 2017</h5>
                <p>
                  <em>Sri Vijay Vidyalaya, Hosur</em>
                </p>
                <p>
                  <strong>Percentage: </strong>98.4%
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <div className="icon-box">
              <h3 className="resume-title">Experience</h3>
              <div className="resume-item">
                <h4>Data Science Intern</h4>
                <h5>Apr 2021 - Aug 2021</h5>
                <p>
                  <em>Krayen - Data Analytics Company</em>
                </p>
                <br></br>
                <ul>
                  <li>
                    <KeyboardArrowRightIcon
                      style={{ verticalAlign: "bottom" }}
                      sx={{ color: deepOrange[500] }}
                    />{" "}
                    <strong>Role:</strong> Backend and Automation
                  </li>
                  <li>
                    <KeyboardArrowRightIcon
                      style={{ verticalAlign: "bottom" }}
                      sx={{ color: deepOrange[500] }}
                    />{" "}
                    Hands-on experience on the backend creating APIs using
                    python framework FastApi and orchestration tools such as
                    prefect and airflow for automation
                  </li>
                  <li>
                    <KeyboardArrowRightIcon
                      style={{ verticalAlign: "bottom" }}
                      sx={{ color: deepOrange[500] }}
                    />
                    Continuous Deployment and Integration (CD/CI) for backend
                    using Cloud Run, Cloud Build for automation with GitHub, and
                    working with virtual machines and cloud functions in Google
                    Cloud
                  </li>
                  <li>
                    <KeyboardArrowRightIcon
                      style={{ verticalAlign: "bottom" }}
                      sx={{ color: deepOrange[500] }}
                    />{" "}
                    Worked with Heroku cloud and Postgres database, Python
                    libraries such as Pandas, NumPy , Data Visualization,
                    Streamlit apps, and Shopify apps
                  </li>
                </ul>
              </div>

              <h3 className="resume-title">Certificates</h3>
              <div className="resume-item">
                <h4>
                  Mastering Data Structures and algorithms using C and C++
                </h4>
                <h5>Dec 2020</h5>
                <p>
                  <em>Udemy&nbsp;</em>{" "}
                  <a
                    href="http://ude.my/UC-f008526b-a58f-4bf6-a106-1b6bc1eb0c73"
                    className="button "
                    style={{ padding: "5px 5px 0px 5px" }}
                  >
                    {" "}
                    <VisibilityIcon fontSize="small" />
                  </a>
                </p>
                <br></br>
              </div>
              <div className="resume-item">
                <h4>Front-End Web UI Frameworks and Tools: Bootstrap 4</h4>
                <h5>Dec 2020</h5>
                <p>
                  <em>Coursera&nbsp;</em>{" "}
                  <a
                    href="https://www.coursera.org/account/accomplishments/certificate/D68JF9CD4R5N"
                    className="button "
                    style={{ padding: "5px 5px 0px 5px" }}
                  >
                    {" "}
                    <VisibilityIcon fontSize="small" />
                  </a>
                </p>
                <br></br>
              </div>
              <div className="resume-item">
                <h4>Programming for Everybody (Getting Started with Python)</h4>
                <h5>Nov 2020</h5>
                <p>
                  <em>Coursera&nbsp;</em>{" "}
                  <a
                    href="http://www.coursera.org/account/accomplishments/certificate/VU8R4U8796ZL"
                    className="button "
                    style={{ padding: "5px 5px 0px 5px" }}
                  >
                    {" "}
                    <VisibilityIcon fontSize="small" />
                  </a>
                </p>
                <br></br>
              </div>
            </div>
          </Grid>
        </Grid>
      </section>
    </section>
  );
}

export default Resume;
