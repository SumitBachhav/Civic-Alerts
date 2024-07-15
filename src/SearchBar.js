import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useState } from 'react'

const SearchBar = () => {

    const [term, setTerm] = useState('')


  return (
    <View>
      <TextInput
      onChange={setTerm}
      style ={styles.input}
      value={term}
      placeholder='&#x1F50D;  Search here'
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    input:{
        height: 50,
        width: '90%',
        borderWidth: 2,
        backgroundColor: 'red',
        margin: 10,
        borderRadius: 50,
        padding: 10,
        fontSize: 20
        
    },
    container: {
        flex: 1,
    }
})