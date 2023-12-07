import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <View style={styles.flexContainer}>
      <View style={[styles.box, styles.flexCenter,styles.shadowProp]}>
      <Text style={styles.h1}>Home</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0096c7"
  },
  flexCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: "red",
    borderRadius:10,
    borderWidth:2,
    borderColor: "white",
  },
  h1: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold",
    color: "white"
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

})