// TODO: Uncomment baris kode di bawah ini untuk meng-import gambar logo devcode yang berada di dalam folder assets
import React from "react";
import devcodeLogo from "../../assets/devcode-logo.png";

import "./style.css";

export const HelloWorld = () => {
  return (
    <div className="hello">
      <img data-cy="devcode-logo" src={devcodeLogo} alt="devcode logo" />
      <div data-cy="devcode-title">
        <h1>I'm ready for the next challenge!</h1>
      </div>
    </div>
  );
};
