import {LocalizedTextDto} from "../../common/LocalizedTextDto";

export interface IWidgetData {
  id: string;
  value: number;
  price?: number;
  priceUnit?: LocalizedTextDto;
  time?: number;
}
