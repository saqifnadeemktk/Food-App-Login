import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.card}>
          <FontAwesome5 name="hamburger" size={24} color="black" style={styles.myicon}/>
          <Text>Burger</Text>
        </View>
        <View style={styles.card}>
          <FontAwesome5 name="pizza-slice" size={24} color="black" style={styles.myicon}/>
          <Text>Pizza</Text>
        </View>
        <View style={styles.card}>
        <MaterialCommunityIcons name="food-drumstick" size={24} color="black" style={styles.myicon}/>
          <Text>DrumStick</Text>
        </View>
        <View style={styles.card}>
        <MaterialCommunityIcons name="french-fries" size={24} color="black" style={styles.myicon}/>
          <Text>Burger</Text>
        </View>
        <View style={styles.card}> 
        <MaterialCommunityIcons name="noodles" size={24} color="black"  style={styles.myicon}/>
          <Text>Noodles</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    //borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5

    
  },
  head: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    padding: 10,
    margin: 5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  myicon: {
    marginBottom: 5,
    marginRight: 5,
  },
});
