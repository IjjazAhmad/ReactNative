import React from 'react'
import Home from './src/screens/Frontend/Home'
import About from './src/screens/Frontend/About'
import Contact from './src/screens/Frontend/Contact'
import Frontend from './src/screens/Frontend'
import { StatusBar } from 'react-native'

export default function App() {
  return (
   <>
   <StatusBar barStyle={'dark-content'} backgroundColor={"red"}/>
   <Frontend/>
   </>
  )
}


