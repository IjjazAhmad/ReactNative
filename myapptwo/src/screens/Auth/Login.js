import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from '../StyleSheet/style'
import { useAuthContaxt } from '../../contaxts/AuthContaxt'
const initialState={email:"", password:""}
export default function Login() {
  const [state, setState] =useState(initialState)
const {dispatch} = useAuthContaxt()

  const handleChange=(name, value)=>{
    setState(s=>({...s, [name]:value}))
  }
  const handleSubmite=()=>{
    const {email, password} = state
    console.log("🚀 ~ file: Login.js:12 ~ handleSubmite ~ email:", email)
    console.log("🚀 ~ file: Login.js:12 ~ handleSubmite ~ password:", password)
    dispatch({type:"Login"})
  }
  return (
    <View style={[styles.flexCenter,styles.flexContainer,{backgroundColor:"#4d194d"}]}>
      <Text style={styles.h1}>Login</Text>
      <TextInput 
      style={styles.formControl}
      placeholder='Enter your email'
      placeholderTextColor={"#fff"}
      keyboardType='email-address'
      onChangeText={value => handleChange("email", value)}
      />
      <TextInput 
      style={styles.formControl}
      placeholder='Enter your password'
      placeholderTextColor={"#fff"}
      secureTextEntry
      onChangeText={value => handleChange("password", value)}
      />
      <View>
        <TouchableOpacity
        style={[styles.btn, styles.shadowProp, {minWidth:"90%" , alignItems:"center"}]}
        activeOpacity={0.5}
        onPress={handleSubmite}
        >
          <Text >Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

