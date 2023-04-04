import {Text, View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from './Header.js';
import {MaterialIcons} from '@expo/vector-icons'

export default function ReportList(props)
{
    return ( 
    <View>
        <Header title='Report List'/>
        <TouchableOpacity style={Style.btnBack} onPress={()=>{props.navigation.navigate('Report')}}>
            <Text style={Style.textStyle}>Write a report</Text>
            <MaterialIcons name="report" size={25} color="white"/>
        </TouchableOpacity>
      <FlatList
        data={[
            {
                id: 1,
                Title: 'Robbery', 
                IncidentLocation: '', 
                Content: 'I have been robbed by two masked robbers at around 2:00 pm today, they took my phone and wallet which cost more than 1000$'
            },
            {
                id: 2,
                Title: 'pit hole in the road', 
                IncidentLocation: '', 
                Content: 'yesterday at night i was driving in dark road when i seddenly hit a big pit hole be careful driving in the national road number 12'
            },
            {
                id: 3,
                Title: 'Robbery', 
                IncidentLocation: '', 
                Content: "I was mugged this morning around 9:00 am by armed and masked robber, i couldn't call the police since he stole my phone"
            }
        ]}
        renderItem={({item}) => <View style={{borderWidth: 5, borderColor: "#84D2F6", marginBottom: 20}}><Text style={Style.item}>Title : {item.Title}</Text><Text style={{marginLeft: 5}}>Content : {item.Content}</Text></View>}
      />
    </View>
    );
}

const Style = StyleSheet.create(
    {
        container: {
            flex: 1,
            paddingTop: 22,
          },
        item: {
            padding: 10,
            fontSize: 18,
            height: 44,
          },
        btnBack:{
            backgroundColor:"#84D2F6",
            width:'100%',
            height:60,
            padding:5,
            borderRadius:100,
            marginVertical:25,
            alignItems:'center',
            flexDirection:'row',
            justifyContent:'center'
        },
    }
)