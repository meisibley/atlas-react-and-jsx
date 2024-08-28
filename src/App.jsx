import React from "react";
import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";
import HelpfulResource from "./components/HelpfulResource.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <Section title="What is react?">
        <p>React is a JavaScript library for building user interfaces, maintained by Facebook. 
          It allows developers to build complex UIs from small, isolated pieces of code called 
          "components". React uses a virtual DOM to optimize rendering and update only parts of 
          the UI that have changed, making it efficient and easy to manage.
        </p>
      </Section>
      <Section title="Benefits of react">
        <ul>
          <li>Component-based architecture for reusable UI components</li>
          <li>Efficient rendering with the virtual DOM</li>
          <li>Strong community support and a rich ecosystem</li>
          <li>Declarative programming model for easier debugging and maintenance</li>
          <li>Easy integration with other libraries and framework</li>
        </ul>
      </Section>
      <Section title="Helpful Resources">
        <HelpfulResource
          label="React Official Documentation"
          link="https://reactjs.org/docs/getting-started.html"
        />
        <HelpfulResource
          label="React Tutorial for Beginners"
          link="https://www.freecodecamp.org/news/learn-react/"
        />
        <HelpfulResource
          label="React Crash Course"
          link="https://www.youtube.com/watch?v=w7ejDZ8SWv8"
        />
        <HelpfulResource
          label="Hello React"
          link="https://atlas-jswank.github.io/blog/hello-react/"
        />
        <HelpfulResource
          label="ES Modules"
          link="https://atlas-jswank.github.io/blog/es-modules/"
        />
      </Section>
      <Section title="About Me">
        <AboutMe />
      </Section>
      <Footer />
    </div>
  );
}

export default App;
