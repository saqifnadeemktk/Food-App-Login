import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";

const OfferSlider = () => {
  return (
    <View style={styles.container}>
      <View style={styles.offerslider}>
        <Swiper
          autoplay={true}
          autoplayTimeout={5}
          showsButtons={true}
          nextButton={<Text style={styles.txt}>{">"}</Text>}
          prevButton={<Text style={styles.txt}>{"<"}</Text>}
        >
          <View style={styles.slide}>
            <Image
              source={require("../../assets/img1.jpg")}
              style={styles.img}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../../assets/img2.jpg")}
              style={styles.img}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../../assets/img3.jpg")}
              style={styles.img}
            />
          </View>
        </Swiper>
      </View>
    </View>
  );
};

export default OfferSlider;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  offerslider: {
    width: "90%",
    height: "100%",
    borderRadius: 10,
    overflow: "hidden",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    color: "red",
    fontSize: 40,
    backgroundColor: "rgba(255,255,255,0.5)",
    padding: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    lineHeight: 33,
  },
});
