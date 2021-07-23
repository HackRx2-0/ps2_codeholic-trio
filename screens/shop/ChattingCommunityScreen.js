import React ,{useState} from "react";
import {View,FlatList,Text,Platform,ActivityIndicator,StyleSheet } from "react-native";
import Users from '../../data/chat-users';
import Rooms from '../../data/chat-rooms';

const ChattingCommunityScreen = () => {

  const id = 1;
  const [user,setUser] = useState(Users.filter((user)=>user.id==id)[0]);
  //const [rooms,setRooms] = useState(Rooms.filter((room)=>room))

  return (
    <View>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
    </View>
  )
};

export default ChattingCommunityScreen;
