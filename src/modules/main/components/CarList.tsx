import React, {FC, memo} from "react";
import {Image, ImageStyle, SafeAreaView, StyleSheet, View, ViewStyle} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {Colors, DesignGridSize, isIphoneX} from "../../../core";
import {ImageResources} from "../../../common";
import {CarDto} from "../../../common/api";
import {CarCarousel} from "./CarCarousel";

interface ICarListProps {
  cars: CarDto[];
}

export const CarList: FC<ICarListProps> = memo((props) => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={[Colors.gradientPrimary, Colors.gradientSecondary]} style={styles.background} />
      <SafeAreaView style={styles.contentContainer}>
        <Image source={ImageResources.tes_logo} />
        <CarCarousel data={props.cars} />
        <View style={styles.avatarContainer}>
          <Image source={ImageResources.avatar_mock} style={styles.avatarStyle} />
        </View>
      </SafeAreaView>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    height: isIphoneX ? 218 : 168,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: Colors.border,
    borderBottomLeftRadius: DesignGridSize * 4,
    borderBottomRightRadius: DesignGridSize * 4,
    overflow: "hidden",
    paddingVertical: DesignGridSize,
    paddingHorizontal: DesignGridSize * 1.5,
  } as ViewStyle,
  background: StyleSheet.absoluteFill as ViewStyle,
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
  avatarContainer: {
    position: "absolute",
    right: 0,
    top: DesignGridSize,
    width: DesignGridSize * 6.5,
    height: DesignGridSize * 6.5,
    borderRadius: DesignGridSize * 3.25,
    borderWidth: 2,
    borderColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  avatarStyle: {
    width: DesignGridSize * 5.5,
    height: DesignGridSize * 5.5,
    borderRadius: DesignGridSize * 2.75,
    margin: DesignGridSize / 4,
  } as ImageStyle,
});
