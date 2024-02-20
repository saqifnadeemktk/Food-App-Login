import { View, Text, StatusBar, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import HomeHeadNav from './components/HomeHeadNav'
import Categories from './components/Categories'
import OfferSlider from './components/OfferSlider'

const Home = () => {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <HomeHeadNav />
        <View style={styles.innerview}>
          <AntDesign name="search1" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Search for products"
          />
        </View>
        <Categories />
        <OfferSlider />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },
   innerview: {
     flexDirection: 'row',
     alignItems: 'center',
     backgroundColor: '#f2f2f2',
     padding: 10,
     borderRadius: 30,
     marginVertical: 10,
   },
  input: {
    marginLeft: 10,
    fontSize: 18,
    width: '90%'
  }
})