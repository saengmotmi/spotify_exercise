import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "pages/Login";
import AuthCheck from "pages/AuthCheck";
import Main from "pages/Main";
import PlaylistDetail from "pages/PlaylistDetail";

import Nav from "components/Nav";
import PrivateRoute from "components/PrivateRoute";

export default function Routes() {
  return (
    <Router>
      <Nav />
      <Switch>
        <PrivateRoute exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/spotify" component={AuthCheck} />
        <Route exact path="/playlist/:id" component={PlaylistDetail} />
      </Switch>
    </Router>
  );
}
