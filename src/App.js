import { Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
// import { Toaster } from "react-hot-toaster";
import Container from './Comps/Container';
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
        <Suspense fallback={<p>Загружаем...</p>}>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>

          <PublicRoute exact path="/register" restricted>
            <RegisterView />
          </PublicRoute>

          <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
            <LoginView />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Suspense>
      </Switch>
      {/* <Toaster position="top-right" /> */}
    </Container>
  );
}
