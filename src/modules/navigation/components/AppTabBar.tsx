import React, {FC} from "react";
import {StyleSheet, View, ViewStyle} from "react-native";
import {BottomTabBarProps} from "@react-navigation/bottom-tabs";
import {AppTabBarButton} from "./AppTabBarButton";
import {Colors, DesignGridSize} from "../../../core";

export const AppTabBar: FC<BottomTabBarProps> = ({state, descriptors, navigation}) => {
  const onPress = (routeKey: string, routeName: string, isFocused: boolean) => {
    return () => {
      const event = navigation.emit({
        type: "tabPress",
        target: routeKey,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(routeName);
      }
    };
  };

  const onLongPress = (key: string) => {
    return () => navigation.emit({
      type: "tabLongPress",
      target: key,
    });
  };

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => (
        <AppTabBarButton
          key={route.key}
          tabBarIcon={descriptors[route.key].options.tabBarIcon}
          label={descriptors[route.key].options.title || route.name}
          onPress={onPress(route.key, route.name, state.index == index)}
          onLongPress={onLongPress(route.key)}
          isFocused={state.index == index}
          tabBarAccessibilityLabel={descriptors[route.key].options.tabBarAccessibilityLabel}
          tabBarTestID={descriptors[route.key].options.tabBarTestID}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  tabBar: {
    flexDirection: "row",
    backgroundColor: `${Colors.gradientPrimary}cc`,
    paddingVertical: DesignGridSize * 1.5,
    paddingHorizontal: DesignGridSize,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: Colors.gradientSecondary,
    borderTopLeftRadius: DesignGridSize * 4,
    borderTopRightRadius: DesignGridSize * 4,
  } as ViewStyle,
});
