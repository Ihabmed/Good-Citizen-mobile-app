
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Profile from './Pages2/Profile'
import Dashboard from './Pages2/Dashboard'
import ReportList from './Pages2/ReportList'
import Report from './Pages2/report'
import LogIn from './Pages2/logIn'
import SignUp from './Pages2/signUp'
import Sos from './Pages2/sos'
import Map from './Pages2/map'
import ProfileInfo from './Pages2/profileInfo'




const Stack = createStackNavigator();


const App = () => {
  return (
       <NavigationContainer>
          <Stack.Navigator 
          initialRouteName='SignUp'
          screenOptions={{
            headerShown: false
          }}
          >
            <Stack.Screen name='SignUp' component={SignUp} />
            <Stack.Screen name='LogIn' component={LogIn} />
            <Stack.Screen name='Dashboard' component={Dashboard} />
            <Stack.Screen name='ReportList' component={ReportList}/>
            <Stack.Screen name='Report' component={Report}/>
            <Stack.Screen name='sos' component={Sos}/>
            <Stack.Screen name='map' component={Map}/>
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='profileInfo' component={ProfileInfo} />

          </Stack.Navigator>
   
       </NavigationContainer>
  )
}

export default App
