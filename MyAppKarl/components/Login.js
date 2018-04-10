import React from 'react';

import { Text, View, TextInput, TouchableOpacity, StyleSheet, Button} from 'react-native';
import { StackNavigator} from 'react-navigation';
import { Actions} from 'react-native-router-flux';

import Profile from './Profile';




export default class Login extends React.Component{

	
	static navigationOptions= {
		title: 'Log in',

	};
	
	render (){
		const { navigate } = this.props.navigation;
		return (


			<View style={styles.loginformcontainer}>

	       		<TextInput underlineColorAndroid='transparent' placeholder='Email' style={styles.textinput} />
	       		<TextInput underlineColorAndroid='transparent' placeholder='Password' style={styles.textinput} />

	       		<TouchableOpacity style={styles.btn}>
	       			<Text style={styles.btntext}>LOG IN</Text>
	       		</TouchableOpacity>

	       		<TouchableOpacity style={styles.btn}>
	       			<Text style={styles.btntext}>FORGOT PASSWORD</Text>
	       		</TouchableOpacity>

	       		<TouchableOpacity style={styles.btn} >
	       			<Text style={styles.btntext}>SKIP</Text>
	       		</TouchableOpacity>

	      	</View>
	    );
	}
}

	const styles =StyleSheet.create({
		loginformcontainer: {
			flex: 1,
			alignItems: 'stretch',
			padding: 20,
			justifyContent: 'center'
		},
		textinput: {
			color: '#db6f6f',
			alignSelf: 'stretch',
			padding: 12,
			marginBottom: 10,
			backgroundColor: 'rgba(255,255,255,0.2)',
			borderColor: '#db6f6f',
			borderWidth: 0.6,
		},
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

