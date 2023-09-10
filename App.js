import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import { HomeScreen } from './Home';
 import { MovieDetail } from './MovieDetail/MovieDetail';
const Stack = createNativeStackNavigator();

function HeaderLogo() {
  return (
    <Image
      style={{ width: 55, height: 44 }}
      source={require('./assets/Header/logo.png')}
    />
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
       headerStyle: {
        backgroundColor: 'rgb(3,37,65)',
        },
        headerTitle: (props) => <HeaderLogo {...props} /> 
      }

      }>

       <Stack.Screen name="Home" component={HomeScreen} options={
        {
title: 'The Movie Hub',
headerTintColor: '#fff',
headerTitleStyle: {
fontWeight:'bold',
},
        }
       

       } />
        <Stack.Screen name="MovieDetail" component={MovieDetail} options={{
          headerBackTitleVisible: false,
          headerBackTitleStyle : {color:'white'},
        }}
                />
      </Stack.Navigator>
      </NavigationContainer>
  );
}
//

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
