import {View, StyleSheet, Text} from 'react-native';

const Style = StyleSheet.create({
    headerBlock:{width:'100%',
                 backgroundColor:'#84D2F6' ,
                 paddingTop:20,
                 paddingBottom: 20,
                 alignItems:'center',
                 flexDirection:'row',
                 marginBottom:80},
    headerText:{fontSize:32,
               marginVertical:5,
               fontWeight:'bold',
               color:'white',
               paddingLeft: 120,
               marginRight:60,
               marginTop: 20,        
              }
    });
export default function Header({title})
{
    return (
    <View style={Style.headerBlock}>
      <Text style={Style.headerText}>{title}</Text>
    </View>
    );
}