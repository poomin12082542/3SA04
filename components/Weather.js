import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Weather(props) {
    return (
        <View>
        <Text>Weather{props.zipCode}</Text>
       
        </View>
        );
 }