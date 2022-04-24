import React from "react";
import { BsMoon } from "react-icons/bs";
import SearchBox from '../component/searchBox';

export default function Header({ children }) {
  return (
    <>
      <div className="header-container">
        <h1>Where in the world?</h1>
        <SearchBox />
        <div className="icon-mood">
          <span>
            <BsMoon style={{ fontSize: "xx-Large" }} />
          </span>
          {/* <MDBIcon far icon="moon" /> */}
          <h3>Dark Mood</h3>
        </div>
      </div>
      <div className="cards-container">
        {children}    
      </div>
    </>
  );
}
