import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Feather } from '@expo/vector-icons';

import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'
import Deck from './components/Deck'

//Bottom tab navigator
const Tab = createBottomTabNavigator();
function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Decks" component={DeckList} options={{
          tabBarLabel: 'Decks',
          tabBarIcon: ({ color, size }) => (
            <Feather name="list" size={size} color={color} />
          ),
        }}/>
      <Tab.Screen name="New Deck" component={NewDeck} options={{
          tabBarLabel: 'New Deck',
          tabBarIcon: ({ color, size }) => (
            <Feather name="folder-plus" size={size} color={color} />
          ),
        }}/>
    </Tab.Navigator>
  );
}

//Main naivator
const Stack = createStackNavigator();
function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home"
          screenOptions={{
            gestureEnabled: true,
            headerBackTitleVisible: false
          }}>
      <Stack.Screen name="Home" component={Tabs} />
      <Stack.Screen name="Deck" component={Deck} />
      <Stack.Screen name="AddCard" component={AddCard} />
      <Stack.Screen name="Quiz" component={Quiz} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
