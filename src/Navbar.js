
import React, { useState } from 'react'
import { Text, View, StyleSheet, Switch } from 'react-native'
import DisplayNotification from './DisplayNotificatoin';
import { useDispatch, useSelector } from 'react-redux';
import { tr, fl } from './redux/ToggleSlice';

export default function FlatCards(){

  const dispatch = useDispatch();
  const condition = useSelector(state => state.toggle.Value)

  const [isEnabled, setIsEnabled] = useState(condition);
  const toggleSwitch = () => {
    const toggleVar = !condition;
    setIsEnabled(toggleVar);
    if (toggleVar) {
      dispatch(tr());
      console.log("true")
    }
    else{
      dispatch(fl())
      console.log("false")
    }
  }


  // const [isEnabled, setIsEnabled] = useState(condition);
  // const toggleSwitch = () => {
  //   setIsEnabled(previousState => !previousState);
  //   if (isEnabled) {
  //     dispatch(tr());
  //     console.log("true")
  //   }
  //   else{
  //     dispatch(fl())
  //     console.log("false")
  //   }
  // }



    return (
      <>

          <View>
            <Text>{condition}</Text>
          </View>


          <View style = {styles.container}>
            <View style = {[styles.card, styles.cardOne]}>
              <Text>search</Text>
            </View>
            <View style = {[styles.card, styles.cardTwo]}>
              <Text>recent</Text>
            </View>

            <View style={[styles.containerSwitch, styles.card]}>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={condition ? '#f5dd4b' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>

            <View style = {[styles.card, styles.cardThree]}>
              <Text>All</Text>
            </View>
            <View style = {[styles.card, styles.cardOne]}>
              <Text>starred</Text>
            </View>
          </View>
          {/* <DisplayNotification/> */}
      </>
    )
  }

  const styles = StyleSheet.create({
    headingText:{
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 8
    },
    container:{
      flex: 1,
      flexDirection: 'row',
      padding: 8
    },
    card: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    //   width: 100,
      height: 50,
      borderRadius: 4,
      margin: 8
    },
    cardOne:{
      backgroundColor: '#EF5354'
    },
    cardTwo:{
      backgroundColor: '#50DBB4'
    },
    cardThree:{
      backgroundColor: '#5DA3FA'
    },
    containerSwitch: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  })

  //more than 1 styles can be applied using array eg-[style1, style2]
