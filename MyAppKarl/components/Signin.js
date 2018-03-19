import React from 'react';

import { Text, View } from 'react-native';


export default class Signin extends React.Component{

	static navigationOptions= {
		title: 'Sign in',

	};

	render (){
		return (
			<View>
	       		<Text> Sign in ! </Text>
	      	</View>
	    );
	}

}