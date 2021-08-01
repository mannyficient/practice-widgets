import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const requests = {
        method: "GET",
        url: "https://nlp-translation.p.rapidapi.com/v1/translate",
        params: { text: debouncedText, to: language.value, from: "en" },
        headers: {
          "x-rapidapi-key":
            "cdacf640ebmsh95d84e3d85d6657p13cd6djsneebb01d2356f",
          "x-rapidapi-host": "nlp-translation.p.rapidapi.com",
        },
      };
      const { data } = await axios.request(requests);

      setTranslated(data.translated_text[language.value]);
    };
    doTranslation();
  }, [language, debouncedText]);

  return (
    <div>
      <h1 className='ui header'>{translated}</h1>
    </div>
  );
};

export default Convert;
