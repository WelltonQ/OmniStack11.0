import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incidents from './pages/Incidents';
import Datail from './pages/Detail';

export default function Routes() {
  return (
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Incidents" component={Incidents} />
        <AppStack.Screen name="Detail" component={Datail} />
      </AppStack.Navigator>

    </NavigationContainer>
  );
}