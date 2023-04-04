import { View, Text , Image ,TouchableOpacity ,} from 'react-native'
import React ,{useState} from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Btn from './btn'

function ProfileInformation ({label, Name})
{
  return (
    <View style={{width:'75%',alignItems:'center',paddingTop:3,borderRadius:5,borderWidth:2,borderColor:'grey',marginLeft:20,marginTop:30,height:40,justifyContent:'center'}}>
    <Text style={{fontSize:20,color:'grey'}}>{label} : {Name}</Text>
    </View>
  );
}

const Profile = (props) => {
  let [Name,setName]=useState("User")
  let [lName,setlName]=useState("Name")

  return (
<ScrollView>
    <View style={{width:'100%',
    backgroundColor:'#84D2F6' ,
    paddingTop:20,
    alignItems:'center',
    marginBottom:20}}>
       <Text style={{fontSize:32,
                     marginVertical:5,
                     fontWeight:'bold',
                     color:'white',
                     
                    }}>Profile</Text>
      </View>
      <View  style={{alignItems:'center'}}>
          <Image source={require('./profimg.jpg')}
                  style={{width:140,height:140,borderRadius:100}}></Image>
          <Text  style={{fontSize:25,paddingTop:10}}>{Name} {lName}</Text>
      </View>
      <View style={{width:'100%'}}>
        <TouchableOpacity style={{alignItems:'center',}}>
          <Text style={{fontSize:20,color:'#84D2F6'}}>Edit profile photo </Text>
        </TouchableOpacity>
        <ProfileInformation label={'First name'} Name={Name} />
        <ProfileInformation label={'Last name'} Name={lName} />
        <ProfileInformation label={'Phone number'} Name={+213672296170} />
        <ProfileInformation label={'Password'} Name={'********'} />
        <TouchableOpacity style={{alignItems:'center',marginTop:10}}
        onPress={()=>{props.navigation.navigate('profileInfo')}}
        >
          <Text style={{fontSize:20,color:'#84D2F6'}}>Edit personel information </Text>
        </TouchableOpacity>
        <View style={{alignItems:'center'}}>
              <Btn text="logout" press="#"/>
        </View>

      </View>
</ScrollView>
  )
}

export default Profile
