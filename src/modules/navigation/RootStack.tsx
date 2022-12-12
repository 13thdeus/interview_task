import {FC} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useAppSelector} from "../../core/store/store";
import {TabsNavigator} from "./TabsNavigator";
import {StubPage} from "../stub/stubPage";

const Stack = createNativeStackNavigator();

export const RootStack: FC = () => {
  const isOnboardVisited = useAppSelector(store => store.system.isOnboardingVisited);
  const initialRouteName = isOnboardVisited ? "tabs" : "onboard";

  return (
    <Stack.Navigator initialRouteName={initialRouteName} screenOptions={{
      header: () => null,
    }}>
      <Stack.Screen name={"onboard"} component={StubPage} />
      <Stack.Screen name={"tabs"} component={TabsNavigator} />
    </Stack.Navigator>
  );
};
