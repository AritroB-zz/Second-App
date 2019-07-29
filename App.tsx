import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.outerP}>
      <View style={styles.innerP}>
        <View style={styles.container}>
          <Text style={styles.myText}>#crushingit </Text>
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
  }
});



