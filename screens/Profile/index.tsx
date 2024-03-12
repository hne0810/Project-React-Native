import { StyleSheet, Text, View,ScrollView, ImageBackground, Image, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import Infor from './comInformation'
import Avatar from './comAvarta'
import Friends from './comFriends'
import STT, {Update} from './comSTT'


const Profile = () => {
    return(
        <ScrollView style={{flex:1, backgroundColor:'black'}}>
            <Avatar />
            <Infor />
            <Friends />
            <STT />
        </ScrollView>
    )
}

const styles = StyleSheet.create({})

export default Profile