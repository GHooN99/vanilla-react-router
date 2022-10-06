import ReactDOM from "react-dom/client";
import { Route } from "@components/Route";
import { Router } from "@components/Router";
import { Root } from "@pages/Root";
import { About } from "@pages/About";

import "./index.css";

const container = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(container).render(
  <>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </>
);
