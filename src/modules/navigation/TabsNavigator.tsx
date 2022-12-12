import {FC} from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {StubPage} from "../stub/stubPage";
import {AppTabBar} from "./components/AppTabBar";
import {TabBarIcon} from "./components/TabBarIcon";
import {TabBarResources} from "../../common";
import {Colors} from "../../core";
import {useTranslation} from "react-i18next";

const Tabs = createBottomTabNavigator();

export const TabsNavigator: FC = () => {
  const {t} = useTranslation();

  return (
    <Tabs.Navigator
      screenOptions={{
        header: () => null,
        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: Colors.tabBarInactive,
      }}
      tabBar={AppTabBar}
    >
      <Tabs.Screen
        name={"main"}
        component={StubPage}
        options={{
          title: t("tabBarLabels.main").toString() || "",
          tabBarIcon: (props) => <TabBarIcon source={TabBarResources.main} {...props} />,
        }}
      />
      <Tabs.Screen
        name={"autos"}
        component={StubPage}
        options={{
          title: t("tabBarLabels.autos").toString() || "",
          tabBarIcon: (props) => <TabBarIcon source={TabBarResources.auto} {...props} />,
        }}
      />
      <Tabs.Screen
        name={"services"}
        component={StubPage}
        options={{
          title: t("tabBarLabels.services").toString() || "",
          tabBarIcon: (props) => <TabBarIcon source={TabBarResources.services} {...props} />,
        }}
      />
      <Tabs.Screen
        name={"travel"}
        component={StubPage}
        options={{
          title: t("tabBarLabels.travel").toString() || "",
          tabBarIcon: (props) => <TabBarIcon source={TabBarResources.travel} {...props} />,
        }}
      />
      <Tabs.Screen
        name={"market"}
        component={StubPage}
        options={{
          title: t("tabBarLabels.market").toString() || "",
          tabBarIcon: (props) => <TabBarIcon source={TabBarResources.market} {...props} />,
        }}
      />
    </Tabs.Navigator>
  );
};
