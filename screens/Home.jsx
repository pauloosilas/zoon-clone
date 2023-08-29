import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import ContactMenu from '../components/ContactMenu'
import Header from '../components/Header'
import MenuButtons from '../components/MenuButtons'
import SearcBar from '../components/SearcBar'


const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ height: '100%'}}>
        {/*Header*/}
        <Header />
        {/*SearchBar*/}
        <SearcBar />
        {/*MenuButtons*/}
        <MenuButtons  navigation={navigation}/>
        {/*Contacts menu*/}
        <ContactMenu />
       </SafeAreaView>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    padding: 15,

  }
})


export default Home