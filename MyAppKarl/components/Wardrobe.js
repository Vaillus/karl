import React from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';



export default class Wardrobe extends React.Component{

	static navigationOptions= {
		title: 'Wardrobe',

	};

	render (){
		return (
			<View style={styles.grid}>

		        <Image
		          source={require('./images/clothes/tshirt1.png')}
		        />
		        <Image
		          source={require('./images/clothes/dress1.jpg')}
		        />
		    </View>
		);
	}
}

const styles = StyleSheet.create({

	grid: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
});