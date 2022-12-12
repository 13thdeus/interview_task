import React, {FC, memo, useState} from "react";
import {StyleSheet, View, ViewStyle} from "react-native";
import Carousel from "react-native-snap-carousel";
import {CarDto} from "../../../common/api";
import {Colors, DesignGridSize, windowWidth} from "../../../core";
import {CarCarouselItem} from "./CarCarouselItem";

interface IProps {
  data: CarDto[];
}

export const CarCarousel: FC<IProps> = memo((props) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <Carousel
        data={props.data}
        renderItem={({item}) => <CarCarouselItem item={item} />}
        sliderWidth={windowWidth - DesignGridSize * 3}
        itemWidth={windowWidth - DesignGridSize * 3}
        vertical={false}
        enableSnap={true}
        contentContainerCustomStyle={styles.carouselContainer}
        onSnapToItem={setActiveSlide}
      />
      <View style={styles.paginationContainer}>
        {props.data.map((c, i) => (
          <View key={c.id} style={activeSlide == i ? styles.paginationActiveDot : styles.paginationDot} />
        ))}
      </View>
    </>
  );
});

const baseDotStyle = {
  width: DesignGridSize,
  height: DesignGridSize,
  borderRadius: DesignGridSize / 2,
  marginHorizontal: DesignGridSize / 4,
};

const styles = StyleSheet.create({
  carouselContainer: {
    alignItems: "flex-end",
  } as ViewStyle,
  paginationContainer: {
    alignSelf: "center",
    flexDirection: "row",
    marginTop: DesignGridSize * 3,
  } as ViewStyle,
  paginationDot: {
    ...baseDotStyle,
    backgroundColor: Colors.secondaryText,
  } as ViewStyle,
  paginationActiveDot: {
    ...baseDotStyle,
    backgroundColor: Colors.white,
  } as ViewStyle,
});
