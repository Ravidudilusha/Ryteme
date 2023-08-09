import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/landingpage.css";
import Header from "../pages/Header";

export default function Landingpage() {
  return (
    <div className="background">
      <Header />
      <div
        className="container"
        style={{
          color: "#000",
          fontFamily: "Inter",
          fontSize: "51px",
          fontstyle: "normal",
          fontWeight: "Bold",
          lineheight: "normal",
          paddingTop: "140px",
        }}
      >
        A better, 10x faster way to write
      </div>
      <section class="animation">
        <div
          class="first"
          style={{ fontSize: "50px", color: "#7b2cbf", fontWeight: "Bold" }}
        >
          <div>Seo Description</div>
        </div>
        <div
          class="second"
          style={{ fontSize: "50px", color: "#7b2cbf", fontWeight: "Bold" }}
        >
          <div>Blogs</div>
        </div>
        <div
          class="third"
          style={{ fontSize: "50px", color: "#7b2cbf", fontWeight: "Bold" }}
        >
          <div>Seo Titles</div>
        </div>
      </section>
      <div style={{ fontsize: "24px", color: "#6c757d" }}>
        RyteWriter is an AI-powered writing assistant helps you write faster by
        <br />
        providing intelligent suggestions for your content
      </div>
      <div className="container">
        <div class="d-flex justify-content-center p-4">
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button class="cssbuttons-io-button">
              {" "}
              Get started
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  ></path>
                </svg>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
