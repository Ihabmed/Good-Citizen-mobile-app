import { View, Text ,StyleSheet , TouchableOpacity} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import {FontAwesome , MaterialIcons , Fontisto} from '@expo/vector-icons'



const Dashboard = (props) => {
  return (
    <ScrollView>
    <View style={Style.headerBlock}>
      <Text style={Style.headerText}>Dashboard</Text>
      <TouchableOpacity 
      onPress={()=>{props.navigation.navigate('Profile')}}>
         
         <FontAwesome style={{marginTop: 20}} name="user-circle" size={40} color="white"/>

      </TouchableOpacity>
     
    </View>
   
    <View style={Style.block}>
    <TouchableOpacity style={Style.btnBack}
onPress={()=>{props.navigation.navigate('ReportList')}}>
  <Text style={Style.textStyle}>Reports</Text>
  <MaterialIcons name="report" size={35} color="white"/>
   </TouchableOpacity>

   <TouchableOpacity style={Style.btnBack}
onPress={()=>{props.navigation.navigate('sos')}}>
  <Text style={Style.textStyle}>SOS</Text>
   </TouchableOpacity>

   <TouchableOpacity style={Style.btnBack}
onPress={()=>{props.navigation.navigate('map')}}>
  <Text style={Style.textStyle}>Map</Text>
  <Fontisto name="map" size={35} color="white"/>
   </TouchableOpacity>
      </View>

  </ScrollView>
  
  )
}
const Style = StyleSheet.create({
headerBlock:{width:'100%',
             backgroundColor:'#84D2F6' ,
             paddingTop:20,
             paddingBottom: 20,
             alignItems:'center',
             flexDirection:'row',
             marginBottom:150},
headerText:{fontSize:32,
           marginVertical:5,
           fontWeight:'bold',
           color:'white',
           paddingLeft:100,
           marginRight:60,
           marginTop: 20},
  btnBack:{
      backgroundColor:"#84D2F6",
      width:'80%',
      height:80,
      padding:5,
      borderRadius:100,
      marginVertical:25,
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'center'
      
      
  },
  textStyle:{
      fontSize:30,
      fontWeight:"bold",
      color:'white',
      marginRight:10
      
  },
  block: {
    alignItems:'center'

  }

})

export default Dashboard