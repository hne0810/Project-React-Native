import { View, Text, StyleSheet, Switch, Alert } from 'react-native';
import React, { useState } from 'react';
import { TextInput, Button } from 'react-native-paper';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from '../../../../package.json';

// Màn hình cài đặt chính
const Setting = ({ navigation }: any) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={{ flex: 1, backgroundColor: 'grey' }}>
      <Text style={{ color: 'black', fontSize: 20, fontWeight: '400', textAlign: 'center', marginTop: 25 }}>Cài đặt ứng dụng</Text>

      <View style={styles.style1}>
        <Text style={styles.style2}>Cài đặt thông báo</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.style3}>{isEnabled ? 'Bật' : 'Tắt'} Sử dụng thông báo tùy chỉnh</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>   
      </View>

      <View style={styles.style1}>
        <Text style={styles.style2}>Cài đặt khóa</Text>
        <Text style={styles.style3}>Cài đặt mật khẩu</Text>
      </View>
    </View>
  )
}

// Định nghĩa các kiểu phong cách
const styles = StyleSheet.create({
  style1: { backgroundColor: '#fff' },
  style2: { backgroundColor: 'grey', fontSize: 15, fontWeight: '300', paddingLeft: 10 },
  style3: { fontSize: 15, fontWeight: 'normal', paddingLeft: 10 },
})

export default Setting;
