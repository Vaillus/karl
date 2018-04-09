import React from 'react';

import Ootd from './Ootd'
import Wardrobe from './Wardrobe'

import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation';



const Tabs = TabNavigator(
{
  Ootd : {screen : Ootd},
  Wardrobe: { screen : Wardrobe}
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

export default class Home extends React.Component {
  
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <View style={styles.container}>
        
        <Tabs/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
