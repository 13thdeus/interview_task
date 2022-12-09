import {LocalizedTextDto} from "../../common/LocalizedTextDto";

export interface IWidgetData {
  value: number;
  price?: number;
  priceUnit?: LocalizedTextDto;
  time?: number;
}
