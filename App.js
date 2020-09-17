import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './components/Weather'
export default function App() {
  return (
    <View style={styles.container}>
      <Weather zipCode="83120" />
    </View>
   );
 }
 const styles = StyleSheet.create({
   container:{
     flex:1,
     borderWidth:5,
     borderColor:'grey',
   }
 })
 