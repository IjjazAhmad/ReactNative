import { View, Text, Button } from 'react-native'
import React from 'react'
import styles from '../StyleSheet/style'
export default function About({navigation}) {
  return (
    <View style={styles.flexContainer}>
      <View style={[styles.box, styles.flexCenter,styles.shadowProp]}>
      <Text style={styles.h1}>About</Text>
      </View>

      <View style={[ styles.flexCenter,styles.shadowProp]}>
        <Button title='GO TO Contact' onPress={()=>{ navigation.navigate("Contact") } } />
      </View>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  )
}


