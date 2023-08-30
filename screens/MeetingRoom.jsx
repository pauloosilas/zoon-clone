import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import StartMeeting from '../components/StartMeeting';
import {io} from "socket.io-client"
import {Camera} from "expo-camera";
import FontAwesome from "react-native-vector-icons/FontAwesome"


const menuIcons = [
  {
    id: 1,
    name: "microphone",
    title: "Mute",
    customColor: "#efefef",
  },
  {
    id: 2,
    name: "upload",
    title: "Share Content",
   
  },
  {
    id: 3,
    name: "microphone",
    title: "Mute",
   
  },
  {
    id: 4,
    name: "group",
    title: "Participants",
   
  },

]

let socket;

const MeetingRoom = () => {

  const [name, setName] = useState();
  const [roomId, setRoomId] = useState();
  const [activeUsers, setActiveUsers] = useState()
  const [startCamera, setStartCamera] = useState(false);

  //camera do celular
  const __startCamera = async () =>{
    const { status } = await Camera.requestCameraPermissionsAsync();
    if(status == "granted"){
      setStartCamera(true);
    }else{
      Alert.alert("Access danied")
    }
  }

  const joinRoom = () => {
    __startCamera(); 
    socket.emit('join-room', {roomId: roomId, userName: name})
  }

  useEffect(()=>{
    const API_URL="http://192.168.1.6:3001";
    socket = io(`${API_URL}`)
    socket.on('connection', ()=> console.log("connected"))
   /* socket.on("all-users", users => {
      console.log("Active Users")
      console.log(users)
      setActiveUsers(users)
    })*/
  }, [])

  return (
    <View style={styles.container}>
     { startCamera ? (
      <SafeAreaView>
      
      <View>
        <Camera
            type={"front"}
            style={{ width: "100%", height: 500 }}
          >
        </Camera>
      </View>
       
       <View style={styles.menu}>
        {
          menuIcons.map((icon, index) => 

              <TouchableOpacity
                key={index}
                style={styles.tile}
              >
                <FontAwesome name={icon.name} size={24} color={"#efefef"} />
                <Text styles={styles.textTile}>{icon.title}</Text>
              </TouchableOpacity>
          
          )
        }
       </View>
    </SafeAreaView>

      ):(
        <StartMeeting 
          name={name}
          setName={setName}
          roomId={roomId}
          setRoomId={setRoomId}
          joinRoom={joinRoom}
        />
      )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c1c1c',
    flex:1,
  },
  tile:{
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginTop:15,
  },
  textTile:{
    color: "white",
    marginTop: 10,

  },
  menu:{
    flexDirection: "row",
    justifyContent: "space-around",

  }
  
})

export default MeetingRoom