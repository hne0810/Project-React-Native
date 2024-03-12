import { StyleSheet, Text, View, ImageBackground, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { imageApp } from '../../../asset'

const Avatar = () => {
  return (
    <View style={{backgroundColor:'#696969'}}>
        <ImageBackground 
            source={imageApp.me}
            style={{width:'100%', height:200 }} >
        <Image 
        source={imageApp.me} 
        style={{width:170, height:170, borderRadius:100, marginTop:50}} />
        </ImageBackground>
        <View style={{flexDirection:'row'}}>
            <Text style={{color:'#fff', marginTop:30,marginLeft:15,fontSize:20, fontWeight:'700'}} >Nguyễn Mạnh Hùng</Text>
            <Text style={{color:'#fff', marginTop:36,marginLeft:0,fontSize:13}} >  (Né)</Text>
        </View>   
            <TouchableOpacity 
                style={{backgroundColor:'black',width:370, height:30, borderRadius:10, justifyContent:'center', margin:20}}>
            <Text style={{textAlign:'center', color:'#fff'}}>Chỉnh sửa trang cá nhân</Text>
            </TouchableOpacity>
    </View>
  )
}

export default Avatar

const styles = StyleSheet.create({})