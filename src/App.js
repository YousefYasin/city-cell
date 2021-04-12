import React, { useState } from "react";

import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { I18Provider, LOCALES } from "./i18n";
import translate from "./i18n/translate";
import Navar from "./components/layout/Navbar";
function App() {
  var lang;
  if (localStorage.langCity) {
    lang = localStorage.getItem("langCity");
  }
  const [locale, setLocale] = useState(lang || LOCALES.ENGLISH);

  return (
    <I18Provider locale={locale}>
      <Provider store={store}>
        <div className="App">
          <Navar />
          TODOOO
          {translate("test")}
        </div>
      </Provider>
    </I18Provider>
  );
}

export default App;
