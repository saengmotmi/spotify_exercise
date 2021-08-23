import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps,
  StaticContext,
} from "react-router";
import { checkAuth } from "utils/auth";

interface PrivateRouteProps extends RouteProps {
  component: React.FC<
    RouteComponentProps<
      {
        [x: string]: string | undefined;
      },
      StaticContext,
      unknown
    >
  >;
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
