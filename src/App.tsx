/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { type PropsWithChildren } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { store } from "./core/store/store";
import { persistor } from "./core/store/storePersistor";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { i18next } from "./common/localization/localization";

const Section: React.FC<PropsWithChildren<{
  title: string;
}>> = ({ children, title }) => {
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: "#000",
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: "#000",
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: "#ccc",
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <NavigationContainer>
          <SafeAreaView style={backgroundStyle}>
            <StatusBar
              barStyle={isDarkMode ? "light-content" : "dark-content"}
              backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={backgroundStyle}>
              <View
                style={{
                  backgroundColor: "#fff",
                }}>
                <Section title="Step One">
                  Edit <Text style={styles.highlight}>App.tsx</Text> to change this
                  screen and then come back to see your edits.
                  {i18next.t("yes")}
                </Section>
                <Section title="Learn More">
                  Read the docs to discover what to do next:
                </Section>
              </View>
            </ScrollView>
          </SafeAreaView>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;
