import React, {FC} from "react";
import {ScrollView} from "react-native";
import {CarList} from "./components/CarList";
import {carList} from "../../../data_mocks/carList";

export const Main: FC = () => {
  return (
    <ScrollView>
      <CarList cars={carList}/>
    </ScrollView>
  );
};
