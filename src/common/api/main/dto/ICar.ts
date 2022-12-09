import {ICarWidget} from "./ICarWidget";
import {CarTypeEnum} from "./CarTypeEnum";

export interface ICar {
  id: string;
  model: string;
  type: CarTypeEnum;
  licensePlate: string;
  subscriptionEnd: string;
  widgets: ICarWidget[][]; // possible not car-depending value
}
