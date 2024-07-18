import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { format } from 'date-fns';

const Info = ({route, navigation}) => {

    const {id, date, heading, announcement} = route.params

    // const formattedDate = format(new Date(date), 'dd MMM yyyy');


  return (
    // <View>
    //   <Text style = {styles.text}>{id}{date}{heading}{announcement}</Text>
    // </View>
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.id}>{`ID: ${id}`}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.announcement}>{announcement}</Text>
    </View>
  )
}

export default Info

// const styles = StyleSheet.create({
//     text: {
//         color: "black"
//     }
// })

const styles = StyleSheet.create({
    card: {
      backgroundColor: 'black',
      padding: 16,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
      marginBottom: 16,
      height: "100%"
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    id: {
      fontSize: 14,
      color: '#888',
    },
    date: {
      fontSize: 14,
      color: '#888',
    },
    heading: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    announcement: {
      fontSize: 16,
    },
  });