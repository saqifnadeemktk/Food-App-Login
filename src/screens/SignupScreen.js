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
import { Feather } from "@expo/vector-icons";

export const SignupScreen = ({ navigation }) => {
  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [cpasswordFocus, setcPasswordFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showcPassword, setShowcPassword] = useState(false);

  return (
     <ScrollView>
    <View style={styles.container}>
      <Text style={styles.txt}>Sign Up</Text>
      {/* <View style={styles.inputmain}> */}

      <View style={styles.txtInputout}>
        <AntDesign
          name="user"
          size={24}
          color={nameFocus === true ? "red" : "black"}
        />
        <TextInput
           style={styles.txtInput}
          placeholder="Full Name"
          onFocus={() => {
            setNameFocus(true);
            setPhoneFocus(false);
            setEmailFocus(false);
            setPasswordFocus(false);
            setShowPassword(false);
          }}
        />
      </View>

      {/* Email start */}
      <View style={styles.txtInputout}>
        <Entypo name="email" size={24} color={emailFocus === true ? "red" : "black"} />
        <TextInput
          style={styles.txtInput}
          placeholder="Email"
          onFocus={() => {
            setEmailFocus(true);
            setNameFocus(false);
            setPhoneFocus(false);
            setPasswordFocus(false);
            setcPasswordFocus(false);
         //   setShowPassword(false);
          }}
        />
      </View>
      {/* Email end */}

      <View style={styles.txtInputout}>
        <Feather
          name="smartphone"
          size={24}
          color={phoneFocus === true ? "red" : "black"}
        />

        <TextInput
          style={styles.txtInput}
          placeholder="Phone Number"
          onFocus={() => {
            setPhoneFocus(true);
            setNameFocus(false);
            setEmailFocus(false);
            setPasswordFocus(false);
           //setShowPassword(false);
           setcPasswordFocus(false);
          }}
        />
      </View>

      {/* password start */}
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
            setNameFocus(false);
            setPhoneFocus(false);
            setcPasswordFocus(false);
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

      <View style={styles.txtInputout}>
        <AntDesign
          name="lock"
          size={24}
          color={cpasswordFocus === true ? "red" : "black"}
        />
        <TextInput
          style={styles.txtInput}
          placeholder="Confirm Password"
          onFocus={() => {
            setNameFocus(false);
            setPhoneFocus(false);
            setEmailFocus(false);
            setcPasswordFocus(true);
            setPasswordFocus(false);
          }}
          secureTextEntry={showcPassword === false ? true : false}
        />
        <Octicons
          name={showcPassword === false ? "eye-closed" : "eye"}
          size={24}
          color="black"
          onPress={() => {
            setShowcPassword(!showcPassword);
          }}
        />
      </View>
      {/* password end */}

      <Text style={{color:'gray', fontSize: 20}}>Please Enter the Address</Text>
     <View style={styles.txtInputout}>
      <TextInput
        style={styles.txtInput}
        placeholder="Address"
        onFocus={() => {
          setNameFocus(false);
          setPhoneFocus(false);
          setEmailFocus(false);
          setcPasswordFocus(false);
          setPasswordFocus(false);
        }}
        />
      </View>
      <View style={styles.btn}>
        <TouchableOpacity>
          <Text style={styles.btntxt}>Sign up</Text>
        </TouchableOpacity>
      </View>
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
        Already have an account?
      </Text>
      <Text
        onPress={() => navigation.navigate("login")}
        style={{
          fontSize: 20,
          color: "red",
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        Sign In
      </Text>
    </View>
     </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 60,
  // marginTop: 60,
    alignItems: "center",
   // justifyContent: "center",
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
    paddingVertical: 15,
    borderRadius: 10,
  },
  txtInput: {
    fontSize: 15,
    marginHorizontal: "1%",
    width: "80%",
   paddingHorizontal: 5,
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
