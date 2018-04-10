import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
 
export default class Calendar extends React.Component{

    
    render() {
      return (
        <Text style={styles.btntext}>CALENDAR</Text>
      );
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
