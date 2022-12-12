import {TFunction} from "i18next";

export function getDistanceValue(translate: TFunction, distance: number) {
  if (distance >= 1000) {
    return translate("distance.kilometers", {count: Math.floor(distance / 100) / 10});
  } else {
    return translate("distance.meters", {count: Math.floor(distance)});
  }
}
