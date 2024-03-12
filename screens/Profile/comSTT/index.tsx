import { Image, StyleSheet, Text, View,TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { imageApp } from '../../../asset'

const STT = ({navigation}:any) => {
  return (
    <View style={{marginTop:5,backgroundColor:'#696969'}}>
    <Text style={{color:'#fff',fontSize:15,fontWeight:'bold',margin:10}}>Bài viết cả bạn</Text>
    <View style={{flexDirection:'row',alignContent:'center'}} >
        <Image 
        source={imageApp.me}
        style={{width:40, height:40,borderRadius:100,margin:10 }} />
        <TouchableOpacity 
        style={{width:'83%',height:30,marginTop:14}}
        onPress={() => navigation.navigate('Bạn đang nghĩ gì')} >
            <Text style={{color:'#fff',textAlign:'center',marginTop:4}}>Bạn đang nghĩ gì</Text>
        </TouchableOpacity>
    </View>

</View>
  )
}


export const Update = () => {
    const [status, setStatus] = useState('');

    const handleUpdate = () => {
        console.log('Status updated:', status);
  };
    return(
        <View style={{flex:1}}>
            <TextInput
            style={{height: 40, backgroundColor:'black', width:'83%',marginTop:7}}
            placeholder="Nhập trạng thái mới..."
            value={status}
            onChangeText={setStatus} />
        </View>
    )
}
export default STT

const styles = StyleSheet.create({})