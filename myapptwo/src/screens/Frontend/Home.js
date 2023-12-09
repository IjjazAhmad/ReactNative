import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import styles from '../StyleSheet/style'
import HeaderLogo from '../../components/HeaderLogo'
export default function Home({navigation}) {
  return (
    <View style={styles.flexContainer}>
      <HeaderLogo/>
      <View style={[styles.box, styles.flexCenter,styles.shadowProp]}>
      <Text style={styles.h1}>Home</Text>
      </View>
      <View style={[ styles.flexCenter,styles.shadowProp]}>
        <Button title='GO TO ABOUT' onPress={()=>{ navigation.navigate("About" ,{name: "ijjaz", age:20, status:"active"}  ) } } />
      </View>
    </View>
  )
}


