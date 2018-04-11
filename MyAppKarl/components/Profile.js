import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import {  StackNavigator} from 'react-navigation';

import Ootd from './Ootd';
import Wardrobe from './Wardrobe';

const Stack = StackNavigator({
  Ootd: { screen: Ootd },
  Wardrobe : {screen: Wardrobe}
});
 
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
            this.userId = data['id']["_id"];
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
          <Button
              title="Get #OOTD"
              onPress={() => this.props.navigation.navigate('Ootd', { userId: this.userId}) }></Button>
        </View>
      );
    }
 
    // GET USER INFO FROM GOOGLE
    async getUserInfoGoogle(accessToken) {
      let userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me?access_token=' + accessToken, {
        method: 'GET'
      });
      return userInfoResponse;
    }

    // SAVE USER INFO
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
    
    var myRequest = new Request('http://10.0.2.2:8080/user', content);

    let postUser = await fetch(myRequest);
     
    return postUser;
    }
  }