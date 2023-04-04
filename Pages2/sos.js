import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {FontAwesome, MaterialIcons} from '@expo/vector-icons'


export default function Sos() {
  return (
    <View>
        <Header title='Emergency' />
        <TouchableOpacity style={Style.btnBack}>
          <FontAwesome name="video-camera" size={45} color="white"/>
        </TouchableOpacity>
        <TouchableOpacity style={{
                marginLeft: 90,
                marginTop: 40,
                backgroundColor:"red",
                width:'50%',
                height:80,
                padding:5,
                borderRadius:100,
                alignItems:'center',
                flexDirection:'row',
                justifyContent:'center'}}>
          <MaterialIcons name="multitrack-audio" size={45} color="white"/>
        </TouchableOpacity>
    <StatusBar style="auto" />
    </View>
  );
}

const Style = StyleSheet.create({
    headerBlock:{width:'100%',
                 backgroundColor:'red' ,
                 paddingTop:20,
                 paddingBottom: 20,
                 alignItems:'center',
                 flexDirection:'row',
                 marginBottom:80},
    headerText:{fontSize:32,
               marginVertical:5,
               fontWeight:'bold',
               color:'white',
               paddingLeft: 120,
               marginRight:60,
               marginTop: 20,        
              },
              btnBack:{
                marginLeft: 90,
                marginTop: 170,
                backgroundColor:"red",
                width:'50%',
                height:80,
                padding:5,
                borderRadius:100,
                alignItems:'center',
                flexDirection:'row',
                justifyContent:'center'
                
                
            }
    });
function Header({title})
{
    return (
    <View style={Style.headerBlock}>
      <Text style={Style.headerText}>{title}</Text>
    </View>
    );
}