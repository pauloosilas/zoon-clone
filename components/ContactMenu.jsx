import React from 'react'
import { View, Text,Image, StyleSheet } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"

const contactsMenuButtons = [
  {
    type: "starred",   
    name: "Starred" 
  },
  {
    type: "contact",
    name: "Jessy",
    photo: require("../assets/jessy.png")   
  },
  {
    type: "contact",
    name: "Nazare",
    photo: require("../assets/jessy2.png")   
  },
  {
    type: "contact",
    name: "Rafaela",
    photo: require("../assets/jessy3.png")   
  }
]

const ContactMenu = () => {
  return (
    <View style={styles.container}>
      {
        contactsMenuButtons.map((contact, index) => 
         
            <View style={styles.row} key={index}>
                {/*Image */}
                {contact.type == "starred" ? 
                ( 
                  <View style={styles.starredIcon}>
                     <AntDesign name="star" size={30} color="#efefef" />
                  </View>
                )
                : <Image source={contact.photo} style={styles.image} />
                }
                
                {/*Text */}
                <Text style={styles.text}>{contact.name}</Text>
            </View>
        )
      }
    
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
   
  },
  row:{
    flexDirection: "row",
    marginTop: 20,
    alignItems: 'center'
  },
  starredIcon:{
    backgroundColor: "#333333",
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  text:{
    color: "white",
    paddingLeft: 15,
    fontSize: 18,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 20,
  }
})

export default ContactMenu