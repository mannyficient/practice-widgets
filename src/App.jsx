import "./App.css";
import React, { useState } from "react";
import Acccordion from "./Componenets/Acccordion/Acccordion";
import Search from "./Componenets/Search/Search.jsx";
import Dropdown from "./Componenets/Dropdown/Dropdown";
import Translate from "./Componenets/Translator/Translate";
import Navigation from "./Componenets/Navigation/Navigation";
import Route from "./Componenets/Route/Route";

const items = [
  {
    title: "What is react?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library amongst developers",
  },
  {
    title: "How do you use React?",
    content: "You use react by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
];

function App() {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className='App'>
      <Navigation></Navigation>
      <Route path='/'>
        <Acccordion items={items}></Acccordion>
      </Route>
      <Route path='/list'>
        <Search></Search>
      </Route>
      <Route path='/dropdown'>
        <Dropdown
          label='Select a color'
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        ></Dropdown>
      </Route>
      <Route path='/translate'>
        <Translate></Translate>
      </Route>
    </div>
  );
}

export default App;
