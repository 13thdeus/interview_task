import {CarWidgetDto, WidgetDataSourceEnum, WidgetUnitType, WidgetValueTypeEnum} from "../src/common/api";
import {MockIconsResources} from "../src/common";

const common: CarWidgetDto[] = [{
  id: "fines",
  title: {ru: "Штрафы", en: "Fines"},
  layout: {
    icon: MockIconsResources.auto,
    gradientColors: undefined,
  },
  dataSource: WidgetDataSourceEnum.Server,
  serverSource: "some url",
  unitType: WidgetUnitType.Custom,
  valueType: WidgetValueTypeEnum.New,
  warningLevel: 1,
}, {
  id: "parking",
  title: {ru: "Парковка", en: "Parking"},
  layout: {
    icon: MockIconsResources.travel,
    gradientColors: undefined,
  },
  dataSource: WidgetDataSourceEnum.Server,
  serverSource: "some url",
  unitType: WidgetUnitType.Time,
  valueType: WidgetValueTypeEnum.Past,
}, {
  id: "gas",
  title: {ru: "АЗС", en: "GAS Station"},
  layout: {
    icon: MockIconsResources.market,
    gradientColors: undefined,
  },
  dataSource: WidgetDataSourceEnum.Server,
  serverSource: "some url",
  unitType: WidgetUnitType.Distance,
  valueType: WidgetValueTypeEnum.Exact,
}];

export const widgets: CarWidgetDto[][] = [
  [{
    id: "fuel",
    title: {ru: "Заправить", en: "Fueling"},
    layout: {
      icon: MockIconsResources.fuel,
      gradientColors: ["#FEFFFF", "#F4FAFF"],
    },
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
    layout: {
      icon: MockIconsResources.tech,
      gradientColors: ["#FDFFFD", "#F9FEF6"],
    },
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
    layout: {
      icon: MockIconsResources.auto,
      gradientColors: ["#FEFFFF", "#F4FAFF"],
    },
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
