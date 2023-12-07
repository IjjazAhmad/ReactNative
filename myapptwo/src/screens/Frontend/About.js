import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import styles from '../StyleSheet/style'
export default function About() {
  return (
    <View style={styles.flexContainer}>
      <View style={[styles.box, styles.flexCenter,styles.shadowProp]}>
      <Text style={styles.h1}>About</Text>
      </View>
    </View>
  )
}


