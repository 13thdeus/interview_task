import React, {FC} from "react";
import {CarWidgetDto} from "../../../common/api";
import {Brand} from "../../../common";
import {widgetData} from "../../../../data_mocks/widgetData";
import {ImageStyle, StyleSheet, View, ViewStyle} from "react-native";
import {Colors, CommonStyles, CurrencySymbol, DesignGridSize} from "../../../core";
import {getTimeValue} from "../../../common/helpers/timeHelpers";
import {useTranslation} from "react-i18next";
import {WidgetValue} from "./WidgetValue";
import LinearGradient from "react-native-linear-gradient";
import {WidgetIcon} from "./WidgetIcon";

interface IProps {
  widget: CarWidgetDto;
  countInLine: number;
}

export const WidgetItem: FC<IProps> = ({countInLine, widget}) => {
  const widgetItemData = widgetData[widget.id];
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      {widget.layout.gradientColors &&
        <LinearGradient colors={widget.layout.gradientColors} style={styles.backgroundStyle} />
      }
      <Brand.H4 text={widget.title} />
      <WidgetValue widget={widget} widgetData={widgetItemData} countInLine={countInLine} />
      <View style={{height: DesignGridSize * DesignGridSize / countInLine / 2}} />
      <View style={CommonStyles.rowSpaceBetween}>
        <View style={CommonStyles.flex1}>
          <Brand.H3 text={widgetItemData.price?.toLocaleString() + ` ${CurrencySymbol}`} />
          {widgetItemData.time && <Brand.H5 text={getTimeValue(t, widgetItemData.time)} color={Colors.secondaryText} />}
          {widgetItemData.priceUnit && <Brand.H5 text={widgetItemData.priceUnit} color={Colors.secondaryText} />}
        </View>
      </View>
      {widget.layout.icon && <WidgetIcon icon={widget.layout.icon} countInLine={countInLine} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: DesignGridSize * 2,
    borderRadius: DesignGridSize * 2.5,
    elevation: 2,
    margin: DesignGridSize,
    justifyContent: "space-between",
    overflow: "hidden",
  } as ViewStyle,
  backgroundStyle: StyleSheet.absoluteFill as ViewStyle,
  warningIcon: {
    width: 13,
    height: 13,
    marginRight: DesignGridSize,
  } as ImageStyle,
});
