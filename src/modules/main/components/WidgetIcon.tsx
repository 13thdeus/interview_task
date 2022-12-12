import React, {FC, memo} from "react";
import {Image, ImageStyle, ImageURISource, StyleSheet, View, ViewStyle} from "react-native";
import {Colors, DesignGridSize} from "../../../core";

interface IProps {
  icon: ImageURISource;
  countInLine: number;
}

export const WidgetIcon: FC<IProps> = memo(({icon, countInLine}) => {
  if (countInLine >= 3) {
    return <Image source={icon} style={[styles.iconStyle, styles.backgroundIcon]} />;
  } else {
    return (
      <View style={styles.roundContainer}>
        <Image source={icon} style={styles.iconStyle} />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  roundContainer: {
    backgroundColor: Colors.white,
    position: "absolute",
    bottom: DesignGridSize * 1.5,
    right: DesignGridSize * 1.5,
    width: 42,
    height: 42,
    borderRadius: 21,
    elevation: 4,
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
  iconStyle: {
    width: 24,
    height: 24,
    tintColor: Colors.text,
    opacity: 0.7,
    resizeMode: "contain",
  } as ImageStyle,
  backgroundIcon: {
    position: "absolute",
    top: DesignGridSize,
    right: DesignGridSize,
    width: 32,
    height: 32,
    opacity: 0.1,
  } as ImageStyle,
});
