import React, {FC} from "react";
import {CarWidgetDto} from "../../../common/api";
import {Brand, ImageResources} from "../../../common";
import {widgetData} from "../../../../data_mocks/widgetData";
import {Image, ImageStyle, StyleSheet, View, ViewStyle} from "react-native";
import {Colors, CommonStyles, DesignGridSize} from "../../../core";

export const WidgetItem: FC<CarWidgetDto> = (widget) => {
  const widgetItemData = widgetData[widget.id];

  return (
    <View style={styles.container}>
      <Brand.H4 text={widget.title} />
      <View style={CommonStyles.row}>
        {widget.warningLevel != null && widgetItemData.value <= widget.warningLevel &&
          <Image source={ImageResources.widget_warning} style={styles.warningIcon} />}
        <Brand.H6 text={widgetItemData.value} />
      </View>
      <Brand.H3 text={widgetItemData.price} />
      {widgetItemData.time && <Brand.H5 text={`${widgetItemData.time} sec`} color={Colors.secondaryText} />}
      {widgetItemData.priceUnit && <Brand.H5 text={widgetItemData.priceUnit} />}
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
  } as ViewStyle,
  warningIcon: {
    width: 13,
    height: 13,
    marginRight: DesignGridSize,
  } as ImageStyle,
});
