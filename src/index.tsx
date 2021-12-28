import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "store";
import { persistStore } from "redux-persist";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <App />
          </Router>
        </PersistGate>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
