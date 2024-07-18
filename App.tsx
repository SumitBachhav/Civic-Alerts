import './src/gesture-handler.native'
// import './src/gesture-handler'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
import All from './src/screens/All';
import Saved from './src/screens/Saved';
import Info from './src/screens/Info';


const Stack = createNativeStackNavigator()

function Sidebar(){
  return(
    <Drawer.Navigator initialRouteName='All'>
        <Drawer.Screen name='notifys' component={DisplayNotification} />
        <Drawer.Screen name='Nav' component={Navbar} />
        <Drawer.Screen name='All' component={All} />
        <Drawer.Screen name='Saved' component={Saved} />
      </Drawer.Navigator>
  )
}


function App(): React.JSX.Element {

  return (<>
    {/* // <SafeAreaView>
    //  
    //   <SearchBar/>
    //   <Navbar/>
    //   <DisplayNotification/>
    // </SafeAreaView> */}
    {/* <SearchBar/> */}
    <NavigationContainer>


      {/* <Drawer.Navigator initialRouteName='All'>
        <Drawer.Screen name='notifys' component={DisplayNotification} />
        <Drawer.Screen name='Nav' component={Navbar} />
        <Drawer.Screen name='All' component={All} />
        <Drawer.Screen name='Saved' component={Saved} />
      </Drawer.Navigator> */}


      <Stack.Navigator>
      <Stack.Screen
          name="Sidebar"
          component={Sidebar}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='All' component={All} />
        <Stack.Screen name='Info' component={Info} />
      </Stack.Navigator>
    </NavigationContainer>

    </>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
