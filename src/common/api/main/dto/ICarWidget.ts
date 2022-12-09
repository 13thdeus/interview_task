import {LocalizedTextDto} from "../../common/LocalizedTextDto";
import {WidgetDataSourceEnum} from "./WidgetDataSourceEnum";
import {WidgetValueTypeEnum} from "./WidgetValueTypeEnum";
import {WidgetUnitType} from "./WidgetUnitType";

export interface ICarWidget {
  title: LocalizedTextDto;
  subtitle?: LocalizedTextDto;
  icon?: string;
  dataSource: WidgetDataSourceEnum;
  serverSource: string;
  valueType: WidgetValueTypeEnum;
  unitType: WidgetUnitType;
  unit?: LocalizedTextDto;
  warningLevel?: number;
}
