import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function () {
  let [data, setData] = useState(null);
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    let value = e.target.value;
    setText(value);
  };

  useEffect(() => {
    if (text.length > 3) {
      axios.get(`https://restcountries.com/v2/name/${text}`).then((res) => {
        setData(res.data);
      });
    }
  }, [text]);

  return (
    <div>
      <div className="container">
        <form className="nosubmit">
          <input
            className="nosubmit"
            type="search"
            placeholder="Search for a country..."
            value={text}
            onChange={handleOnChange}
          />
          <ul>
            {data !== null
              ? data.map((item, index) => (
                  <li key={index}>
                    <Link to={`/country/${item.alpha2Code}`}>{item.name}</Link>
                  </li>
                ))
              : ""}
          </ul>
        </form>
      </div>
    </div>
  );
}
