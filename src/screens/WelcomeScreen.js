import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import logo from "../../assets/logo.png";

export const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to foodie</Text>
      {/* <View style={styles.hr80}></View> */}
      <View style={styles.logoout}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.hr80}></View>
      <View style={styles.txt}>
        <Text>Find the best and healthy food in low price around you</Text>
      </View>
      <View style={styles.hr80}></View>
      <View style={styles.btns}>
        <TouchableOpacity onPress={()=>navigation.navigate('signup')}>
          <Text style={styles.btn}>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('login')}>
          <Text style={styles.btn}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d4e395",
    width: "100%",
  },
  txt: {
    fontSize: 20,
    width: '90%',
    alignItems: 'center'
  },
  title: {
    fontSize: 50,
    color: "black",
    textAlign: "center",
    marginVertical: 10,
  },
  logoout: {
    width: "90%",
    height: "45%",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  btns: {
    flexDirection: "row",
  },
  btn: {
    backgroundColor: "red",
    padding: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    fontWeight: "700",
    elevation: 10,
    fontSize: 20,
    color: "white",
    textAlign: "center",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  hr80: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginVertical: 20,
  },
});
