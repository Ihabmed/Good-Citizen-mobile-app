import { TouchableOpacity , Text,StyleSheet } from 'react-native'
import React from 'react'

const Btn = ({text},{press}) => {
  return (
  <TouchableOpacity style={Style.btnBack}
  onPress={press}>
    <Text style={Style.textStyle}>{text}</Text>
  </TouchableOpacity>
  )
}

const Style = StyleSheet.create({
    btnBack:{
        backgroundColor:"#84D2F6",
        width:'60%',
        height:50,
        padding:5,
        borderRadius:100,
        marginVertical:25,
        alignItems:'center',
        justifyContent:'center'
        
        
    },
    textStyle:{
        fontSize:20,
        fontWeight:"bold",
        color:'white'
        
    }

})

export default Btn