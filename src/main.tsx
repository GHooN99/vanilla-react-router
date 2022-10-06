import ReactDOM from "react-dom/client";
import { Route, Router } from "@components";
import { Root, About } from "@pages";
import "./index.css";

const container = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(container).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
);
