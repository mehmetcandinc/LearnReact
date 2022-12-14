import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./App";
import "./someExample";


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
// ReactDOM.render(<App />, document.getElementById("root"));

root.render(<App />);
