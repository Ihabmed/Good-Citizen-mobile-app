import { View, Text , StyleSheet ,TouchableOpacity} from 'react-native'
import React from 'react'
import TextEnter from './TextEnter'
import Btn from './btn'
import { ScrollView } from 'react-native-gesture-handler'



const LogIn = (props) => {
  return (
    <ScrollView>
    <View style = { Style.bkg } >
      <View style = { Style.header } >
        <Text style = { Style.headerT } > Good Citizen </Text>
          <View style= { Style.loginblock } >
            <Text style = {{marginBottom:50,fontSize:35,color:"#84D2F6" , fontWeight:'bold'}}>Login</Text>
            <Text style = { { fontSize:15,alignSelf:'baseline',paddingLeft:55} } >Email:</Text>
            <TextEnter placeholder="Enter your email" keyboardType={"email-address"}/>
            <Text style = { { fontSize:15,alignSelf:'baseline',paddingLeft:55} } >Password:</Text>
            <TextEnter placeholder="Enter your Password" secureTextEntry={true}/>
             <Btn text="Login" press={()=>{props.navigation.navigate('Dashboard')}}/>
             <View>
              <Text style={{fontSize:15,}}>you don't have an account ?</Text>
              <TouchableOpacity style={{alignItems:'center'}}
              onPress={()=>{props.navigation.navigate('SignUp')}}>
                <Text style={{fontSize:22,color:'#386fa4',marginTop:5,fontWeight:'bold'}}>Create new account</Text>
              </TouchableOpacity>
              
             </View>
          </View>
      </View>
    </View>
    </ScrollView>
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
         padding: 15
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

export default LogIn