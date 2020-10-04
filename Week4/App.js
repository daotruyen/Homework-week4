import React,{Component} from 'react';
import {Text,View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AllScreen from './Component/All';
import Active from './Component/Active';
import Complete from './Component/Complete';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'All') {
              iconName = 'add-circle-outline';
            } else if (route.name === 'Complete') {
              iconName = 'checkmark-done';
            } else if (route.name === 'Active') {
              iconName = 'options-outline'
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
        
      >
      
        <Tab.Screen name="Complete" component={Complete} />
        <Tab.Screen name="All" component={AllScreen} />
        <Tab.Screen name="Active" component={Active} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}