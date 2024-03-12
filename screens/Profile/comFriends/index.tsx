import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { imageApp } from '../../../asset'

const Friends = () => {
  return (
    <View style={{backgroundColor:'#696969',marginTop:5}}>
        <Text style={{color:'#fff',fontSize:17,fontWeight:'bold',margin:10}}>Bạn bè</Text>
        <View style={{}}>
            <TouchableOpacity style={{width:80, height:128,margin:10,backgroundColor:'grey'}}>
                <ImageBackground 
                source={imageApp.me}
                style={{width:80, height:100}} />
                <Text style={{color:'#fff',fontWeight:'bold',marginLeft:2,marginTop:5,fontSize:13}}>Phan Dương</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={{margin:10,width:'95%',height:30,backgroundColor:'grey',borderRadius:20}}>
          <Text style={{color:'#fff',fontWeight:'bold',textAlign:'center',marginTop:5}}>Xem tất cả bạn bè</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Friends

const styles = StyleSheet.create({})