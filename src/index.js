import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { SWRConfig } from "swr";

//? Global bir fetcher fonksiyonu tanımlayarak dilediğimiz gibi farklı component'lar içerisinde Kullanabiliriz.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <SWRConfig
        value={{
          // refreshInterval: 3000,
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
          onError: (error, key) => {
            if (error.status !== 403 && error.status !== 404) {
            }
          },
        }}
      >
        <App />
      </SWRConfig>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
