import React, { useEffect, useState } from 'react';
import styles from './styles/global';
import Login from './screens/login'
import SignUp from './screens/signup'
import Home from './screens/home'
import { Image, ScrollView, Text, View, SafeAreaView } from 'react-native';
import CuButton from './components/CuButton';
import AppNavigator from './navigation/appnavigator';


function App() {


  return (
    <>
      <SafeAreaView />
        <AppNavigator />
      <SafeAreaView />
    </>
  )
}

export default App;
