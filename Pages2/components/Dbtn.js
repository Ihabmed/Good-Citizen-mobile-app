import {  Text ,TouchableOpacity , StyleSheet} from 'react-native'
import React from 'react'

const Dbtn = ({text},{press}) => {
  return (
    <TouchableOpacity style={Style.btnBack}
    onPress={()=>press.navigation.navigate({text})}>
      <Text style={Style.textStyle}>{text}</Text>
    </TouchableOpacity>
  )
}

const Style = StyleSheet.create({
    btnBack:{
        backgroundColor:"#84D2F6",
        width:'80%',
        height:80,
        padding:5,
        borderRadius:100,
        marginVertical:25,
        alignItems:'center',
        justifyContent:'center'
        
        
    },
    textStyle:{
        fontSize:30,
        fontWeight:"bold",
        color:'white'
        
    }

})



export default Dbtn