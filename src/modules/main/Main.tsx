import React, {FC, useState} from "react";
import {Image, ImageStyle, ScrollView, StyleSheet, View, ViewStyle} from "react-native";
import {CarList} from "./components/CarList";
import {carList} from "../../../data_mocks/carList";
import {CarDto} from "../../common/api";
import {Widgets} from "./components/Widgets";
import {CommonStyles, DesignGridSize} from "../../core";
import {MockIconsResources} from "../../common";

interface IProps {
  cars?: CarDto[];
}

export const Main: FC<IProps> = ({cars = carList}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View>
      <CarList cars={cars} onCarChanged={setSelectedIndex} />
      <ScrollView contentContainerStyle={CommonStyles.flexGrow}>
        <Widgets selectedCar={cars[selectedIndex]} />
        <Image source={MockIconsResources.geo_mock} style={styles.mapMock} />
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapMock: {
    marginHorizontal: DesignGridSize * 2,
  } as ImageStyle,
  bottomSpacing: {
    height: 350, //too much, I know.
  } as ViewStyle,
});
