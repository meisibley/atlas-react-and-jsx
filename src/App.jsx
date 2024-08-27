import React from "react";
import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";

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
    </div>
  );
}

export default App;
