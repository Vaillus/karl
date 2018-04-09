import React from 'react';

import Login from './components/Login';
import Signin from './components/Signin';
import Ootd from './components/Ootd';
import Wardrobe from './components/Wardrobe';
import Profile from './components/Profile';


import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation';



const Tabs = TabNavigator(
{
  Signin : {screen : Signin},
  Login: { screen : Login},
  Ootd : {screen : Ootd},
  Wardrobe: { screen : Wardrobe},
  Profile: {screen: Profile},
}, 
{
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        backgroundColor: "#db6f6f",
      },
      indicatorStyle: {
        backgroundColor: "#FFF",
      },
    }
},
  
);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Tabs/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    paddingTop: 20,
  }
});
