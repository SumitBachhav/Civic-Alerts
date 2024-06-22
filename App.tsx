/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import DisplayNotification from './src/DisplayNotificatoin';
import Navbar from './src/Navbar';


function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      {/* <Text>from app</Text> */}
      <Navbar/>
      <DisplayNotification/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
