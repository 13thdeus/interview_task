import {FC} from "react";
import {Image, ImageStyle, ImageURISource, StyleSheet} from "react-native";
import {DesignGridSize} from "../../../core";

export interface ITabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
}

interface IProps extends ITabBarIconProps {
  source: ImageURISource;
}

export const TabBarIcon: FC<IProps> = (props: IProps) => {
  return <Image style={[styles.tabBarIcon, {tintColor: props.color}]} source={props.source} />;
};

const styles = StyleSheet.create({
  tabBarIcon: {
    width: DesignGridSize * 4,
    height: DesignGridSize * 4,
    marginBottom: DesignGridSize / 2,
    resizeMode: "contain",
  } as ImageStyle,
});
