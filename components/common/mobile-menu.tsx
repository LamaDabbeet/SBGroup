import { useState } from "react";
import MobileMenuStyles from "./mobile-menu.module.css";

export default function MobileMenu({ children }: any) {
  function toggleMenu() {
    var controls = document.querySelector(".menu-controls");
    var menuOpen = document.querySelector(".fa-bars");
    var menuClose = document.querySelector(".fa-times");
    var navigation = document.getElementById("main-menu");
    controls?.addEventListener("click", () => {
      menuOpen?.classList.toggle("hide");
      menuClose?.classList.toggle("show");

      if (menuClose?.classList.contains("show")) {
        navigation?.classList.remove("hide");
      } else {
        navigation?.classList.add("hide");
      }
    });
  }
  return (
    <>
      <div className="menu-controls">
        <i className="fas fa-bars"></i>
        <i className="fas fa-times"></i>
      </div>

      <nav id="main-menu" className="hide">
        <ul>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Our work</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
