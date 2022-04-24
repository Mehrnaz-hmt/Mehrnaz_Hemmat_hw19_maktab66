import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Cards() {
  let [data, setData] = useState({});
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("https://restcountries.com/v2/all").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="cards-container1">
      {/* {console.log(data.length)} */}
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <>
          {data.length != undefined &&
            data.map((res) => (
              <div key={res.alpha2Code} className="card">
                <Link to={`/country/${res.alpha2Code}`}>
                  <img
                    src={res.flags.svg}
                    alt="Avatar"
                    style={{ width: "100%", height: "40%" }}
                    loading="lazy"
                  />
                </Link>
                <div className="container">
                  <h4>
                    <b className="country-name">{res.name}</b>
                  </h4>
                  <p className="font-cards">{res.population}</p>
                  <p className="font-cards">{res.region}</p>
                  <p className="font-cards">{res.capital}</p>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
}
