import React from "react";
import logo from "../assets/img/logo.svg";
import GridViewIcon from "@mui/icons-material/GridView";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";

function show() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.add("show-menu");
}

function close() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

function NavBar() {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="/#" className="nav__logo">
          <img src={logo} alt="" className="nav__logo-img"></img>
          ANAPRIYA
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#home"
                className="nav__link active-link"
                onClick={linkAction}
              >
                Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link" onClick={linkAction}>
                About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skill" className="nav__link" onClick={linkAction}>
                Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#resume" className="nav__link" onClick={linkAction}>
                Resume
              </a>
            </li>

            <li className="nav__item">
              <a href="#project" className="nav__link" onClick={linkAction}>
                Projects
              </a>
            </li>

            <li className="nav__item">
              <a href="#blog" className="nav__link" onClick={linkAction}>
                Blogs
              </a>
            </li>

            <a href="#contact" className="button button--ghost">
              Contact
            </a>
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
  );
}

export default NavBar;
