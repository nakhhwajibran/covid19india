import React, { Component } from "react";
import Home from "./components/Home/Home";
import styles from "./App.module.css";

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Home />
      </div>
    );
  }
}

export default App;
