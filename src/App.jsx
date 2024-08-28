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
        <p>Morbi sed semper arcu, sed ullamcorper mauris. Integer nec turpis ipsum. 
          Proin scelerisque sagittis rutrum. Nam ut tellus sagittis, scelerisque tortor 
          vitae, suscipit ex. Ut ut lacus sit amet eros consequat pulvinar ornare in odio. 
          Nulla eleifend laoreet lacus, ut fringilla purus dapibus nec.
        </p>
      </Section>
      <Section title="Benefits of react">
        <ul>
          <li>Maecenas a tortor laoreet</li>
          <li>Orci varius natoque</li>
          <li>Donec vitae magna</li>
          <li>Vivamus sit amet</li>
          <li>Proin nulla lectus</li>
        </ul>
      </Section>
      <Section title="Helpful Resources">
        <HelpfulResource
          label="Praesent quis eros libero"
          link="https://reactjs.org/docs/getting-started.html"
        />
        <HelpfulResource
          label="Nullam is ligula vitae justo interdum"
          link="https://www.freecodecamp.org/news/learn-react/"
        />
        <HelpfulResource
          label="Aliquam nisi turppls"
          link="https://reactjs.org/docs/getting-started.html"
        />
        <HelpfulResource
          label="Orci varius natoque penatibus et magnis"
          link="https://reactjs.org/docs/getting-started.html"
        />
        <HelpfulResource
          label="Phasellus aliquam"
          link="https://reactjs.org/docs/getting-started.html"
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
