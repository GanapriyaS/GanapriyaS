import * as React from "react";
import PropTypes from "prop-types";
import new1 from "../assets/img/new1-img.jpg";
import new2 from "../assets/img/new2-img.jpg";
import new3 from "../assets/img/new3-img.jpg";
import new4 from "../assets/img/new4-img.jpg";
import { Projects } from "../data/Projects";

import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import { makeStyles } from "@mui/styles";
import styled from "@emotion/styled";

// import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

const useStyles = makeStyles({
  root: {
    background:
      "linear-gradient(136deg, hsl(100, 2%, 48%) 0%, hsl(0, 0%, 0%) 100%)",
    border: 0,
    borderRadius: "1rem",
    padding: "1rem 0 1rem",
  },
  title: {
    color: "hsl(14, 4%, 100%)",
    fontWeight: "bold",
  },
});

const StyledTabs = styled(({ className, ...other }) => {
  return (
    <Tabs
      {...other}
      classes={{
        root: className,
        indicator: "indicator",
        text: "text",
      }}
      style={{ fontFamily: "'Poppins', sans-serif" }}
      TabIndicatorProps={{ children: <span /> }}
    />
  );
})({
  "& .indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      width: "100%",
      backgroundColor: "white",
    },
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography style={{ fontFamily: "'Poppins', sans-serif" }}>
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function Project() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();
  // const mediumViewport = useMediaQuery('(max-width:600px)');

  return (
    <section className="section new" id="project">
      <h2 className="section__title">Projects</h2>
      <div className="new__container container">
        <Box sx={{ bgcolor: "transparent" }}>
          <StyledTabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            className={classes.root}
            aria-label="full width tabs example"
          >
            <Tab
              label="Web Development"
              wrapped
              {...a11yProps(0)}
              className={classes.title}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            />
            <Tab
              label="Programming"
              {...a11yProps(1)}
              className={classes.title}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            />
            <Tab
              label="Desktop Application"
              wrapped
              {...a11yProps(2)}
              className={classes.title}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            />
            <Tab
              label="Others"
              wrapped
              {...a11yProps(3)}
              className={classes.title}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            />
          </StyledTabs>

          <TabPanel value={value} index={0} dir={theme.direction}>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              slidesPerGroup={1}
              // loop={true}
              // loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                  slidesPerGroup: 1,
                },
                900: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  slidesPerGroup: 3,
                },
              }}
              className="mySwiper "
              style={{ color: "white" }}
            >
              {Projects.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="new__content new_content_height1">
                    {/* <img src={new3} alt="" className="new__img" /> */}

                    <h3 className="new__title" style={{ marginBottom: "1rem" }}>
                      {item.title}
                    </h3>
                    <span className="new__subtitle">{item.content}</span>
                    {item.github && (
                      <a className="button new__button" href={item.github}>
                        <CodeRoundedIcon fontSize="small" />
                      </a>
                    )}

                    {item.website && (
                      <a className="button new__button1" href="/#">
                        <VisibilityRoundedIcon fontSize="small" />
                      </a>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              slidesPerGroup={1}
              // loop={true}
              // loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                  slidesPerGroup: 1,
                },
                900: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  slidesPerGroup: 3,
                },
              }}
              className="mySwiper "
              style={{ color: "white" }}
            >
              <SwiperSlide>
                <div className="new__content new_content_height">
                  <img src={new1} alt="" className="new__img"></img>
                  <h3 className="new__subtitle">
                    Programs to implement Data Structures and Algorithms
                  </h3>

                  <a className="button new__button" href="/#">
                    <CodeRoundedIcon fontSize="small" />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="new__content new_content_height">
                  <img src={new2} alt="" className="new__img" />
                  <h3 className="new__subtitle">
                    Computer Networks related programs and socket programming
                  </h3>

                  <a className="button new__button" href="/#">
                    <CodeRoundedIcon fontSize="small" />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="new__content new_content_height">
                  <img src={new3} alt="" className="new__img" />
                  <h3 className="new__subtitle">
                    Website to learn basic web development fundamentals such as
                    HTML, CSS, JavaScript, jQuery and XML with hands on live
                    examples.
                  </h3>

                  <a className="button new__button" href="/#">
                    <CodeRoundedIcon fontSize="small" />
                  </a>

                  <a className="button new__button1" href="/#">
                    <VisibilityRoundedIcon fontSize="small" />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="new__content new_content_height">
                  <img src={new4} alt="" className="new__img" />
                  <h3 className="new__subtitle">
                    Programs related to System Programming and Operating System
                    such as scheduling , page replacement algorithmns so on.
                  </h3>

                  <a className="button new__button" href="/#">
                    <CodeRoundedIcon fontSize="small" />
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              slidesPerGroup={1}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                  slidesPerGroup: 1,
                },
                900: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  slidesPerGroup: 3,
                },
              }}
              className="mySwiper "
              style={{ color: "white" }}
            >
              <SwiperSlide>
                <div className="new__content new_content_height1">
                  {/* <img src={new4} alt="" className="new__img" /> */}
                  <h3 className="new__title" style={{ marginBottom: "1rem" }}>
                    Java Projects
                  </h3>
                  <span className="new__subtitle">
                    Billing Software ,Car racing game, NotePad, Tic-tac-toe game
                  </span>

                  <a
                    className="button new__button"
                    href="https://github.com/GanapriyaS/Java-projects"
                  >
                    <CodeRoundedIcon fontSize="small" />
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              slidesPerGroup={1}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                  slidesPerGroup: 1,
                },
                900: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  slidesPerGroup: 3,
                },
              }}
              className="mySwiper "
              style={{ color: "white" }}
            >
              <SwiperSlide>
                <div className="new__content new_content_height1">
                  {/* <img src={new4} alt="" className="new__img" /> */}
                  <h3 className="new__title" style={{ marginBottom: "1rem" }}>
                    Temperature-Monitoring-System
                  </h3>
                  <span className="new__subtitle">
                    It is IoT Bolt Wi-Fi module based project which is more
                    useful where temperature should be maintained properly
                  </span>

                  <a
                    className="button new__button"
                    href="https://github.com/GanapriyaS/Temperature-Monitoring-System---Bolt-IOT"
                  >
                    <CodeRoundedIcon fontSize="small" />
                  </a>
                  <a
                    className="button new__button1"
                    href="https://www.hackster.io/ganapriyakheersagar/temperature-alert-innovative-iot-device-08612e"
                  >
                    <VisibilityRoundedIcon fontSize="small" />
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="new__content new_content_height1">
                  {/* <img src={new4} alt="" className="new__img" /> */}
                  <h3 className="new__title" style={{ marginBottom: "1rem" }}>
                    Student Record Management
                  </h3>
                  <span className="new__subtitle">
                    Project done using C language with help of files - Record
                    student name,student roll no,department ,semester, subjects
                    enrolled and marks respectively.
                  </span>
                  <a
                    className="button new__button"
                    href="https://ganapriyas.github.io/Tutorpoint.github.io/"
                  >
                    <CodeRoundedIcon fontSize="small" />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="new__content new_content_height1">
                  {/* <img src={new4} alt="" className="new__img" /> */}
                  <h3 className="new__title" style={{ marginBottom: "1rem" }}>
                    Martial Arts
                  </h3>
                  <span className="new__subtitle">
                    Using HTML Canvas tag created an animation of punch and
                    kicking with control systems
                  </span>

                  <a className="button new__button" href="/martialarts">
                    <VisibilityRoundedIcon fontSize="small" />
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </TabPanel>
        </Box>
      </div>
    </section>
  );
}
