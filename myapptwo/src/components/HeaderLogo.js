import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../screens/StyleSheet/style'

export default function HeaderLogo() {
  return (
    <View>
      <Image source={require("../assets/headerlogo.png")} style={styles.logo}/>
    </View>
  )
}