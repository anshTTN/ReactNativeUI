import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import Button from '../components/Button';

export default function Login(props:any) {
  const [userName,setUserName]=useState("");
  const styles = StyleSheet.create({
    labelText: {
      fontSize: 20,
      color: '#F25456',
      fontWeight: 'bold',
      marginTop: 15,
    },
    input: {
      borderBottomWidth: 1.5,
      borderBottomColor: '#F25456',
      fontSize: 20,
      color: 'black',
      opacity: 0.7,
      textDecorationLine: 'none',
    },
    button: {
      marginVertical: 20,
      width: '100%',
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      borderRadius: 30,
    },
    buttonText: {
      fontSize: 20,
      color: '#F25456',
      fontWeight: 'bold',
    },
  });
  // const handleAlert = () =>
  //   Alert.alert('Alert', 'Login success', [
  //     {
  //       text: 'Cancel',
  //       onPress: () => console.log('Cancel Pressed'),
  //       style: 'cancel',
  //     },
  //     {text: 'OK', onPress: () => console.log('OK Pressed')},
  //   ]);
  return (
    <ImageBackground style={{flex: 1}} source={require('../assets/bg.jpg')}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={{height: 60}}
          source={require('../assets/heartIcon.png')}
        />
      </View>
      <View style={{flex: 2, alignItems: 'center'}}>
        <View style={{width: '80%'}}>
          <Text style={styles.labelText}>USERNAME</Text>
          <TextInput style={styles.input} onChangeText={setUserName} value={userName}></TextInput>
          <Text style={styles.labelText}>PASSWORD</Text>
          <TextInput style={styles.input} secureTextEntry></TextInput>
          <View style={{alignItems: 'flex-end'}}>
            <Text style={[styles.labelText, {color: 'white'}]}>
              Forgot password?
            </Text>
          </View>
          <Button
            marginVertical={20}
            width="100%"
            backgroundColor="white"
            alignItems="center"
            justifyContent="center"
            height={50}
            borderRadius={30}
            fontSize={20}
            color="#F25456"
            fontWeight="bold"
            text="LOGIN"
            isImage={false}
            imgSource=""
            onPress={()=>props.navigation.navigate('Parent',{name:userName})}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}}></View>
            <View style={{flex: 2, alignItems: 'center'}}>
              <Text style={{fontWeight: 'bold'}}>OR CONNECT WITH:</Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}}></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 30,
            }}>
            <Button
              justifyContent="space-evenly"
              flexDirection="row"
              alignItems="center"
              width="47%"
              height={50}
              backgroundColor="#36609F"
              borderRadius={30}
              text="FACEBOOK"
              isImage="fb"
              imgheight={30}
              fontSize={17}
              fontWeight="bold"
              color="white"
            />
            <Button
              justifyContent="space-evenly"
              flexDirection="row"
              alignItems="center"
              width="47%"
              height={50}
              backgroundColor="#D93D2B"
              borderRadius={30}
              text="GOOGLE"
              isImage="google"
              imgheight={35}
              fontSize={17}
              fontWeight="bold"
              color="white"
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
