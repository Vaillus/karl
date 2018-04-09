import React from 'react';
import { View, Text, Button, Image } from 'react-native';
 
export class Profile extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {isLoaded: false};
      this.userToken = props.navigation.state.params.result.accessToken
      this.fullName = 'Default'
      this.getUserInfo(this.userToken).then((response) => response.json()).then(data => {
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
    async getUserInfo(accessToken) {
      let userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me?access_token=' + accessToken, {
        method: 'GET'
      });
      return userInfoResponse;
    }
  }