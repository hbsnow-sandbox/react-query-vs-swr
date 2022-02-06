import React from "react";

import ReactDOM from "react-dom";

import { App } from "./App";

const dev = import.meta.env.DEV;

if (dev) {
  import("./mocks/browser").then((module) => {
    module.worker.start();
  });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
