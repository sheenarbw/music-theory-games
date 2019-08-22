import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import HowManySemitonesGame from "./components/HowManySemitonesGame";
import store from "./store.js";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={HowManySemitonesGame} />
      </Router>
    </Provider>
  );
}

export default App;
