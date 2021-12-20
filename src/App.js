import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./reset.css";
import "./App.css";
import Home from "./pages/home.js";
import SendTest from "./pages/sendTest";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/send-test" exact>
          <SendTest />
        </Route>
        {/*} <Route path="/professors" exact>
          <Professors />
        </Route>
        <Route path="/subjects" exact>
          <Subjects />
  </Route>*/}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
