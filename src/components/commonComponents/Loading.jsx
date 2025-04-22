import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <section className="container">
      <div className="typewriter">
        <div className="slide">
          <i></i>
        </div>
        <div className="paper"></div>
        <div className="keyboard"></div>
        <div className="loading-text text-xl text-blue-400 font-bold animate-pulse tracking-widest">
          LOADING...
        </div>
      </div>
    </section>
  );
};

export default Loading;
