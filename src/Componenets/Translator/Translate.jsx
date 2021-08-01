import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "French",
    value: "fr",
  },
  {
    label: "Hausa",
    value: "ha",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Igbo",
    value: "ig",
  },
  {
    label: "Spanish",
    value: "es",
  },
  {
    label: "Yoruba",
    value: "yo",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Text</label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown
        label='Choose a language'
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      ></Dropdown>
      <hr />
      <h3 className='ui header'>Output</h3>
      <Convert language={language} text={text}></Convert>
    </div>
  );
};

export default Translate;

// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
