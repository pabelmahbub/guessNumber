import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './assets/components/Header';
import Screen from './assets/components/Screen';


export default function App() {
  return (
    <View style={styles.screen}>
      <Header title='Guess a Number'></Header>
      <Screen></Screen>
    </View>
  );
}

const styles = StyleSheet.create({
    screen:{
      flex:1,


    }
});
