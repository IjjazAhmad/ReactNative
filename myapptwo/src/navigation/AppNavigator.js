import { View, Text } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Frontend/Home';
import About from '../screens/Frontend/About';
import Contact from '../screens/Frontend/Contact';
import Gallery from '../screens/Frontend/Gallery';
import Footer from '../components/Footer';
import HeaderLogo from '../components/HeaderLogo';

const Stack = createNativeStackNavigator();


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Home" component={Home}
      
      options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
       
      }}
      />
      <Tab.Screen name="About" component={About} initialParams={{name:"Aqib", age:12, status:"No Active"}} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
      />
      <Tab.Screen name="Contact" component={Contact} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="contacts" color={color} size={size} />
        ),
      }}
      />
      <Tab.Screen name="Gallery" component={Gallery} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="view-gallery-outline" color={color} size={size} />
        ),
      }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
    return (
      
        <NavigationContainer>
      {/* <Stack.Navigator screenOptions={{
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
        <Stack.Screen name="About" component={About} initialParams={{name: "usman", age:22, status:"active"}} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Gallery" component={Gallery} />
      </Stack.Navigator>
      <Footer/> */}
      <MyTabs/>
    </NavigationContainer>
  
    )
}