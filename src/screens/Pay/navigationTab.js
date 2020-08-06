import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MainScreen from './Main'
import PlaceScreen from './Place'
import StoreScreen from './Store'

const Tab = createMaterialTopTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator 
      initialRouteName="Main" 
        tabBarOptions={{
            upperCaseLabel: false,
            activeTintColor: '#fff',
            labelStyle: { fontSize: 14 },
            style: { backgroundColor: '#000' },
            indicatorStyle: { backgroundColor: '#10c86e' }
        }}>
      <Tab.Screen name="Main" 
      component={MainScreen}  
      options={{ tabBarLabel: 'Principal' }}/>
      <Tab.Screen 
        name="Place" 
        component={PlaceScreen}
        options={{ tabBarLabel: 'Locais' }} />
      <Tab.Screen 
        name="Store" 
        component={StoreScreen}
        options={{ tabBarLabel: 'Store' }} />
    </Tab.Navigator>
  );
}
