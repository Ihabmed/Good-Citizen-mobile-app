import { View, Text , StyleSheet,ScrollView,TouchableOpacity } from 'react-native'
import RadioForm from 'react-native-simple-radio-button'
import React , {useState}from 'react'
import TextEnter from '../components/TextEnter'
import Btn from '../components/btn'




const signUp = (props) => {

  const [value , setValue]=useState(0)

  const item =[
    {label:"Male",value:0},
    {label:"Female",value:1},
  ]
  
  return (
    <ScrollView>
      <View style = { Style.bkg } >
      <View style = { Style.header } >
        <Text style = { Style.headerT } > Good Citizen </Text>
          
          <View style= { Style.loginblock } >
            
            <Text style = { { fontSize:30,color:"#84D2F6" , fontWeight:'bold'} } > Welcome </Text>
            <Text style = {{marginBottom:50,fontSize:35,color:"#84D2F6" , fontWeight:'bold'}}>Sign Up</Text>
            <Text style = { { fontSize:15,alignSelf:'baseline',paddingLeft:55} } >First name:</Text>
            <TextEnter placeholder="Enter your first name" />
            <Text style = { { fontSize:15,alignSelf:'baseline',paddingLeft:55} } >Last name:</Text>
            <TextEnter placeholder="Enter your last name" />
            <Text style = { { fontSize:15,alignSelf:'baseline',paddingLeft:55} } >Phone number:</Text>
            <TextEnter placeholder="Enter your phone number "  />
            <Text style = { { fontSize:15,alignSelf:'baseline',paddingLeft:55} } >Password:</Text>
            <TextEnter placeholder="Enter a password" secureText={true} />
            <View style={{alignSelf:'baseline',paddingLeft:55}}>
              <Text style={{fontSize:15,marginBottom:5}}>Select your gender: </Text>
            <RadioForm radio_props={item} initial={value} onPress={value => setValue(value)}/>
            </View>
            <Btn text="Sign Up"/>
            <Text>Alreday have an account ?</Text>
            <TouchableOpacity style={{alignItems:'center'}}
              onPress={()=>{props.navigation.navigate('logIn')}} >
              <Text style={{fontSize:22,color:'#386fa4',marginTop:5,fontWeight:'bold'}} >Login</Text>
            </TouchableOpacity>
            

        
           
          </View> 
          
      </View>
    </View></ScrollView>
  )
}

const Style = StyleSheet.create({
    bkg: {
      backgroundColor: "#84D2F6",
      paddingTop:7
      
    },
    header : {
        alignItems:"center",
        width:'100%',
    },
    headerT : {
         fontSize: 38,
         fontWeight:'bold',
         color:"white",
         marginVertical:5,

    }, 
    loginblock: {
        backgroundColor:"white",
        height:'100%',
        width:'100%',
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        paddingTop:50,
        alignItems:"center",
        
        
        


    }
})

export default signUp