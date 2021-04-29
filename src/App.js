import React, { useState, Fragment } from "react";

import Routes from "./components/routing/Routes";
import { Provider } from "react-redux";
import store from "./store";
import { I18Provider, LOCALES } from "./i18n";
import Navar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/homePage/Home";

function App() {
  var lang;
  if (localStorage.langCity) {
    lang = localStorage.getItem("langCity");
  }
  const [locale, setLocale] = useState(lang || LOCALES.ENGLISH);

  return (
    <Provider store={store}>
      <I18Provider locale={locale}>
        <Router>
          <Fragment>
            <Navar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={Routes} />
            </Switch>
          </Fragment>
        </Router>
      </I18Provider>
    </Provider>
  );
}

export default App;
