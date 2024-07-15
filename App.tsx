import './src/gesture-handler.native'
// import './src/gesture-handler'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

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
import SearchBar from './src/SearchBar';


function App(): React.JSX.Element {

  return (<>
    {/* // <SafeAreaView>
    //  
    //   <SearchBar/>
    //   <Navbar/>
    //   <DisplayNotification/>
    // </SafeAreaView> */}
    <SearchBar/>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Nav'>
        <Drawer.Screen name='notifys' component={DisplayNotification} />
        <Drawer.Screen name='Nav' component={Navbar} />
      </Drawer.Navigator>
    </NavigationContainer>

    </>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
