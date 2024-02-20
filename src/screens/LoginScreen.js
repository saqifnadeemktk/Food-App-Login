import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export const LoginScreen = ({ navigation }) => {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.txt}>Sign In</Text>
        {/* <View style={styles.inputmain}> */}
        <View style={styles.txtInputout}>
          <AntDesign
            name="user"
            size={24}
            color={emailFocus === true ? "red" : "black"}
          />
          <TextInput
            style={styles.txtInput}
            placeholder="Email"
            onFocus={() => {
              setEmailFocus(true);
              setPasswordFocus(false);
              setShowPassword(false);
            }}
          />
        </View>
        <View style={styles.txtInputout}>
          <AntDesign
            name="lock"
            size={24}
            color={passwordFocus === true ? "red" : "black"}
          />
          <TextInput
            style={styles.txtInput}
            placeholder="Password"
            onFocus={() => {
              setEmailFocus(false);
              setPasswordFocus(true);
            }}
            secureTextEntry={showPassword === false ? true : false}
          />
          <Octicons
            name={showPassword === false ? "eye-closed" : "eye"}
            size={24}
            color="black"
            onPress={() => {
              setShowPassword(!showPassword);
            }}
          />
        </View>

        <View style={styles.btn}>
          <TouchableOpacity onPress={()=>navigation.navigate('home')}>
            <Text style={styles.btntxt}>Sign In</Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            fontSize: 20,
            color: "grey",
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          Forgot Password?
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: "red",
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          OR
        </Text>
        <Text style={{ fontSize: 30, color: "grey", fontWeight: "600" }}>
          Sign In with
        </Text>

        <View style={styles.gf}>
          <TouchableOpacity>
            <View style={styles.gficon}>
              <AntDesign name="google" size={24} color="red" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.gficon}>
              <Entypo name="facebook" size={24} color="blue" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.hr80}></View>
        <Text style={{ fontSize: 20, color: "grey", marginBottom: 10 }}>
          Don't have an account?
        </Text>
        <Text
          onPress={() => navigation.navigate("signup")}
          style={{
            fontSize: 20,
            color: "red",
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          Sign Up
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: "41%",
     height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d4e395",
  },
  txt: {
    fontSize: 30,
    color: "red",
    marginBottom: 20,
    fontWeight: "bold",
  },
  inputmain: {
    marginTop: 20,
  },
  txtInputout: {
    flexDirection: "row",
    width: "90%",
    marginVertical: 10,
    backgroundColor: "white",
    elevation: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  txtInput: {
    fontSize: 15,
    marginHorizontal: "2%",
    width: "80%",
    padding: 5,
  },
  btn: {
    backgroundColor: "red",
    width: "90%",
    padding: 15,
    //  paddingHorizontal: 25,
    borderRadius: 10,
    // fontWeight: "700",
    elevation: 10,
    //  fontSize: 50,
    color: "white",
    //  textAlign: "center",
    marginVertical: 10,
    //  marginHorizontal: 10,
  },
  btntxt: {
    textAlign: "center",
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },
  gf: {
    flexDirection: "row",
    justifyContent: "center",
    width: "90%",
    marginTop: 20,
  },
  gficon: {
    width: 50,
    margin: 10,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    elevation: 20,
    backgroundColor: "#d4e395",
  },
  hr80: {
    width: "80%",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginVertical: 20,
  },
});
