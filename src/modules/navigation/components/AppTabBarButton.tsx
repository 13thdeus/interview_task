import {ITabBarIconProps} from "./TabBarIcon";
import React, {FC} from "react";
import {Colors} from "../../../core";
import {StyleSheet, TouchableOpacity, ViewStyle} from "react-native";
import {Brand} from "../../../common";

interface IProps {
  label: string;
  isFocused: boolean;
  tabBarAccessibilityLabel?: string;
  tabBarTestID?: string;
  onPress: () => void;
  onLongPress: () => void;
  tabBarIcon?: (props: ITabBarIconProps) => React.ReactNode;
}

export const AppTabBarButton: FC<IProps> = (props: IProps) => {
  const color = props.isFocused ? Colors.white : Colors.tabBarInactive;

  if (props.label == "main") {
    console.log("main props", {
      color,
      props,
    });
  }

  return (
    <TouchableOpacity
      accessibilityRole={"button"}
      accessibilityState={props.isFocused ? {selected: true} : {}}
      accessibilityLabel={props.tabBarAccessibilityLabel}
      testID={props.tabBarTestID}
      onPress={props.onPress}
      onLongPress={props.onLongPress}
      style={styles.buttonContainer}
      activeOpacity={0.7}
    >
      {props.tabBarIcon?.({focused: props.isFocused, color, size: 32})}
      {props.isFocused
        ? <Brand.H5.Medium color={Colors.white}>{props.label}</Brand.H5.Medium>
        : <Brand.H5 color={Colors.tabBarInactive}>{props.label}</Brand.H5>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
});
