import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function About() {
  return (
    <View  style={styles.flexContainer}>
      <Text style={styles.h1}>About</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  flexContainer:{
    flex :1,
    backgroundColor:"#432818"
  },
  h1:{
    textAlign:"center",
    fontSize:50,
    fontWeight:"bold",
    color:"white"
  }
 
})