import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';

const App = () => {
    return (

<NavigationContainer>
    <StackNavigator />
</NavigationContainer>
);
};

const styles = StyleSheet.create({
container:{
     flex:1,
},
});


export default App;












