import "./App.css";
import Acccordion from "./Componenets/Acccordion/Acccordion";

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
function App() {
  return (
    <div className='App'>
      <Acccordion items={items}></Acccordion>
    </div>
  );
}

export default App;
