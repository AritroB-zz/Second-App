import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.outerP}>
      <View style={styles.innerP}>
        <View style={styles.container}>
          <Text style={styles.myText}>#crushingit </Text>
          <Image 

            style={styles.pic}
            source={{uri: 'https://static01.nyt.com/images/2019/04/16/sports/16onsoccerweb-2/merlin_153612873_5bb119b9-8972-4087-b4fd-371cab8c5ba2-articleLarge.jpg?quality=75&auto=webp&disable=upscale'}}
          />          
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myText: {
    backgroundColor: 'red',
    color: 'white',
    fontSize: 40,
    fontFamily: 'Futura',
  },
  outerP: {
    flex: 1,
    backgroundColor: 'red',
    padding: 20,
  },
  innerP: {
    backgroundColor: 'black',
    flex: 1,
    padding: 20,
  },
  pic: {
    width: 200,
    height: 200,
    borderRadius: 25,
    marginTop: 20,
    
  }
});



