import {WidgetDataDto} from "../src/common/api";

export const widgetData: WidgetDataDto[][] = [
  [{
    id: "fuel",
    value: 20,
    price: 3325,
    time: 2705,
  }, {
    id: "maintenance",
    value: 937,
    price: 27200,
    time: 21653,
  }, {
    id: "charge",
    value: 19,
    price: 350,
    time: 18050,
  }],
  [{
    id: "fines",
    value: 1,
    price: 5200,
    priceUnit: {
      ru: "Всего",
      en: "Total"
    },
  }, {
    id: "parking",
    price: 800,
    priceUnit: {
      ru: "№1119",
      en: "#1119",
    },
    value: 14438,
  }, {
    id: "gas",
    value: 1640,
    price: 49,
    priceUnit: {
      ru: "1 л АИ-95",
      en: "per liter",
    },
  }],
];
