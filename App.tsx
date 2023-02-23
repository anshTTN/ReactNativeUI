import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  Alert,
} from 'react-native';

const Login = () => {
  // const [userName,setUserName]=useState("");
  // const [password,setPassword]=useState("");
  const handleAlert = () =>
    Alert.alert('Alert', 'Login success', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  return (
    <View style={{width: '80%', borderWidth: 0}}>
      <Text style={styles.labelText}>USERNAME</Text>
      <TextInput style={styles.input}></TextInput>
      <Text style={styles.labelText}>PASSWORD</Text>
      <TextInput style={styles.input} secureTextEntry></TextInput>
      <View style={{alignItems: 'flex-end'}}>
        <Text style={[styles.labelText, {color: 'white'}]}>
          Forgot password?
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleAlert}>
        <Text style={styles.buttonText} >
          LOGIN
        </Text>
      </TouchableOpacity>
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
        <TouchableOpacity
          style={{
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            alignItems: 'center',
            width: '47%',
            height: 50,
            backgroundColor: '#36609F',
            borderRadius: 30,
          }}>
          <Image style={{height: 30}} source={require('./fbIcon.png')} />
          <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
            FACEBOOK
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            alignItems: 'center',
            width: '47%',
            height: 50,
            backgroundColor: '#D93D2B',
            borderRadius: 30,
          }}>
          <Image style={{height: 35}} source={require('./googleIcon.png')} />
          <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
            GOOGLE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground source={require('./bg.jpg')} style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image style={{height: 60}} source={require('./heartIcon.png')} />
        </View>
        <View style={{flex: 2, alignItems: 'center'}}>
          <Login />
        </View>
      </ImageBackground>
    </View>
  );
};
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
export default App;
