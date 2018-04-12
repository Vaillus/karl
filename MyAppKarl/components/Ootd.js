import React from 'react';

import { Text, View, StyleSheet, Button , Image, TouchableOpacity, Dimensions} from 'react-native';
import { StackNavigator} from 'react-navigation';



export default class Ootd extends React.Component{

	static navigationOptions= {
		title: 'ootd',

	};

	constructor(props) {
		super(props);
		this.state = {isLoaded: false};
		this.userId = props.navigation.state.params.userId
		
		this.getOutfitSuggestion(this.userId).then((response) => response.json()).then(data => {
			this.outfit = data["clothes"];		 
			this.outfit_images = new Array(this.outfit.length)
			var i=0
			this.outfit.forEach(cloth => {
			  this.outfit_images[i] = cloth["_id"]+".png" ;
			  i++
		  }); 
		  console.log(this.outfit_images);
		});
	  }

	render (){
		return (
			<View style={styles.container}>
				<Text style={styles.title}> Your #OOTD </Text>
				<View style={styles.outfitContainer}>
					<Image style={styles.outfitItems} source={this.outfit_images} />
				</View>

				<View style={styles.btnContainer}>
					<TouchableOpacity style={styles.btn}>
	       				<Text style={styles.btntext}>Dislike</Text>
	       			</TouchableOpacity>

		       		<TouchableOpacity style={styles.btn}>
		       			<Text style={styles.btntext}>Like</Text>
		       		</TouchableOpacity>
				</View>
				
			</View>
				      	
	    );
	}


	async getOutfitSuggestion(userId) {
	
		var myRequest = new Request('http://10.0.2.2:8080/clothes/outfit/test/'+ userId);
	
		let getOutfit = await fetch(myRequest);
		console.log("GET OUTFIT RESPONSE:");
		console.log(getOutfit);
		 
		return getOutfit;
		}
}

const styles= StyleSheet.create({
	container: {
		flex:1,	
		flexDirection:'column',
		justifyContent: 'space-between',
		alignItems:'center',	
	},

	title: {
		fontSize: 30,
		textAlign: 'center',
		color: '#db6f6f',
	},

	outfitContainer: {
		flex: 4/5,
		flexWrap: 'wrap',

	},

	outfitItems: {
		//width: (Dimensions.get('window').height/3) -20,
		width: 200,
		height: 200,
	},

	btnContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems:'stretch',
		
		margin: 10,
	},

	btn: {
		backgroundColor: '#db6f6f',
		alignSelf: 'stretch',
		alignItems:'stretch',
		padding: 14,
		width: 100,
		height: 40,
	},

	btntext: {
			color: '#fff',
			textAlign: 'center',
		},
})