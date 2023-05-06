import React from 'react';
import { View, StyleSheet, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import Signin from '../Signin/Signin';
import Createaccount from '../Createaccount/Createaccount';
const BackgroundImage = require('../../../assets/images/1.jpg');
const LogoImage = require('../../../assets/images/logo.png');

const InitialScreen = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
        <View style={styles.topContainer}>
          <Image source={LogoImage} style={styles.logoImage} />
          <Text style={styles.topText}>Make yourself stronger than your excuses</Text>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.button1}
            onPress={() => navigation.navigate(Createaccount)}

          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}
            onPress={() => navigation.navigate(Signin)}
          >
            <Text style={styles.buttonText}>Or log in</Text>
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
  topContainer: {
    alignItems: 'center',
    marginTop: -300,
  },
  logoImage: {
    width: 160,
    height: 100,
    marginTop: -30,
  },
  topText: {
    fontSize: 24,
    padding: 35,
    textAlign: 'center',
    color: '#FFF',
    marginTop: 10,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  button1: {
    backgroundColor: 'orange',
    paddingVertical: 8,
    paddingHorizontal: 90,
    borderRadius: 6,
    marginVertical: 10,
  },
  button2: {
    backgroundColor: 'transparent',
    paddingVertical: 8,
    paddingHorizontal: 90,
    borderRadius: 6,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'orange',
  },
  buttonText: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default InitialScreen;
