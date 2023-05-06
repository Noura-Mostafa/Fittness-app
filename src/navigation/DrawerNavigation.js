import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import InitialScreen from '../screens/InitialScreen/InitialScreen';
import Createaccount from '../screens/Createaccount/Createaccount';
import Signin from '../screens/Signin/Signin';
import Name from '../screens/NameScreen/Name';
import Date from '../screens/DateScreen/Date';
import Time from '../screens/TimeScreen/Time';
import Start from '../screens/StartScreen/Start';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

  return (

    <Drawer.Navigator>
      <Drawer.Screen name="InitialScreen" component={InitialScreen} options={{ headerShown: false }}/>
      <Drawer.Screen name="Createaccount" component={Createaccount} options={{ headerShown: false }}/>
      <Drawer.Screen name="Signin" component={Signin} options={{ headerShown: false }}/>
      <Drawer.Screen name="Name" component={Name} options={{ headerShown: false }}/>
      <Drawer.Screen name="Date" component={Date} options={{ headerShown: false }}/>
      <Drawer.Screen name="Time" component={Time} options={{ headerShown: false }}/>
      <Drawer.Screen name="Start" component={Start} options={{ headerShown: false }}/>
    </Drawer.Navigator>

  );
};

export default DrawerNavigator;
