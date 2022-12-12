import React, {FC} from "react";
import {CarWidgetDto} from "../../../common/api";
import {StyleSheet, View, ViewStyle} from "react-native";
import {CommonStyles} from "../../../core";
import {WidgetItem} from "./WidgetItem";

export const WidgetRow: FC<{widgets: CarWidgetDto[]}> = ({widgets}) => {
  return (
    <View style={CommonStyles.row}>
      {widgets.map(w => <WidgetItem {...w} key={w.id} />)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  } as ViewStyle,
});
