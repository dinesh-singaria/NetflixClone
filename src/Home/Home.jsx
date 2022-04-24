import React from "react";
import "./home.scss";
import NavBar from "../components/NavBar/NavBar.jsx";
import Featured from "../components/Featured/Featured.jsx";
import List from "../components/List/List";

function Home({ type }) {
  return (
    <div className="home">
      <NavBar />
      <Featured type={type} />
      <List />
      <List />
      <List />
    </div>
  );
}

export default Home;
