import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Contact() {
  return (
    <View  style={styles.flexContainer}>
      <Text style={styles.h1}>Contact</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  flexContainer:{
    flex :1,
    backgroundColor:"#6f1d1b"
  },
  h1:{
    textAlign:"center",
    fontSize:50,
    fontWeight:"bold",
    color:"white"
  }
 
})