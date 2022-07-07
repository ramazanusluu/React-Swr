import React from "react";
import OptionsNavbar from "../Navbar/OptionsNavbar";

function Options() {
  return (
    <div>
      <OptionsNavbar />
      <h1>Options Home Page</h1>
      <a href="https://swr.vercel.app/docs/options#return-values">
        SWR options
      </a>
    </div>
  );
}

export default Options;
