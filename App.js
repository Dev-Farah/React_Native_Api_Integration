import React, { useEffect, useState } from 'react';
import styles from './styles/global';
import Login from './screens/login'
import SignUp from './screens/signup'
import Home from './screens/home'
import { Image, ScrollView, Text, View } from 'react-native';
import CuButton from './components/CuButton';


function App() {


  return (
    <ScrollView>


      {/* <Login /> */}
      {/* <SignUp /> */}
      <Home />


    </ScrollView>
  )
}

export default App;
