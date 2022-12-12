import React, {FC, useState} from "react";
import {ScrollView} from "react-native";
import {CarList} from "./components/CarList";
import {carList} from "../../../data_mocks/carList";
import {CarDto} from "../../common/api";
import {Widgets} from "./components/Widgets";
import {CommonStyles} from "../../core";

interface IProps {
  cars?: CarDto[];
}

export const Main: FC<IProps> = ({cars = carList}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ScrollView contentContainerStyle={CommonStyles.flexGrow}>
      <CarList cars={cars} onCarChanged={setSelectedIndex} />
      <Widgets selectedCar={cars[selectedIndex]} />
    </ScrollView>
  );
};
