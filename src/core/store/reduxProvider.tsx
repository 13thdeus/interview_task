import React from "react";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor} from "./storePersistor";
import { store } from "./store";

export const reduxProvider = (Component: any) => (props: any) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...props} />
      </PersistGate>
    </Provider>
  );
};
