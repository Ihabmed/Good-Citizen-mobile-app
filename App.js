
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Profile from './Pages2/Profile'
import About from './Pages2/About'
import stackdash from './Pages2/stackdash'
import Dashboard from './Pages2/Dashboard'
import report from './Pages2/report'
import sos from './Pages2/sos'
import map from './Pages2/map'
import profileInfo from './Pages2/profileInfo'




const Stack = createStackNavigator();


const App = () => {
  return (
       <NavigationContainer>
          <Stack.Navigator 
          initialRouteName='Dashboard'
          headerMode="none"
          >
            <Stack.Screen name='Dashboard' component={Dashboard} />
            <Stack.Screen name='Report' component={report}/>
            <Stack.Screen name='sos' component={sos}/>
            <Stack.Screen name='map' component={map}/>
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='About' component={About} />
            <Stack.Screen name='profileInfo' component={profileInfo} />

          </Stack.Navigator>
   
       </NavigationContainer>
  )
}

export default App
