import { /* useEffect, */Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';

import AppBar from './Comps/AppBar';
import PrivateRoute from './Comps/PrivateRoute';
import PublicRoute from './Comps/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

// import ContactForm from "./Comps/ContactForm/ContactForm";
// import ContactList from "./Comps/ContactList/ContactList";
// import Filter from "./Comps/Filter/Filter";

// import { Toaster } from "react-hot-toaster";

export default function App() {

  return (
    <>
    <AppBar />
          <Switch>
            <Suspense fallback={<p>Загружаем...</p>}>
              <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>

              <PublicRoute exact path="/register" restricted>
                <RegisterView />
              </PublicRoute>

              <PublicRoute exact path="/login" redirectTo="/todos" restricted>
                <LoginView />
              </PublicRoute>

              {/* <PrivateRoute path="/todos" redirectTo="/login"> */}
                {/* <ContactsView /> */}
              {/* </PrivateRoute> */}
              
              {/* <PrivateRoute path="/upload" redirectTo="/login">
                <UploadView />
              </PrivateRoute> */}
            </Suspense>
          </Switch>
      {/* <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList /> */}

      {/* <Toaster position="top-right" /> */}
    </>
  );
}
