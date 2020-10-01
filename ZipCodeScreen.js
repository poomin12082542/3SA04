import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList,TouchableHighlight, StyleSheet,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const availableZipItems = [
    { place: 'Chumphon', code: '86000' },
    { place: 'Krabi', code: '80240' },
    { place: 'Ranong', code: '85000' },
    { place: 'Phuket', code: '83000' },
    { place: 'Songkhla', code: '90000' },
]

const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code })}>
        <View style={styles.center}>
            <Text style={styles.front}>{place}</Text>
            <Text style={styles.front2}>{code}</Text>
        </View>
    </TouchableHighlight>
)


const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View>
            <ImageBackground source={require('./bg.jpg')} style={styles.backdrop}>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
            <StatusBar style="auto" />
            </ImageBackground>
        </View>
    );

}
const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: '#27408B',
         
        
    },
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    front: {
        fontSize: 30,
        color: 'white',
    },
    front2: {
        fontSize: 20,
        color: 'white',
    },
    
});
