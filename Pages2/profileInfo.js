import { View, Text } from 'react-native'
import React, { useState } from 'react'
import TextEnter from '../components/TextEnter'
import Btn from '../components/btn'





const profileInfo = (props) => {

    let [Name,setName]=useState("User")
    let [lName,setlName]=useState("Name")
    let [phoneNum,setPhoneNum]=useState("+213000000000")
    let [password,setPassword]=useState("********")


  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>

          <TextEnter placeholder="Edit your first name :" onChangeText={fnm => setName(fnm)} />
          <TextEnter placeholder="Edit your last name" onChangeText={lnm => setlName(lnm)} />
          <TextEnter placeholder="Edit your phone number" onChangeText={phn => setPhoneNum(phn)} />
          <TextEnter placeholder="Edit your password" secureText={true} onChangeText={psw => setPassword(psw)} />
           <Btn text="Save" press={()=>{props.navigation.navigate('Profile')}} />
    </View>
  )
}


export default profileInfo


