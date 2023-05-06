import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Text } from 'react-native';
import Date from '../DateScreen/Date';
const backgroundImage = require('../../../assets/images/4.jpg');

const Name = (props) => {
    const { navigation } = props;

    const [text1, setText1] = useState('');

    return (

        <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                    <Text style={styles.topText}>It's great that you're here! First thisngs First, what should we call you?</Text>
                <TextInput
                    style={styles.input}
                    placeholder="your name"
                    placeholderTextColor={'#777'}
                    value={text1}
                    onChangeText={setText1}
                />



                <View style={styles.bottomContainer}>
                    <TouchableOpacity style={styles.button1}
                                onPress={() => navigation.navigate(Date)}
                                >
                        <Text style={styles.buttonText}>Continue</Text>
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
    input: {
        width: '80%',
        marginLeft: '10%',
        height: 50,
        backgroundColor: 'transparent',
        marginBottom: 10,
        paddingLeft: 10,
        borderWidth: 1,
        borderBottomColor: '#777',
        textAlign:'center',
    },
    topText: {
        fontSize: 24,
        padding: 35,
        textAlign: 'center',
        color: '#FFF',
        marginTop: 275,
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


export default Name;
