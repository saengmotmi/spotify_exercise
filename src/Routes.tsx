import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "components/Nav";
import PrivateRoute from "components/PrivateRoute";
import ResetTrack from "components/ResetTrack";

const Login = lazy(() => import("pages/Login"));
const AuthCheck = lazy(() => import("pages/AuthCheck"));
const Main = lazy(() => import("pages/Main"));
const PlaylistDetail = lazy(() => import("pages/PlaylistDetail"));

export default function Routes() {
  return (
    <Router>
      <Nav />
      <ResetTrack>
        <Suspense fallback={<>Loading...</>}>
          <Switch>
            <PrivateRoute exact path="/" component={Main} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/spotify" component={AuthCheck} />
            <Route exact path="/playlist/:id" component={PlaylistDetail} />
          </Switch>
        </Suspense>
      </ResetTrack>
    </Router>
  );
}
