/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Dimensions,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LoginScreen from './src/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const customStyles = StyleSheet.create({
  mainView: {
    backgroundColor: 'yellow',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  greyView: {
    width: Dimensions.get('screen').width,
    height: 200,
    backgroundColor: 'grey',
    borderRadius: 100,
    justifyContent: 'flex-end',
  },
  grey2: {


  }

});


export default App;
