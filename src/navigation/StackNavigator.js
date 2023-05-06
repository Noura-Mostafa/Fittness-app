import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigation';
import Createaccount from '../screens/Createaccount/Createaccount';
import Signin from '../screens/Signin/Signin';
import Name from '../screens/NameScreen/Name';
import Date from '../screens/DateScreen/Date';
import Time from '../screens/TimeScreen/Time';
import Start from '../screens/StartScreen/Start';
import InitialScreen from '../screens/InitialScreen/InitialScreen';
const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{}}  initialRouteName={InitialScreen}>
      <Stack.Screen name="Initial" component={DrawerNavigator}  options={{ headerShown: false }}/>
      <Stack.Screen name="Createaccount" component={Createaccount}  options={{ headerShown: false }}/>
      <Stack.Screen name="Signin" component={Signin}  options={{ headerShown: false }}/>
      <Stack.Screen name="Name" component={Name} options={{ headerShown: false }}/>
      <Stack.Screen name="Date" component={Date} options={{ headerShown: false }}/>
      <Stack.Screen name="Time" component={Time} options={{ headerShown: false }}/>
      <Stack.Screen name="Start" component={Start} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default StackNavigator;