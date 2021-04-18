import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
if (localStorage.langCity === "en") {
  document.getElementsByTagName("body")[0].setAttribute("dir", "ltr");
  document.getElementsByTagName("body")[0].setAttribute("lang", "en");
} else if (!localStorage.langCity) {
  document.getElementsByTagName("body")[0].setAttribute("dir", "ltr");
  document.getElementsByTagName("body")[0].setAttribute("lang", "ar");
} else {
  document.getElementsByTagName("body")[0].setAttribute("dir", "rtl");
  document.getElementsByTagName("body")[0].setAttribute("lang", "ar");
}

// reportWebVitals(console.log);
