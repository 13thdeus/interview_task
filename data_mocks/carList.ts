import {CarDto, CarTypeEnum} from "../src/common/api";
import {electricWidgets, widgets} from "./widgets";

export const carList: CarDto[] = [{
  id: "Id for Genesis G70",
  model: "Genesis G70",
  licensePlate: "K 332 MB 777",
  subscriptionEnd: "2023-07-17T12:00:00.000Z",
  type: CarTypeEnum.Petrol,
  widgets: widgets,
}, {
  id: "Id for Ioniq 5",
  model: "Ioniq 5",
  licensePlate: "K 658 ОУ 777",
  subscriptionEnd: "2023-12-06T15:00:00.000Z",
  type: CarTypeEnum.Electric,
  widgets: electricWidgets,
}, {
  id: "Id for Palasade",
  model: "Palasade",
  licensePlate: "М 523 ВА 777",
  subscriptionEnd: "2022-12-28T12:00:00.000Z",
  type: CarTypeEnum.Petrol,
  widgets: widgets,
}, {
  id: "Id for Elantra",
  model: "Elantra",
  licensePlate: "П 565 ЛП 177",
  subscriptionEnd: "2023-05-09T12:00:00.000Z",
  type: CarTypeEnum.Petrol,
  widgets: widgets,
}, {
  id: "Id for Tucson",
  model: "Tucson",
  licensePlate: "А 852 ШВ 777",
  subscriptionEnd: "2023-08-30T12:00:00.000Z",
  type: CarTypeEnum.Hybrid,
  widgets: widgets,
}];
