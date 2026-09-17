import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import Header from "./components/header/Header";
import SeoHeader from "./components/seoHeader/SeoHeader";
import Home from "./pages/home/HomeComponent";
import Experience from "./pages/experience/Experience";
import Education from "./pages/education/EducationComponent";
import Projects from "./pages/projects/Projects";
import Opensource from "./pages/opensource/Opensource";
import Contact from "./pages/contact/ContactComponent";
import ResumePage from "./pages/resume/Resume.js";
import Error404 from "./pages/errors/error404/Error";

it("renders SeoHeader without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SeoHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders Header without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <ThemeProvider theme={chosenTheme}>
        <Header theme={chosenTheme} />
      </ThemeProvider>
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

const pages = {
  Home,
  Experience,
  Education,
  Projects,
  Opensource,
  Contact,
  ResumePage,
  Error404,
};

Object.entries(pages).forEach(([name, Page]) => {
  it(`renders the ${name} page without crashing`, () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <ThemeProvider theme={chosenTheme}>
          <Page theme={chosenTheme} />
        </ThemeProvider>
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
