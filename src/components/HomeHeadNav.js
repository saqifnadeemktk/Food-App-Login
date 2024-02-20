import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const HomeHeadNav = () => {
  return (
    <View style={styles.container}>
      <EvilIcons name="navicon" size={24} color="black" style={styles.myicon}/>
      <View style={styles.containerinner}>
      <Text style={styles.mytext}>Foodie</Text>
      <MaterialCommunityIcons name="food-fork-drink" size={24} color="black" style={styles.myicon}/>
      </View>
      <FontAwesome name="user" size={24} color="black" style={styles.myicon}/>
    </View>
  )
}

export default HomeHeadNav

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    elevation: 5
  },
  containerinner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  myicon: {
    marginRight: 10,
    color: 'red'
  },
  mytext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red'
  }
})