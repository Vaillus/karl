import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
 
export default class Profile extends React.Component{

    constructor(props) {
      super(props);
      this.state = {isLoaded: false};
      this.userToken = props.navigation.state.params.result.accessToken
      this.fullName = 'Default'
      this.test().then((res) => res.json()).then(data => {
        this.username = data['user']['username']
        console.log(this.username)
      }).catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        throw error;
      });
      this.getUserInfoGoogle(this.userToken).then((response) => response.json()).then(data => {
        this.userInfo = data
        console.log(this.userInfo)
        this.setState(previousState => {
          return { isLoaded: true }
        })
      })
    }
 
    render() {
      let userInfo = this.state.isLoaded ? this.userInfo : ' ';
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={{uri: userInfo['picture'] }} style={{width: 300, height: 300}} key={this.state.isLoaded} />
          <Text>Hello {userInfo['name']} !</Text>
        </View>
      );
    }
 
    // Example of using the Google REST API
    async getUserInfoGoogle(accessToken) {
      let userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me?access_token=' + accessToken, {
        method: 'GET'
      });
      return userInfoResponse;
    }

    // Example of using the Google REST API
    async test() {
      let yolo = await fetch('http://10.0.2.2:8080/user/5acbbea880e3a21ef4541ef6', {
        method: 'GET'
      });
      console.log('ok')
      return yolo;
    }
  }