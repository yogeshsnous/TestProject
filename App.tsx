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
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './src/screens/DetailsScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


const Stack = createNativeStackNavigator();

const LoginStack = () => {
  return (
     <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
  ) 

} 


const HomeStack = () => {
  return (
     <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
  ) 

} 


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='HomeStack' 
    screenOptions={({route}) => ({
      tabBarIcon: ({}) => {
        let imageUrl;
        if(route.name === "LoginStack") {
          imageUrl = "https://i.pinimg.com/originals/97/21/05/972105c5a775f38cf33d3924aea053f1.jpg"
        } else if (route.name === "HomeStack") {
          imageUrl = "https://e7.pngegg.com/pngimages/1016/542/png-clipart-black-house-house-computer-icons-home-automation-kits-real-estate-home-icon-angle-building-thumbnail.png"
        }
        return <Image style={{width: 40, height: 40}} source={{uri: imageUrl}}/>
      }
    })}
    >
      <Tab.Screen name="LoginStack" component={LoginStack} />
      <Tab.Screen name="HomeStack" component={HomeStack} />
    </Tab.Navigator>
  );
}



function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <MyTabs />
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
