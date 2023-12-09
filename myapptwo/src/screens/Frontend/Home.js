import { View, Text, Button , TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../StyleSheet/style'
import HeaderLogo from '../../components/HeaderLogo'
export default function Home({navigation}) {
  return (
    <View style={styles.flexContainer}>
      <HeaderLogo/>
      <View style={[styles.box, styles.flexCenter,styles.shadowProp]}>
      <Text style={styles.h1}>Home <Icon name="home" size={30} color="#fff" /></Text>
      </View>
      <View style={[ styles.flexCenter,styles.shadowProp]}>
        <Button title='GO TO ABOUT' onPress={()=>{ navigation.navigate("About" ,{name: "ijjaz", age:20, status:"active"}  ) } } />
      </View>
      <View>
        <TouchableOpacity 
        style={[styles.btn, styles.shadowProp, {minWidth:"70%" , alignItems:"center"}]}
        activeOpacity={0.5}
        >
          <Text >ADD TODO <Icon name="plus" size={15}/></Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


