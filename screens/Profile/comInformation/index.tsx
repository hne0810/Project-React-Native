import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Infor = () => {
  return (
    <View style={{backgroundColor:'#696969',marginTop:10}}>
        <TouchableOpacity style={{width:80, height:40,backgroundColor:'#87CEFA',borderRadius:15, margin:10}}>
            <Text style={{textAlign:'center',marginTop:10, fontWeight:'700'}}>Bài viết</Text>
        </TouchableOpacity>
        <View style={{height: 1, backgroundColor: 'white'}} />
        <Text style={{color:'#fff', fontSize:17,fontWeight:'bold',margin:10}}>Chi tiết</Text>
        <Text style={{color:'#fff',margin:10,fontSize:15}}>Sống tại Hà nội</Text>
        <Text style={{color:'#fff',margin:10,fontSize:15}}>Đến từ Hà Nội</Text>
        <Text style={{color:'#fff',margin:10,fontSize:15}}>Xem thông tin giới thiệu</Text>
        <View>
        <TouchableOpacity style={{backgroundColor:'grey',width:70,height:100, borderRadius:10,margin:10}}>
            <Text style={{textAlign:'center',fontSize:50,color:'#fff',marginVertical:10}}>+</Text>
        </TouchableOpacity>
        <Text style={{color:'#fff',marginLeft:17}}>Thêm tin</Text>
        </View>
    </View>
  )
}

export default Infor

const styles = StyleSheet.create({})