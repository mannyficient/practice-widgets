import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  // initialize state
  const [term, setTerm] = useState("Programming");
  const [debouncedterm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    // effect
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 900);

    // cleanup
    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    // effect
    const searchWiki = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedterm,
        },
      });
      setResults(data.query.search);
    };
    if (debouncedterm) {
      searchWiki();
    }
  }, [debouncedterm]);

  // generating jsx
  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className='item'>
        <div className='right floated content'>
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className='ui button'
          >
            Go
          </a>
        </div>
        <div className='content'>
          <div className='header'>{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Search Term</label>
          <input
            type='text'
            className='input'
            value={term}
            onChange={(e) => setTerm(e.target.value)} //setting state
          />
        </div>
      </div>
      <div className='ui celled list'>{renderedResults}</div>
    </div>
  );
};

export default Search;
