import {CarWidgetDto, WidgetDataSourceEnum, WidgetUnitType, WidgetValueTypeEnum} from "../src/common/api";

const common = [{
  title: {ru: "Штрафы", en: "Fines"},
  icon: undefined,
  dataSource: WidgetDataSourceEnum.Server,
  serverSource: "some url",
  unitType: WidgetUnitType.Custom,
  valueType: WidgetValueTypeEnum.New,
  warningLevel: 1,
}, {
  title: {ru: "Парковка", en: "Parking"},
  icon: undefined,
  dataSource: WidgetDataSourceEnum.Server,
  serverSource: "some url",
  unitType: WidgetUnitType.Time,
  valueType: WidgetValueTypeEnum.Past,
  subtitle: {ru: "№1129", en: "#1129"},
}, {
  title: {ru: "АЗС", en: "GAS Station"},
  icon: undefined,
  dataSource: WidgetDataSourceEnum.Server,
  serverSource: "some url",
  unitType: WidgetUnitType.Distance,
  valueType: WidgetValueTypeEnum.Past,
  subtitle: {ru: "№1129", en: "#1129"},
}];

export const petrolWidgets: CarWidgetDto[][] = [
  [{
    title: {ru: "Заправить", en: "Fueling"},
    icon: undefined,
    dataSource: WidgetDataSourceEnum.Fuel,
    serverSource: "some url",
    unitType: WidgetUnitType.Custom,
    unit: {ru: "л", en: "l"},
    valueType: WidgetValueTypeEnum.Exact,
    warningLevel: 20,
  }, {
    title: {ru: "Техобслуживание", en: "Maintenance"},
    subtitle: {ru: "Масло ДВС, фильтры", en: "Motor oil, filters"},
    icon: undefined,
    dataSource: WidgetDataSourceEnum.Tech,
    serverSource: "some url",
    unitType: WidgetUnitType.Custom,
    unit: {ru: "км", en: "km"},
    valueType: WidgetValueTypeEnum.Feature,
    warningLevel: 1000,
  }],
  common,
];

export const electricWidgets: CarWidgetDto[][] = [
  [{
    title: {ru: "Зарядить", en: "Charge"},
    icon: undefined,
    dataSource: WidgetDataSourceEnum.Fuel,
    serverSource: "some url",
    unitType: WidgetUnitType.Custom,
    unit: {ru: "%", en: "%"},
    valueType: WidgetValueTypeEnum.Exact,
    warningLevel: 20,
  }],
  common,
];
