import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

 
export default function App() {
  return (
    <View>
      <Header Title='Report'/>
      <ReportInfo label='Title :'/>
      <ReportInfo label='Incident Location :' />
      <ReportInfo label='Content :' />
      <Button title='Submit' />
    </View>
  );
}


function ReportInfo ({label})
{
  return (
    <>
      <Text style={{fontWeight: 'bold', fontSize: 25, marginTop: 20, marginLeft: 20,}}>
        {label}
      </Text>
      <TextInput style={{
        height: 60,
        width: 375,
        borderColor: '#ADD8E6',
        marginLeft: 20,
        marginBottom: 5,
        borderRadius: 5,
        borderWidth: 4,
        padding: 10
      }} />
    </>
  );
}


function Header ({Title})
{
  return (
    <View style={{width: '100%', backgroundColor: '#84D2F6', paddingTop: 20, alignItems: 'center', flexDirection: 'center', marginBottom: 20}}>
    <Text style={{fontSize: 32, marginVertical:5, fontWeight: 'bold', color: 'white', paddingLeft: 100, marginRight: 60  }}>
      {Title}
    </Text>
    </View>
  );
}