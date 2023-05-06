import React from 'react';
import { View, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Text } from 'react-native';
const backgroundImage = require('../../../assets/images/7.jpg');

const Start = () => {

    return (

        <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                    <Text style={styles.topText}>Your workouts start now</Text>

                <View style={styles.bottomContainer}>
                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.buttonText}>Let's Start</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    topText: {
        fontSize: 24,
        padding: 20,
        textAlign: 'center',
        color: '#FFF',
        marginTop: 275,
        borderWidth:1,
        borderColor:'blue',
        width:'80%',
        marginLeft:'10%',
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 30,
        alignSelf: 'center',
    },
    button1: {
        backgroundColor: 'orange',
        paddingVertical: 8,
        paddingHorizontal: 90,
        borderRadius: 6,
        marginVertical: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Start;
