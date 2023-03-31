import {  TextInput } from 'react-native'
import React from 'react'

const TextEnter = (props) => {
  return (
     <TextInput {...props} style={{borderRadius:100,color:'grey',placeholderTextColor:'blue',
     paddingHorizontal:10,paddingVertical:5,width:'75%',backgroundColor:'rgb(220,220,220)',marginVertical:10}}>

     </TextInput>
  )
}

export default TextEnter