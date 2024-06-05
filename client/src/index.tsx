import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.sass";
import App from "./App";

import ScrollToTop from "./helpers/ScrollToTop";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>
);
