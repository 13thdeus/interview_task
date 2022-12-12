import React, {FC, memo} from "react";
import {CarDto} from "../../../common/api";
import {StyleSheet, View, ViewStyle} from "react-native";
import {Brand} from "../../../common";
import {WidgetRow} from "./WidgetRow";
import {DesignGridSize} from "../../../core";

interface IProps {
  selectedCar: CarDto;
}

export const Widgets: FC<IProps> = memo(({selectedCar}) => {
  return (
    <View style={styles.container}>
      <Brand.H2 text={selectedCar.model} />
      {selectedCar.widgets.map((r, i) => <WidgetRow key={i.toString()} widgets={r} />)}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: DesignGridSize,
    alignItems: "stretch",
  } as ViewStyle,
});
