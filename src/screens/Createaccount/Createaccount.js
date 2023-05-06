import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Text } from 'react-native';
import Signin from '../Signin/Signin';
const backgroundImage = require('../../../assets/images/2.jpg');

const Createaccount = (props) => {
    const { navigation } = props;

    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');

    return (

        <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <View style={styles.topContainer}>
                    <Text style={styles.topText}>Add your details below to set up an account</Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="example@gmail.com"
                    placeholderTextColor={'#777'}
                    value={text1}
                    onChangeText={setText1}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter a password"
                    placeholderTextColor={'#777'}
                    value={text2}
                    onChangeText={setText2}
                />

                <Text style={styles.checkboxLabel}>I've read the privacy policy</Text>
                <Text style={styles.checkboxLabel}>I accept the terms & conditions</Text>


                <View style={styles.bottomContainer}>
                    <TouchableOpacity style={styles.button1}
                                                    onPress={() => navigation.navigate(Signin)}

                    >
                        <Text style={styles.buttonText}>Create account</Text>
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
    },
    topText: {
        fontSize: 24,
        padding: 35,
        textAlign: 'center',
        color: '#FFF',
        marginTop: 90,
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
    checkboxLabel: {
        fontSize: 16,
        color: 'orange',
        textAlign: 'center',
        marginVertical: 10,
    },
});


export default Createaccount;
