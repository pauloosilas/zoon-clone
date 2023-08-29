import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

const MeetingRoom = () => {

  const [name, setName] = useState();
  const [roomId, setRoomId] = useState();

  return (
    <View style={styles.container}>
        <View style={styles.startMeetingContainer}>
          <View style={styles.info}>
            <TextInput 
                styles={styles.textInput}
                value={name}
                placeholder="Enter Name"
                placeholderTextColor="#767476"
                onChangeText={text=> setName(text)}
            />
          </View>
          <View style={styles.info}>
          <TextInput 
                styles={styles.textInput}
                value={roomId}
                placeholder="Enter roomId"
                placeholderTextColor="#767476"
                onChangeText={text=> setRoomId(text)}
            />
          </View >
          <View style={{alignItems:"center"}}>
          <TouchableOpacity
              onPress={() => {}}
              style={styles.startMeetingButton}
            >
              <Text style={{color: "white", fontWeight: "bold"}}> Start Meeting</Text>
            </TouchableOpacity>
          </View>
           
          <View>

          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c1c1c',
    flex:1,
  },
  info:{
    width: "100%",
    backgroundColor: "#373538",
    height: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor:"#484648",
    padding: 12,
    justifyContent: "center"
  },
  textInput: {
    color: 'white',
    fontSize: 18
  },
  startMeetingContainer: {

  },
  startMeetingButton:{
    width: 350,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0470DC",
    height: 50,
    borderRadius: 15,

  }
})

export default MeetingRoom