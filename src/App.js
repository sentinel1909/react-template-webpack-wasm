// Root React app

import React, { useState, useEffect } from "react";

import init, { add } from "wasm-lib";

import Test from "./content/test.mdx";

import styles from "./styles/app.module.css";

function App() {
  const [ans, SetAns] = useState(0);
  useEffect(() => {
    init().then(() => {
      SetAns(add(1, 1));
    });
  }, []);

  return (
    <main className={styles.container}>
      <h1>Welcome to a React Template App</h1>
      <h2>(bundling courtesy of Webpack)</h2>
      <h3>Date: {new Date().toDateString()}</h3>
      <Test />
      <p>Here's a Rust function which adds two numbers together:</p>
      <p>1 + 1 = {ans}</p>
    </main>
  );
}

export default App;
