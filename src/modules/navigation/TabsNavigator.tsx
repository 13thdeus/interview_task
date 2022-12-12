import { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import {StubPage} from "../stub/stub_page";

const Tabs = createBottomTabNavigator();

export const TabsNavigator: FC = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name={"main"} component={StubPage}/>
      <Tabs.Screen name={"autos"} component={StubPage}/>
      <Tabs.Screen name={"services"} component={StubPage}/>
      <Tabs.Screen name={"path"} component={StubPage}/>
      <Tabs.Screen name={"market"} component={StubPage}/>
    </Tabs.Navigator>
  );
};
