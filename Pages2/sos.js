import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 20}}>Select the convenient departement :</Text>
        <Departement name='Police Departement' color='#ADD8E6'/>
        <Departement name='Ambulance' color='green'/>
        <Departement name='Fire Departement' color='red'/>
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 150
  },
});

function Departement ({name, color}) {
  return (
    <TouchableOpacity style={{height: 150, width: '100%', backgroundColor: color, marginTop: 10, marginBottom: 40, alignItems: 'center', justifyContent: 'center'}} >
      <Text numberOfLines={1} style={{fontWeight: 'bold', fontSize: 20}}>{name}</Text>
    </TouchableOpacity>
  );
}
