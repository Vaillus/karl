import React from 'react';

import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';



export default class Wardrobe extends React.Component{

	static navigationOptions= {
		title: 'Wardrobe',

	};

	render (){
		return (
			<View style={styles.container}>
				<ScrollView contentContainerStyle={{flexGrow : 1, justifyContent : 'center'}}
							showsVerticalScrollIndicator={true} 
							centerContent={true}>
					<View style={styles.itemWrap}>
	                <Image style= {styles.items}  source={require('./images/clothes/tshirt1.png')} />
	                </View>
	                <View style={styles.itemWrap}>
			        <Image style= {styles.items}  source={require('./images/clothes/tshirt2.jpg')}  />
			        </View>
			        <View style={styles.itemWrap}>
			        <Image style= {styles.items}  source={require('./images/clothes/tshirt3.jpg')}  />
			        </View>
			        <View style={styles.itemWrap}>
			        <Image style= {styles.items}  source={require('./images/clothes/cardigan1.jpg')} />
			        </View>
			        <View style={styles.itemWrap}>
			        <Image style= {styles.items}  source={require('./images/clothes/hoodie1.jpg')}  />
			        </View>
			        <View style={styles.itemWrap}>
			        <Image style= {styles.items}  source={require('./images/clothes/jeans1.jpg')}  />
			        </View>
			        <View style={styles.itemWrap}>
			        <Image style= {styles.items}  source={require('./images/clothes/pants1.jpg')}  />
			        </View>
			        <View style={styles.itemWrap}>
			        <Image style= {styles.items}  source={require('./images/clothes/pants2.jpg')}  />
			        </View>
			        <View style={styles.itemWrap}>
			        <Image style= {styles.items}  source={require('./images/clothes/skirt1.jpg')}  />
			        </View>
			    
			    </ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({

	container:{
		flex: 1,
		paddingRight: 10,
	},

	itemWrap: {
		flex: 1,
		justifyContent:'center',
		alignItems: 'center',
	},

	items: {
		//height: (Dimensions.get('window').height/3),
		//width: (Dimensions.get('window').width)-10,
		width: 300,
		height: 300,
		flex:1,
	}
});