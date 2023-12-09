import React from 'react'
import { StatusBar } from 'react-native'
import AppNavigator from './src/navigation/AppNavigator'
import AuthContaxtProvider from './src/contaxts/AuthContaxt'

export default function App() {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={"#4d194d"} />
      <AuthContaxtProvider>
        <AppNavigator />
      </AuthContaxtProvider>
    </>
  )
}


