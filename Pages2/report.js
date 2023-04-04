import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import Header from './Header.js';



const style = StyleSheet.create({
    text:
    {
      fontWeight: 'bold',
      fontSize: 25,
      marginTop: 20, 
      marginLeft: 20
    },
    input: {
      height: 60,
      width: 375,
      borderColor: '#ADD8E6',
      marginLeft: 20,
      marginBottom: 5,
      borderRadius: 5,
      borderWidth: 4,
      padding: 10
    },
  }
)

export let data = []

function Report(props) {
  const [title, setTitle] = React.useState('');
  const [incidentLocation, setIncidentLocation] = React.useState('');
  const [content, setContent] = React.useState('');
  return (
    <ScrollView>
      <Header title='Report' />
      <Text style={style.text}>
        Title :
      </Text>
      <TextInput style={style.input} onChangeText={(inp) => setTitle(inp)} />
      <Text style={style.text}>
        Incident Location :
      </Text>
      <TextInput style={style.input} onChangeText={(inp) => setIncidentLocation(inp)} />
      <Text style={style.text}>
        Content :
      </Text>
      <TextInput style={[style.input, {height: 240}]} onChangeText={(inp) => setContent(inp)}/>
      <Button title='Submit' onPress={()=>{props.navigation.navigate('ReportList');}} />
    </ScrollView>
  );
}


export default Report;