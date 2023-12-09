import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Frontend/Home';
import About from '../screens/Frontend/About';
import Contact from '../screens/Frontend/Contact';
import Gallery from '../screens/Frontend/Gallery';
import Footer from '../components/Footer';
import HeaderLogo from '../components/HeaderLogo';

const Stack = createNativeStackNavigator();
export default function AppNavigator() {
    return (
        <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: ()=><HeaderLogo/>
      }}>
        <Stack.Screen 
        name="Home" 
        component={Home}
        options={{ title: 'MY HOME', headerTitleAlign:"center"}}
        
        />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Gallery" component={Gallery} />
      </Stack.Navigator>
      <Footer/>
    </NavigationContainer>
    )
}