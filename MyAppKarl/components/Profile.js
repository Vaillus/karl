import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
 
export default class Profile extends React.Component{

    constructor(props) {
      super(props);
      this.state = {isLoaded: false};
      this.userToken = props.navigation.state.params.result.accessToken
      this.fullName = 'Default'
      
      this.getUserInfoGoogle(this.userToken).then((response) => response.json()).then(data => {
        this.userInfo = data
        console.log(this.userInfo);
        this.saveUserInfo(this.userToken, this.userInfo).then((res) => res.json()).then(data => {
          if(data['success'] == true){
            console.log(data);
            this.userId = data['id'];
            console.log('User successfully saved :'+ this.userId);
            this.setState(previousState => {
              return { isLoaded: true }
            })
          }
          else{
            console.log('Failed to save user: '+data['err']);
          }
        }).catch(function(error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
          throw error;
        });
        
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
    async saveUserInfo(userToken, userInfo) {

    var content = { 
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: userInfo['email'],
        givenname: userInfo['given_name'],
        accesstoken: userToken
      })
    };
    
    console.log(content);

    var myRequest = new Request('http://10.0.2.2:8080/user', content);

    let postUser = await fetch(myRequest);
     
    return postUser;
    }
  }