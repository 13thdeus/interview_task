import type {ICar} from "./dto/ICar";
import type {IWidgetData} from "./dto/IWidgetData";
import type {ICarWidget} from "./dto/ICarWidget";

export * from "./dto/CarTypeEnum";
export * from "./dto/WidgetDataSourceEnum";
export * from "./dto/WidgetValueTypeEnum";
export * from "./dto/WidgetUnitType";

export type CarDto = ICar;
export type WidgetDataDto = IWidgetData;
export type CarWidgetDto = ICarWidget;
