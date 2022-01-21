import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import {
  FaServer,
  FaDatabase,
  FaCode,
  FaCloud,
  FaPencilAlt,
  FaBootstrap,
  FaSass,
  FaGit,
  FaVideo,
  FaLinux,
  FaPython,
  FaFilm,
  FaJava,
  FaTools,
  FaNodeJs,
  FaReact,
  FaPhp,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";
import {
  MdDesignServices,
  MdDataExploration,
  MdOutlineDesignServices,
} from "react-icons/md";
import {
  SiDjango,
  SiJupyter,
  SiJquery,
  SiMongodb,
  SiFastapi,
  SiCplusplus,
  SiC,
  SiPostgresql,
  SiMysql,
  SiBulma,
  SiMaterialui,
  SiLess,
  SiJavascript,
  SiVisualstudiocode,
  SiPostman,
} from "react-icons/si";
import { FiGithub, FiCode } from "react-icons/fi";
import { GrFedora, GrUbuntu, GrSchedules } from "react-icons/gr";
import { BsTerminal } from "react-icons/bs";

const useStyles = makeStyles({
  root: {
    background:
      "linear-gradient(136deg, hsl(100, 2%, 48%) 0%, hsl(0, 0%, 0%) 100%)",
    border: 0,
    borderRadius: "1rem",
    padding: "2.5rem 0 2.5rem",
  },
  title: {
    color: "hsl(14, 4%, 100%)",
    fontWeight: "bold",
  },
});

const style = {
  // width: '100%',
  maxWidth: 200,
  color: "white",
};

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
      maxWidth: 70,
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
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ width: "70%", height: "100%" }}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Favourite() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();
  return (
    <section className="section category" id="skill">
      <h2 className="section__title">Skills</h2>

      <div className="category__container container">
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className={classes.root}
        >
          <StyledTabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            centered
            textColor="inherit"
            aria-label="Vertical tabs example"
            sx={{ borderRight: 5, borderColor: "grey" }}
          >
            <Tab
              icon={<FaCode style={{ color: "#ff5828" }} className="icon" />}
              label="Languages"
              {...a11yProps(0)}
              className={classes.title}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            />
            <Tab
              icon={
                <MdOutlineDesignServices
                  style={{ color: "#ffbb2c" }}
                  className="icon"
                />
              }
              label="FrontEnd"
              {...a11yProps(1)}
              className={classes.title}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            />
            <Tab
              icon={<FaServer style={{ color: "#e80368" }} className="icon" />}
              label="Backend"
              {...a11yProps(2)}
              className={classes.title}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            />
            <Tab
              icon={<FaTools style={{ color: " #11dbcf" }} className="icon" />}
              label="Tools"
              {...a11yProps(3)}
              className={classes.title}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            />
            <Tab
              icon={<FaCloud style={{ color: "#ffa76e" }} className="icon" />}
              label="Data/ Cloud"
              {...a11yProps(4)}
              className={classes.title}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            />
            <Tab
              icon={<FaFilm style={{ color: "#29cc61" }} className="icon" />}
              label="Others"
              {...a11yProps(5)}
              className={classes.title}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            />
          </StyledTabs>
          <TabPanel value={value} index={0} className="interests">
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              justifyContent="center"
              alignItems="space-around"
            >
              <Grid item xs={12} sm={4} md={4}>
                <div className="icon-box">
                  <FiCode style={{ color: "#e80368" }} className="icon" />
                  <h3>Data Structures</h3>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <div className="icon-box">
                  <FaCode style={{ color: "#5578ff" }} className="icon" />
                  <h3>Algorithms</h3>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <div className="icon-box">
                  <SiC style={{ color: "#47aeff" }} className="icon" />
                  <h3>C</h3>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <div className="icon-box">
                  <SiCplusplus style={{ color: "#ffa76e" }} className="icon" />
                  <h3>C++</h3>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <div className="icon-box">
                  <FaPython style={{ color: " #11dbcf" }} className="icon" />
                  <h3>Python</h3>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <div className="icon-box">
                  <FaJava style={{ color: "#4233ff" }} className="icon" />
                  <h3>Java</h3>
                </div>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1} className="interests">
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              justifyContent="center"
              alignItems="space-around"
            >
              <Grid item xs={12} sm={4} md={4}>
                <div className="icon-box">
                  <FaHtml5 style={{ color: "#ffbb2c" }} className="icon" />
                  <FaCss3Alt style={{ color: "#5578ff" }} className="icon" />
                  <h3>HTML, CSS</h3>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <div className="icon-box">
                  <SiJavascript style={{ color: "#b2904f" }} className="icon" />
                  <h3>JavaScript</h3>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <div className="icon-box">
                  <FaSass style={{ color: "#ff5828" }} className="icon" />
                  <SiLess style={{ color: "#b20969" }} className="icon" />
                  <h3>Less, Sass</h3>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <div className="icon-box">
                  <SiJquery style={{ color: "#e80368" }} className="icon" />
                  <h3>jQuery</h3>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <div className="icon-box">
                  <FaReact style={{ color: "#e361ff" }} className="icon" />
                  <h3>React</h3>
                </div>
              </Grid>
            </Grid>
            <br></br>
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              justifyContent="center"
              alignItems="space-around"
            >
              <Grid item xs={12}>
                <div className="icon-box">
                  <h3>CSS/ React UI Frameworks</h3>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <div className="icon-box">
                  <FaBootstrap style={{ color: "#5578ff" }} className="icon" />
                  <h3>BootStrap</h3>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <div className="icon-box">
                  <SiBulma style={{ color: "#b2904f" }} className="icon" />
                  <h3>Bulma</h3>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <div className="icon-box">
                  <SiMaterialui style={{ color: "#b20969" }} className="icon" />
                  <h3>Material UI</h3>
                </div>
              </Grid>
            </Grid>
          </TabPanel>

          <TabPanel value={value} index={2} className="interests">
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              justifyContent="center"
              alignItems="space-around"
            >
              <Grid item xs={12} sm={4} md={4}>
                <div className="icon-box">
                  <SiDjango style={{ color: "#47aeff" }} className="icon" />
                  <h3>Django</h3>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <div className="icon-box">
                  <FaNodeJs style={{ color: "#ffa76e" }} className="icon" />
                  <h3>NodeJS</h3>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <div className="icon-box">
                  <FaPhp style={{ color: " #11dbcf" }} className="icon" />
                  <h3>PHP</h3>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <div className="icon-box">
                  <SiFastapi style={{ color: "#4233ff" }} className="icon" />
                  <h3>Fastapi</h3>
                </div>
              </Grid>
            </Grid>
            <br></br>
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              justifyContent="center"
              alignItems="space-around"
            >
              <Grid item xs={12}>
                <div className="icon-box">
                  <FaDatabase style={{ color: "#ffbb2c" }} className="icon" />
                  <h3>Databases</h3>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <div className="icon-box">
                  <SiMysql style={{ color: "#29cc61" }} className="icon" />
                  <h3>MySQL</h3>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <div className="icon-box">
                  <SiPostgresql style={{ color: "#b2904f" }} className="icon" />
                  <h3>Postgresql</h3>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <div className="icon-box">
                  <SiMongodb style={{ color: "#b20969" }} className="icon" />
                  <h3>MongoDB</h3>
                </div>
              </Grid>
            </Grid>
          </TabPanel>

          <TabPanel value={value} index={3} className="interests">
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              justifyContent="center"
              alignItems="space-around"
            >
              <Grid item xs={12} sm={4} md={4}>
                <div className="icon-box">
                  <SiVisualstudiocode
                    style={{ color: "#47aeff" }}
                    className="icon"
                  />
                  <h3>Visual Studio</h3>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <div className="icon-box">
                  <SiPostman style={{ color: "#b2904f" }} className="icon" />
                  <h3>Postman</h3>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <div className="icon-box">
                  <FaGit style={{ color: "#ff5828" }} className="icon" />
                  <FiGithub style={{ color: "#e80368" }} className="icon" />
                  <h3>Git & Github</h3>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <div className="icon-box" style={{ padding: "0px" }}>
                  <Accordion square style={{ background: "transparent" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <FaLinux style={{ color: "#e361ff" }} className="icon" />
                      <h3>Linux</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                      <List
                        sx={style}
                        component="nav"
                        className="category__container"
                        style={{ color: "white" }}
                      >
                        <ListItem button>
                          <ListItemButton>
                            <ListItemIcon>
                              <GrUbuntu
                                style={{ color: "#ffa76e" }}
                                className="icon"
                              />
                            </ListItemIcon>
                            <ListItemText primary="Ubuntu" />
                          </ListItemButton>
                        </ListItem>
                        <Divider />
                        <ListItem button>
                          <ListItemButton>
                            <ListItemIcon>
                              <GrFedora
                                style={{ color: "#47aeff" }}
                                className="icon"
                              />
                            </ListItemIcon>
                            <ListItemText primary="Fedora" />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <div className="icon-box">
                  <SiJupyter style={{ color: "#ffbb2c" }} className="icon" />
                  <h3>Juypter Notebook</h3>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <div className="icon-box">
                  <BsTerminal style={{ color: "#ffa76e" }} className="icon" />
                  <h3>CLI</h3>
                </div>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={4} className="interests">
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              justifyContent="center"
              alignItems="space-around"
            >
              <Grid item xs={12} sm={4} md={4}>
                <div className="icon-box">
                  <MdDataExploration
                    style={{ color: "#e80368" }}
                    className="icon"
                  />
                  <h3>Data Science</h3>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <div className="icon-box" style={{ padding: "0px" }}>
                  <Accordion square style={{ background: "transparent" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <FaCloud style={{ color: "#5578ff" }} className="icon" />
                      <h3> Google Cloud</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <List
                          sx={style}
                          component="nav"
                          className="category__container"
                          style={{ color: "white" }}
                        >
                          <ListItem button>
                            <ListItemText primary="Automation" />
                          </ListItem>
                          <Divider />
                          <ListItem button divider>
                            <ListItemText primary="CI / CD" />
                          </ListItem>
                          <ListItem button>
                            <ListItemText primary="Deployment" />
                          </ListItem>
                          <Divider light />
                          <ListItem button>
                            <ListItemText primary="Virtual Machines" />
                          </ListItem>
                          <ListItem button>
                            <ListItemText primary="Serverless" />
                          </ListItem>
                          <ListItem button>
                            <ListItemText primary="Storage & Containers" />
                          </ListItem>
                        </List>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <div className="icon-box" style={{ padding: "0px" }}>
                  <Accordion square style={{ background: "transparent" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <GrSchedules className="icon" />
                      <h3> Orchestration Tools</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <List
                          sx={style}
                          component="nav"
                          className="category__container"
                          style={{ color: "white" }}
                        >
                          <ListItem button>
                            <ListItemText primary="Airflow" />
                          </ListItem>
                          <Divider />
                          <ListItem button divider>
                            <ListItemText primary="Prefect" />
                          </ListItem>
                        </List>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={5} className="interests">
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              justifyContent="center"
              alignItems="space-around"
            >
              <Grid item xs={12} sm={4} md={4}>
                <div className="icon-box">
                  <FaVideo style={{ color: "#47aeff" }} className="icon" />
                  <h3>Video Editing</h3>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <div className="icon-box">
                  <MdDesignServices
                    style={{ color: "#ffbb2c" }}
                    className="icon"
                  />
                  <h3>Designing</h3>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <div className="icon-box">
                  <FaPencilAlt style={{ color: "#ff5828" }} className="icon" />
                  <h3>Pencil Sketching</h3>
                </div>
              </Grid>
            </Grid>
          </TabPanel>
        </Box>
      </div>
    </section>
  );
}
