import { Route, Redirect, RouteProps } from "react-router-dom";
import { checkAuth } from "utils/auth";

interface PrivateRouteProps extends RouteProps {
  component: any;
}

export default function PrivateRoute({
  component: Component,
  ...parentProps
}: PrivateRouteProps) {
  return (
    <Route
      {...parentProps}
      render={(props) =>
        checkAuth() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
