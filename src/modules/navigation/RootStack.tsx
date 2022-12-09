import {FC} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Text} from "react-native";
import {useAppSelector} from "../../core/store/store";
import {TabsNavigator} from "./TabsNavigator";

const Stack = createNativeStackNavigator();

export const RootStack: FC = () => {
  const isOnboardVisited = useAppSelector(store => store.system.isOnboardingVisited);
  const initialRouteName = isOnboardVisited ? "tabs" : "onboard";

  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Screen name={"onboard"} component={() => <Text>onboard</Text>} />
      <Stack.Screen name={"tabs"} component={TabsNavigator} />
    </Stack.Navigator>
  );
};
