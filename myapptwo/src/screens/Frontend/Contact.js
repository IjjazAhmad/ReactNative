import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import styles from '../StyleSheet/style'
export default function Contact() {
  return (
    <View style={styles.flexContainer}>
      <View style={[styles.box, styles.flexCenter,styles.shadowProp,{}]}>
      <Text style={styles.h1}>Contact</Text>
      </View>
    </View>
  )
}


