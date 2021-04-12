import React, { useState, Fragment } from "react";

import Routes from "./components/routing/Routes";
import { Provider } from "react-redux";
import store from "./store";
import { I18Provider, LOCALES } from "./i18n";
import translate from "./i18n/translate";
import Navar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/homePage/Home";
import SignUp from "./components/auth/SignUp";

function App() {
  var lang;
  if (localStorage.langCity) {
    lang = localStorage.getItem("langCity");
  }
  const [locale, setLocale] = useState(lang || LOCALES.ENGLISH);

  return (
    <I18Provider locale={locale}>
      <Provider store={store}>
        <Router>
          <Fragment>
            <Navar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={Routes} />

              {translate("test")}
            </Switch>
          </Fragment>
        </Router>
      </Provider>
    </I18Provider>
  );
}

export default App;
