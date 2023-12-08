import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import styles from '../StyleSheet/style'
export default function Home({navigation}) {
  return (
    <View style={styles.flexContainer}>
      <View style={[styles.box, styles.flexCenter,styles.shadowProp]}>
      <Text style={styles.h1}>Home</Text>
      </View>
      <View style={[ styles.flexCenter,styles.shadowProp]}>
        <Button title='GO TO ABOUT' onPress={()=>{ navigation.navigate("About") } } />
      </View>
    </View>
  )
}


