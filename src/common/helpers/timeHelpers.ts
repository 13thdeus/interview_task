import {TFunction} from "i18next";

export function getTimeValue(translate: TFunction, timeValue: number) {
  if (timeValue >= 60) {
    let newValue: number = timeValue / 60;
    if (newValue >= 60) {
      newValue = newValue / 60;
      if (newValue >= 24) {
        return translate("time.day", {count: Math.floor(newValue / 24)});
      } else {
        return translate("time.hrs", {count: Math.floor(newValue)});
      }
    } else {
      return translate("time.min", {count: Math.floor(newValue)});
    }
  } else {
    return translate("time.sec", {count: Math.floor(timeValue)});
  }
}
