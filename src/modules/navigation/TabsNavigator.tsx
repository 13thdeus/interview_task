import { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

const Tabs = createBottomTabNavigator();

export const TabsNavigator: FC = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name={"main"} component={() => <Text>main</Text>}/>
      <Tabs.Screen name={"autos"} component={() => <Text>autos</Text>}/>
      <Tabs.Screen name={"services"} component={() => <Text>services</Text>}/>
      <Tabs.Screen name={"path"} component={() => <Text>path</Text>}/>
      <Tabs.Screen name={"market"} component={() => <Text>market</Text>}/>
    </Tabs.Navigator>
  );
};
