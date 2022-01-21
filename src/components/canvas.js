import Grid from "@mui/material/Grid";
import logo from "../assets/img/logo.svg";
import GridViewIcon from "@mui/icons-material/GridView";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { Link } from "react-router-dom";

function show() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.add("show-menu");
}

function close() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

function Canvas() {
  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="/#" className="nav__logo">
            <img src={logo} alt="" className="nav__logo-img"></img>
            ANAPRIYA
          </a>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <Link to="/" className="button button--ghost">
                Home
              </Link>
            </ul>

            <div className="nav__close" id="nav-close" onClick={close}>
              <CloseSharpIcon />
            </div>

            <img src="assets/img/nav-img.png" alt="" className="nav__img"></img>
          </div>

          <div className="nav__toggle" id="nav-toggle" onClick={show}>
            <GridViewIcon />
          </div>
        </nav>
      </header>
      <section className="section trick" id="resume">
        <h2 className="section__title">CANVAS</h2>
        <section className="resume category__container container">
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            justifyContent="center"
            alignItems="space-around"
          >
            <Grid item xs={12} sm={12} md={6}>
              <h3 className="resume-title">Stick Figure</h3>

              <canvas
                id="canvas"
                style={{
                  border: "2px saddlebrown solid",
                }}
              ></canvas>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <h3 className="resume-title">Face Design</h3>

              <canvas
                id="canvas1"
                style={{
                  border: "2px rgb(113, 139, 19) solid",
                }}
              ></canvas>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <h3 className="resume-title">Idle Image</h3>
              <canvas
                id="canvas2"
                style={{
                  border: "2px rgb(255, 218, 5) solid",
                }}
              ></canvas>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <h3 className="resume-title">Animations using images</h3>

              <canvas
                id="canvas3"
                style={{
                  border: "2px rgb(139, 19, 129) solid",
                }}
              ></canvas>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <h3 className="resume-title">Animations control using buttons</h3>
              <canvas
                id="canvas4"
                style={{
                  background: "orange",

                  border: "2px rgb(247, 0, 255) solid",
                }}
              ></canvas>
              <br></br>
              <button
                id="kick"
                style={{
                  border: "2px yellow solid",
                  background: "transparent",
                  color: "white",
                }}
              >
                Kick
              </button>
              <button
                id="push"
                style={{
                  border: "2px yellow solid",
                  background: "transparent",
                  color: "white",
                }}
              >
                punch
              </button>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <h3 className="resume-title">Animations using queue method</h3>

              <canvas
                id="canvas5"
                style={{
                  border: "2px rgb(72, 255, 16) solid",
                }}
              ></canvas>
              <br></br>
              <button
                id="kick1"
                style={{
                  border: "2px yellow solid",
                  background: "transparent",
                  color: "white",
                }}
              >
                Kick(Right Arrow)
              </button>
              <button
                id="punch1"
                style={{
                  border: "2px yellow solid",
                  background: "transparent",
                  color: "white",
                }}
              >
                Punch(Left Arrow)
              </button>
              <button
                id="forward"
                style={{
                  border: "2px yellow solid",
                  background: "transparent",
                  color: "white",
                }}
              >
                Forward(Up Arrow)
              </button>
              <button
                id="backward"
                style={{
                  border: "2px yellow solid",
                  background: "transparent",
                  color: "white",
                }}
              >
                Backward(Down Arrow)
              </button>

              <button
                id="block"
                style={{
                  border: "2px yellow solid",
                  background: "transparent",
                  color: "white",
                }}
              >
                Block(Enter key)
              </button>
            </Grid>
          </Grid>
        </section>
      </section>
    </>
  );
}

export default Canvas;
