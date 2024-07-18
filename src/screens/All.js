import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { data } from '../data'
import { Pressable } from 'react-native'
import { TextInput } from 'react-native'

const All = ({navigation}) => {

  const [sterm, setSterm] = useState('')
  const [stateData, setStateData] = useState(data)

  function onpr() {
    // console.log("comment from func2")
    // console.log(typeof(data[0].date))
    d = new Date(data[0].date)
    // console.log(typeof(d))
    console.log(d.getFullYear())
    // console.log(d.getMonth())
    // console.log(d.getDate())
    // td = new Date()
    // console.log(td)
  };

  function changedText(value) {
    setSterm(value)
  }

  onKeyPressHandler = () => {
    console.log("entered")
  }

  function search() {
    let showdata = ''
    if (sterm == '') {
      showdata = data
    } else {
      console.log(sterm)
      showdata = data.filter(({ id, date, heading, announcement }) => heading.toLowerCase().includes(sterm.toLowerCase()))
      console.log(showdata)
    }
    setStateData(showdata)
  }

  const Card = ({ id, date, heading, announcement }) =>
  (

    <View style={styles.card}>
      <Pressable onPress={() => navigation.navigate("Info", {
        id: id,
        date: date,
        heading: heading,
        announcement: announcement
      })} key={id}>
        <Text style={styles.heading}>
          {date}
        </Text>
        <Text style={styles.heading}>
          {id}{" "}{heading}
        </Text>
      </Pressable>
    </View>
  )

  return (
    <>
      <View style={styles.searcbarContainer}>
        <TextInput
          onChangeText={x => changedText(x)}
          style={styles.input}
          value={sterm}
          placeholder='Search here'
          onSubmitEditing={search}
        />
        <Pressable onPress={search} style={styles.searchButton}>
          <Text style={styles.searchButtonText}>
            &#x1F50D;
          </Text>
        </Pressable>
      </View>
      <FlatList
        data={stateData}
        renderItem={({ item }) => <Card id={item.id} date={item.date} heading={item.heading} announcement={item.announcement} />}
        keyExtractor={item => item.id}
      />
    </>
  )
}

export default All

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '80%',
    borderWidth: 2,
    backgroundColor: 'red',
    margin: 10,
    borderRadius: 50,
    padding: 10,
    fontSize: 20,
    marginRight: 0

  },
  card: {
    height: 80,
    backgroundColor: 'black',
    margin: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    width: "95%",
  },
  heading: {
    fontSize: 20,
    marginTop: 5
  },
  searchButton: {
    marginLeft: 10,
    // backgroundColor: 'black',
    width: 'auto',
    justifyContent: 'center'
    // color: 'black'
  },
  searchButtonText: {
    color: 'black',
    fontSize: 30,

  },
  searcbarContainer: {
    flexDirection: 'row',
  },
  cardContainer: {
    flexDirection: 'row'
  },
  
})





// <View style = {styles.cardContainer}>
{/* <Pressable style={styles.card} onPress={onpr} key={id}>
      <Text style={styles.heading}>
        {date}
      </Text>
      <Text style={styles.heading}>
        {id}{" "}{heading}
      </Text>
    </Pressable>
    <Pressable style = {styles.starButton}>
      <Text style = {styles.star}>
        ST
      </Text>
    </Pressable> */}