import React from 'react';

import { Text, View, Button , StyleSheet, TouchableOpacity} from 'react-native';

import Expo from 'expo';


export default class Signin extends React.Component{

	static navigationOptions= {
		title: 'Sign in',

	};



	render (){
		return (
			<View>
				<Button style={styles.btn}
	            title="SignIn Google"
	            onPress={() => this.signInWithGoogleAsync()}
	          	/>
	        </View>
			
	    );
	}

	async signInWithGoogleAsync() {
  try {
	    const result = await Expo.Google.logInAsync({
	      androidClientId: '813609193414-ddepoddumf3hun328ubkoocaunrfgu18.apps.googleusercontent.com',
	      scopes: ['profile', 'email'],
	    });

	    if (result.type === 'success') {
	          this.props.navigation.navigate(
	            'Profile',
	            { result:result },
	          );
	        } else {
	          return {cancelled: true};
	        }
      } catch(e) {
        return {error: true};
      }
  }

}
  

const styles =StyleSheet.create({


		btn: {
			backgroundColor: '#db6f6f',
			alignSelf: 'stretch',
			alignItems:'stretch',
			padding: 14,
			marginTop: 10,
			width: 200,
		},
		btntext: {
			color: '#fff',
		}
	});

