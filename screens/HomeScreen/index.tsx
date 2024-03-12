import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { imageApp } from '../../asset'
import News from '../News'
import FacebookEmojis from '../../route/emoji'

const Newfeed = ({navigation}:any) => {
    return(
        <ScrollView style={{flex:1, backgroundColor:'black'}}>
          <View style={{flex:0.1,flexDirection:'row',backgroundColor:'#696969',marginBottom:2}}>
            <Text style={{color:'#fff',fontSize:30,fontWeight:'900',marginTop:10,marginLeft:10}}>facebook</Text>
            <TouchableOpacity style={{backgroundColor:'grey',borderRadius:100, width:30, height:30,marginTop:20,marginLeft:150}}>
              <Text style={{textAlign:'center',color:'#fff',fontSize:20,fontWeight:'600'}}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'grey',borderRadius:100, width:30, height:30,marginTop:20,marginLeft:10}}>
              <Text style={{textAlign:'center',color:'#fff',fontSize:20,fontWeight:'600'}}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'grey',borderRadius:100, width:30, height:30,marginTop:20,marginLeft:10}}>
              <Text style={{textAlign:'center',color:'#fff',fontWeight:'600',fontSize:20}}>+</Text>
            </TouchableOpacity>
          </View>
          <News></News>
          <View style={{flex:0.05,flexDirection:'row',backgroundColor:'#696969'}}>
            <Image 
                source={imageApp.me}
                style={{width:40, height:40,borderRadius:100,margin:10 }} />
            <TouchableOpacity
              onPress={() => navigation.navigate('Nguyễn Mạnh Hùng')}
              style={{marginTop:18}} >
                <Text style={{color:'#fff'}}>Nguyễn Mạnh Hùng</Text>
            </TouchableOpacity>
            </View>
            <Image 
                source={imageApp.me} 
                style={{width:'100%',height:500, justifyContent:'center' ,alignContent:'center'}} />
            <View style={{marginTop:2,backgroundColor:'grey',flexDirection:'column'}}>
            
            <TouchableOpacity
              onPress={() => navigation.navigate('Bình luận')}
              style={{width:100,height:30,backgroundColor:'#fff'}} >
              <Text style={{fontSize:15,fontWeight:'600',textAlign:'center'}}>Bình luận</Text>    
            </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Newfeed