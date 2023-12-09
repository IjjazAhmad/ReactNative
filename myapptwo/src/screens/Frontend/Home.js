import { View, Text, Button, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../StyleSheet/style'
import HeaderLogo from '../../components/HeaderLogo'
import { TextInput } from 'react-native-paper';
import { SafeAreaFrameContext, SafeAreaView } from 'react-native-safe-area-context';
import { useAuthContaxt } from '../../contaxts/AuthContaxt';

const initialState={title:"", description:""}
export default function Home({ navigation }) {
  const [state, setState] =useState(initialState)
  const {dispatch} = useAuthContaxt()
  
    const handleChange=(name, value)=>{
      setState(s=>({...s, [name]:value}))
    }
    const handleSubmite=()=>{
      let {title, description} = state
      title = title.trim()
      description = description.trim()
      let formData = {title, description}
      formData.id = Math.random().toString(36).slice(2);
      formData.dateCreated="firebase.firestore.Fieldvalue.serverTimeStamp()"
      formData.status= "active"
      formData.sortOrder = 1
      formData.createdBy={
        email:"user.email",
        uid:"user,uid",
      }
      createDocument(formData)
     
      // dispatch({type:"Login"})
    }

const createDocument=(formdata) => {
  console.log("🚀 ~ file: Home.js:37 ~ createDocument ~ formdata:", formdata)
  return {
}
  
}



  return (
    <SafeAreaView style={styles.flexContainer}>
      <View style={styles.flexContainer}>
        <TextInput
          mode="outlined"
          label="Title"
          placeholder="Type something"
          right={<TextInput.Affix text="/100" />}
          style={{ width: "100%" }}
          onChangeText={value => handleChange("title", value)}
        />
        <TextInput
          mode="outlined"
          label="Description"
          placeholder="Type something"
          right={<TextInput.Affix text="/100" />}
          style={{ width: "100%" }}
          onChangeText={value => handleChange("description", value)}
        />

        <View>
          <TouchableOpacity
            style={[styles.btn, styles.shadowProp, { minWidth: "70%", alignItems: "center" }]}
            activeOpacity={0.5}
            onPress={handleSubmite}
          >
            <Text >ADD TODO <Icon name="plus" size={15} /></Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.flexCenter, styles.shadowProp]}>
          <Button title='GO TO ABOUT' onPress={() => { navigation.navigate("About", { name: "ijjaz", age: 20, status: "active" }) }} />
        </View>
      </View>
    </SafeAreaView>
  )
}


