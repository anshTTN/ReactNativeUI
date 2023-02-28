import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default function Home(props:any) {
    useEffect(()=>{
        props.navigation.setOptions({
            headerLeft:()=>(
                <FontAwesome5 name={'bars'} size={25} style={{marginLeft:10}} onPress={()=>props.navigation.openDrawer()} />
            ),
        })
    },[])
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:20, fontWeight:'bold'}}>{`Welcome ${props.route.params.name}`}</Text>
      <Text style={{fontSize:20,fontWeight:"bold",color:"blue"}} onPress={()=>props.navigation.navigate('Login')}>Logout</Text>
    </View>
  )
}