import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {store} from "./core/store/store";
import {persistor} from "./core/store/storePersistor";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {RootStack} from "./modules/navigation/RootStack";

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
