import React from "react";

export default function Country({ data, borderCountries }) {
  return (
    <div
      className="each-country-cont"
      style={{
        width: "80%",
        height: "10%",
        border: "solid 2px yellow",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="country-info-container">
        <div className="country-info" style={{ border: "2px solid purple" }}>
          <div>
            <img src={data.flags.svg} style={{ width: "70%", margin: "15%" }} />
            <p style={{ color: "white", fontSize: "medium" }}>{data.name}</p>
            <p style={{ color: "white", fontSize: "medium" }}>
              {data.population}
            </p>
            <p style={{ color: "white", fontSize: "medium" }}>
              {data.nativeName}
            </p>
            <p style={{ color: "white", fontSize: "medium" }}>{data.region}</p>
            <p style={{ color: "white", fontSize: "medium" }}>
              {data.subregion}
            </p>
            <p style={{ color: "white", fontSize: "medium" }}>{data.capital}</p>
            <div>
              <p style={{ color: "white", fontSize: "medium" }}>
                Top Level Domain
              </p>
              <p style={{ color: "white", fontSize: "medium" }}>Currencies</p>
              <p style={{ color: "white", fontSize: "medium" }}>Languages</p>
            </div>
            <div
              className="border-contries"
              style={{ color: "white", fontSize: "medium" }}
            >
              {typeof borderCountries !== "undefined"
                ? borderCountries.map((item, index) => (
                    <h1 key={index}>{item.name}</h1>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
