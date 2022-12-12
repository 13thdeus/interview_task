/**
 * @format
 */

import { AppRegistry } from "react-native";
import { App } from "./src/App";
import { name as appName } from "./app.json";
import {configureApp} from "./src/core/configuration";

// noinspection JSUnresolvedVariable
if (global.HermesInternal) {
  if (typeof Intl === "undefined") {
    require("intl");
    require("intl/locale-data/jsonp/ru");
    require("intl/locale-data/jsonp/en");
  }
  require("@formatjs/intl-getcanonicallocales/polyfill");
  require("@formatjs/intl-locale/polyfill");

  require("@formatjs/intl-pluralrules/polyfill");
  require("@formatjs/intl-pluralrules/locale-data/ru");
  require("@formatjs/intl-pluralrules/locale-data/en");
}

configureApp();
AppRegistry.registerComponent(appName, () => App);
