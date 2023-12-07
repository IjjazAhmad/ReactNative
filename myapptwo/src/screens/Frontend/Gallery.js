import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import logo from '../../assets/logo.png'
export default function Gallery() {
  return (
    <View style={styles.flexContainer}>
      <View style={[styles.box, styles.flexCenter,styles.shadowProp]}>
      <Image style={styles.img} source={{uri:"https://i.pinimg.com/originals/27/b2/c5/27b2c514ba0a9d433b7293099908e339.jpg"}} />
      <Image style={styles.img} source={{uri:"https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_640.png"}}/>
      <Image style={styles.img} source={require(logo)}/>
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
  img:{
    width:100,
    height : 70,
  }

})