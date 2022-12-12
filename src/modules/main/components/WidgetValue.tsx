import React, {FC, memo} from "react";
import {CarWidgetDto, WidgetDataDto, WidgetUnitType} from "../../../common/api";
import {getDistanceValue} from "../../../common/helpers/distanceHelper";
import {getTimeValue} from "../../../common/helpers/timeHelpers";
import {getLocalizedValue} from "../../../common/localization/localizedTextHelper";
import {useTranslation} from "react-i18next";
import {Image, ImageStyle, StyleSheet, TextStyle, View, ViewStyle} from "react-native";
import {Colors, CommonStyles, DesignGridSize} from "../../../core";
import {Brand, ImageResources} from "../../../common";

interface IProps {
  widget: CarWidgetDto;
  widgetData: WidgetDataDto;
  countInLine: number;
}

export const WidgetValue: FC<IProps> = memo(({widget, widgetData, countInLine}) => {
  const {t} = useTranslation();

  if (widget.maxLevel != null) {
    return (
      <>
        <View style={CommonStyles.rowCenter}>
          {widget.warningLevel != null && widgetData.value <= widget.warningLevel &&
            <Image source={ImageResources.widget_warning} style={styles.warningIcon} />}
          {countInLine >= 3
            ? <Brand.H5 text={widget.warningText ?? widgetData.value} color={Colors.secondaryText} />
            : <Brand.H6 text={widget.warningText ?? widgetData.value} />
          }
        </View>
        <View style={styles.progressContainer}>
          <View style={[{flex: widgetData.value}, styles.progressValue]} />
          <View style={{flex: widget.maxLevel - widgetData.value}} />
        </View>
        <Brand.H5 style={styles.valueDiff}>
          <Brand.H5 text={`+${widget.maxLevel - widgetData.value} `} color={Colors.secondaryText} />
          <Brand.H5 text={widget.unit} color={Colors.secondaryText} />
        </Brand.H5>
      </>
    );
  } else {
    let value;
    switch (widget.unitType) {
      case WidgetUnitType.Distance:
        value = getDistanceValue(t, widgetData.value);
        break;
      case WidgetUnitType.Time:
        value = getTimeValue(t, widgetData.value);
        break;
      default:
        value = `${widgetData.value} ${getLocalizedValue(widget.unit) || ""}`;
        break;
    }
    value = t(`main.valueTypes.${widget.valueType}`, {value});

    return (
      <>
        <View style={CommonStyles.rowCenter}>
          {widget.warningLevel != null && widgetData.value <= widget.warningLevel &&
            <Image source={ImageResources.widget_warning} style={styles.warningIcon} />}
          {countInLine >= 3
            ? <Brand.H5 text={value} color={Colors.secondaryText} />
            : <Brand.H6 text={value} />
          }
        </View>
        {countInLine >= 3
          ? widget.subtitle && <Brand.H5 text={widget.subtitle || ""} color={Colors.secondaryText} />
          : widget.subtitle && <Brand.H6 text={widget.subtitle || ""} />}
      </>
    );
  }
});

const styles = StyleSheet.create({
  warningIcon: {
    width: 13,
    height: 13,
    marginRight: DesignGridSize,
  } as ImageStyle,
  progressContainer: {
    marginTop: DesignGridSize / 2,
    flexDirection: "row",
    backgroundColor: Colors.tabBarInactive,
    height: DesignGridSize / 2,
    borderRadius: DesignGridSize / 4,
  } as ViewStyle,
  progressValue: {
    backgroundColor: Colors.tertiaryText,
    borderRadius: DesignGridSize / 4,
  } as ViewStyle,
  valueDiff: {
    color: Colors.secondaryText,
    alignSelf: "flex-end",
  } as TextStyle,
});
