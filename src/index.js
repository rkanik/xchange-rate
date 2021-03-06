import React from "react";
import ReactDOM from "react-dom";

// Stylesheets
import "./assets/css/tailwind.css";
import "./assets/fonts/font-families.css";
import "./assets/scss/index.scss";
import "@mdi/font/css/materialdesignicons.min.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
