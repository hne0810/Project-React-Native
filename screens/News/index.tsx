import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import { imageApp } from '../../asset'

 const News = () => {
  return (
    <View style={{backgroundColor:'#696969',marginBottom:2,flex:1}}>
      <ImageBackground
        source={imageApp.me}
        style={{width:100, height:150, marginBottom:5,marginTop:5,marginLeft:3, borderRadius:20}}>
        <Image 
          source={imageApp.me}
          style={{width:30,height:30, borderBottomRightRadius:30, marginTop:5,marginLeft:5}} />
        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({})

export default News