import { View, Text, Button, Linking, Image } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator, DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import Home from '../screens/Frontend/Home';
import About from '../screens/Frontend/About';
import Contact from '../screens/Frontend/Contact';
import Gallery from '../screens/Frontend/Gallery';
import Footer from '../components/Footer';
import HeaderLogo from '../components/HeaderLogo';
import Login from '../screens/Auth/Login';
import { useAuthContaxt } from '../contaxts/AuthContaxt';
import styles from '../screens/StyleSheet/style';

const Stack = createNativeStackNavigator();

// ---------------- Tab Navigation
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}

        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),

        }}
      />
      <Tab.Screen name="About" component={About} initialParams={{ name: "Aqib", age: 12, status: "No Active" }}
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
// ---------------- Custem Drawer
CustomDrawerContent = (props, { navigation }) => {
  return (
    <>

      <DrawerContentScrollView {...props}>
        <View style={{ paddingVertical: 20, marginBottom: 20, borderBottomWidth: 1 }}>
          <Text style={{ textAlign: "center" }}> <Image source={require("../assets/headerlogo.png")} /> LOGO</Text>

        </View>
        <DrawerItemList {...props} />
        <DrawerItem

          style={{ size: 100 }}

          label="Web"
          onPress={() => Linking.openURL('https://ijjazahmad11.web.app/')}
        />
        <Button

          title="Go somewhere"
          onPress={() => {
            // Navigate using the `navigation` prop that you received
            navigation.navigate('contact');
          }}
        />
      </DrawerContentScrollView>
    </>
  );
}
// -------------- drawer navigation


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      
    >

      <Drawer.Screen name="DrawRoot" component={MyTabs}
      
        options={{
          title:"Home",
          drawerLabel:"Home",
          drawerIcon: ({ focused, color, size }) => <MaterialCommunityIcons name="home" color={"#4d194d"} size={20} />,
        }}
        
      />
      <Drawer.Screen name="About" component={About} initialParams={{ name: "ijjaz with Drawer", age: 26, status: "active" }}
        options={{
          drawerIcon: ({ focused, color, size }) => <MaterialCommunityIcons name="account" color={"#4d194d"} size={20} />,
        }}
      />
      <Drawer.Screen name="Contact" component={Contact}
        options={{
          drawerIcon: ({ focused, color, size }) => <Icon name="phone" size={20} color="#4d194d" />,
        }}
      />
      <Drawer.Screen name="Gallery" component={Gallery}
        options={{
          drawerIcon: ({ focused, color, size }) => <MaterialCommunityIcons name="view-gallery-outline" color={"#4d194d"} size={20} />,
        }}
      />

    </Drawer.Navigator>
  );
}
export default function AppNavigator() {

  const { isAuth } = useAuthContaxt()

  return (

    <NavigationContainer >
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShown: false,
          headerRight: () => <HeaderLogo />,

        }}>
        {isAuth ?
          <Stack.Group>
            <Stack.Screen
              name="Root"
              component={MyDrawer}
              options={{ title: 'MY HOME', headerTitleAlign: "center" }}
            />
            <Stack.Screen name="About" component={About} initialParams={{ name: "usman", age: 22, status: "active" }} />
            <Stack.Screen name="Contact" component={Contact} />
            <Stack.Screen name="Gallery" component={Gallery} />
          </Stack.Group>
          : <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
          </Stack.Group>

        }
      </Stack.Navigator>
      <Footer />
      {/* <MyTabs/> */}
    </NavigationContainer>

  )
}