import {LocalizedTextDto} from "../../common/LocalizedTextDto";
import {WidgetDataSourceEnum} from "./WidgetDataSourceEnum";
import {WidgetValueTypeEnum} from "./WidgetValueTypeEnum";
import {WidgetUnitType} from "./WidgetUnitType";
import {ImageURISource} from "react-native";

export interface ICarWidget {
  id: string;
  title: LocalizedTextDto;
  subtitle?: LocalizedTextDto;
  dataSource: WidgetDataSourceEnum;
  serverSource: string;
  valueType: WidgetValueTypeEnum;
  unitType: WidgetUnitType;
  unit?: LocalizedTextDto;
  warningLevel?: number;
  warningText?: LocalizedTextDto;
  maxLevel?: number;
  layout: {
    gradientColors?: string[];
    icon?: ImageURISource;
  };
}
