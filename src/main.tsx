import React from "react";
import ReactDOM from "react-dom";
import { wallet } from "@vite/vitejs";

// uncomment the next line to get the eval error
// console.log("wallet:", wallet);

// index:17 EvalError: Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src 'self'".

ReactDOM.render(
  <React.StrictMode>
    <div
      style={{
        height: "15rem",
        width: "10rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p style={{ fontSize: "2rem" }}>app</p>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
