import {CarWidgetDto, WidgetDataSourceEnum, WidgetUnitType, WidgetValueTypeEnum} from "../src/common/api";

const common: CarWidgetDto[] = [{
  id: "fines",
  title: {ru: "Штрафы", en: "Fines"},
  icon: undefined,
  dataSource: WidgetDataSourceEnum.Server,
  serverSource: "some url",
  unitType: WidgetUnitType.Custom,
  valueType: WidgetValueTypeEnum.New,
  warningLevel: 1,
}, {
  id: "parking",
  title: {ru: "Парковка", en: "Parking"},
  icon: undefined,
  dataSource: WidgetDataSourceEnum.Server,
  serverSource: "some url",
  unitType: WidgetUnitType.Time,
  valueType: WidgetValueTypeEnum.Past,
}, {
  id: "gas",
  title: {ru: "АЗС", en: "GAS Station"},
  icon: undefined,
  dataSource: WidgetDataSourceEnum.Server,
  serverSource: "some url",
  unitType: WidgetUnitType.Distance,
  valueType: WidgetValueTypeEnum.Exact,
}];

export const widgets: CarWidgetDto[][] = [
  [{
    id: "fuel",
    title: {ru: "Заправить", en: "Fueling"},
    icon: undefined,
    dataSource: WidgetDataSourceEnum.Fuel,
    serverSource: "some url",
    unitType: WidgetUnitType.Custom,
    unit: {ru: "л", en: "l"},
    valueType: WidgetValueTypeEnum.Exact,
    warningLevel: 20,
    maxLevel: 80,
    warningText: {
      ru: "Мало топлива",
      en: "Refueling needed"
    }
  }, {
    id: "maintenance",
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
    id: "charge",
    title: {ru: "Зарядить", en: "Charge"},
    icon: undefined,
    dataSource: WidgetDataSourceEnum.Fuel,
    serverSource: "some url",
    unitType: WidgetUnitType.Custom,
    unit: {ru: "%", en: "%"},
    valueType: WidgetValueTypeEnum.Exact,
    warningLevel: 20,
    maxLevel: 100,
    warningText: {
      ru: "Нужна подзарядка",
      en: "Recharging needed"
    }
  }],
  common,
];
