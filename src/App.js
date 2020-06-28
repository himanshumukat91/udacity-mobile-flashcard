import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Feather } from '@expo/vector-icons';

import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'
import Deck from './components/Deck'
import reducer from './reducers'

import rootSaga from './sagas';

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

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
  );

sagaMiddleware.run(rootSaga);

export default function App() {
  return (
    <Provider store={store} >
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
}
