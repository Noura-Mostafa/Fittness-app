import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Text } from 'react-native';
import Time from '../TimeScreen/Time';
const backgroundImage = require('../../../assets/images/5.jpg');

const Date = (props) => {
    const { navigation } = props;

    const [text1, setText1] = useState('');

    return (

        <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                    <Text style={styles.topText}>When do you want to start?</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Write a Date"
                    placeholderTextColor={'#000'}
                    value={text1}
                    onChangeText={setText1}
                />

                <View style={styles.bottomContainer}>
                    <TouchableOpacity style={styles.button1}
                                onPress={() => navigation.navigate(Time)}
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
        width: '40%',
        marginLeft: '30%',
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        paddingLeft: 10,
        borderWidth: 1,
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

export default Date;
