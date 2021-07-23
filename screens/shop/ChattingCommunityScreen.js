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
      <Text>{user.username}</Text>
      <FlatList
      data={user.rooms}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <UserItem
          id={itemData.item.id}
          username={itemData.item.username}
          rooms={itemData.item.rooms}
        />
      )}
    />
    </View>
  )
};

export default ChattingCommunityScreen;
