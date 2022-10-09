import ReactDOM from "react-dom/client";
import { Router as BrowserRouter } from "@components/Router";
import { Routes } from "@components/Routes";
import { Route } from "@components/Route";
import { Root } from "@pages/Root";
import { About } from "@pages/About";
import "./index.css";

const container = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(container).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" component={<Root />} />
      <Route path="/about" component={<About />} />
    </Routes>
  </BrowserRouter>
);
