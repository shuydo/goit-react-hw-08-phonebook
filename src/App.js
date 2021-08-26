import { Suspense, lazy } from "react";
import { Switch, Redirect } from "react-router-dom";
// import { Toaster } from "react-hot-toaster";
import Container from "./Comps/Container";
import AppBar from "./Comps/AppBar";
import PrivateRoute from "./Comps/PrivateRoute";
import PublicRoute from "./Comps/PublicRoute";

const HomeView = lazy(() => import("./views/HomeView"));
const RegisterView = lazy(() => import("./views/RegisterView"));
const LoginView = lazy(() => import("./views/LoginView"));
const ContactsView = lazy(() => import("./views/ContactsView"));

export default function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Suspense fallback={<p>Loading...</p>}>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>

          <PublicRoute path="/register" restricted>
            <RegisterView />
          </PublicRoute>

          <PublicRoute path="/login" redirectTo="/contacts" restricted>
            <LoginView />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>

          <Redirect to="/" />
        </Suspense>
      </Switch>
      {/* <Toaster position="top-right" /> */}
    </Container>
  );
}
