import { View, Text, Button } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome"
import styles from '../StyleSheet/style'
export default function Contact({navigation}) {
  return (
    <View style={styles.flexContainer}>
      <View style={[styles.box, styles.flexCenter,styles.shadowProp,{}]}>
      <Text style={styles.h1}><Icon name="phone" size={50} color="#fff" /></Text>
      </View>
      <View style={[ styles.flexCenter,styles.shadowProp]}>
        <Button title='GO TO Gallery' onPress={()=>{ navigation.navigate("Gallery") } } />
      </View>
    </View>
  )
}


