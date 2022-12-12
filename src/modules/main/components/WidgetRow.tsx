import React, {FC} from "react";
import {CarWidgetDto} from "../../../common/api";
import {View} from "react-native";
import {CommonStyles} from "../../../core";
import {WidgetItem} from "./WidgetItem";

export const WidgetRow: FC<{widgets: CarWidgetDto[]}> = ({widgets}) => {
  return (
    <View style={CommonStyles.row}>
      {widgets.map(w => <WidgetItem key={w.id} widget={w} countInLine={widgets.length} />)}
    </View>
  );
};
