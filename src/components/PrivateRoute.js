import { Route, Redirect } from "react-router-dom";
import { checkAuth } from "utils/auth";

export default function PrivateRoute({ component: Component, ...parentProps }) {
  return (
    <Route
      {...parentProps}
      render={(props) =>
        checkAuth() ? (
          <Component {...props} parentMenu={props.menu} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}
