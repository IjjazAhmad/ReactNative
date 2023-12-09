import { View, Text,  Image, Button, TouchableOpacity, TouchableHighlight, ScrollView, } from 'react-native'
import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import styles from "../StyleSheet/style"
export default function Gallery({navigation}) {
  const [state, setState] = useState(0)
  return (
    <ScrollView>
      <View style={[styles.flexContainer,{paddingVertical:40}]}>
        <View style={[styles.box, styles.flexCenter, styles.shadowProp]}>
          <Image style={styles.img} source={{ uri: "https://i.pinimg.com/originals/27/b2/c5/27b2c514ba0a9d433b7293099908e339.jpg" }} />
        </View>
        <Button title='Inc' onPress={() => { setState(state + 1) }} />

        <Text>
          Press {state} Times
        </Text>
        <Button title='Reset' onPress={() => { setState(0) }} />
        <TouchableOpacity
          style={[styles.btn, styles.shadowProp]}
          activeOpacity={0.5}

          onPress={() => { setState(state - 1) }}
        >
          <Text>Dec</Text>
        </TouchableOpacity>
        <TouchableHighlight
          onPressOut={() => {
            setState(state + 1)
          }}
          onPressIn={() => {
            setState(state + 1)
          }}
          underlayColor="#11fae1"
          style={[styles.btn, styles.shadowProp]}

        >
          <Text>In Out Button</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#11fae1"
          onPress={()=>{navigation.navigate("Home") }}
          style={[styles.btn, styles.shadowProp]}
        >
          <Text>Back TO Home</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#11fae1"
          onPress={()=>{navigation.navigate("Contact") }}
          style={[styles.btn, styles.shadowProp]}
        >
          <Text>Back TO Contact</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#11fae1"
          onPress={()=>{navigation.navigate("About") }}
          style={[styles.btn, styles.shadowProp]}
        >
          <Text>Back TO About</Text>
        </TouchableHighlight>
        

      </View>
    </ScrollView>
  )
}


