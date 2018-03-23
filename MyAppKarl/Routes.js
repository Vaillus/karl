import React from 'react';

import { Router, Stack, Scene} from 'react-native-router-flux';

import Home from './components/Home';
import Login from './components/Login';
import Ootd from './components/Ootd';
import Signin from './components/Signin';
import Wardrobe from './components/Wardrobe';



export default class Routes extends React.Component{
	render() {
		return(
			<Router>
				<Stack key='root' hideNavBar={true}>
					<Scene key='login' component={Login} title='Login'/>
					<Scene key='home' component={Home} title='Home'/>
					<Scene key='ootd' component={Ootd} title='Ootd'/>
					<Scene key='signin' component={Signin} title='Signin'/>
					<Scene key='wardrobe' component={Wardrobe} title='Wardrobe'/>
				</Stack>
			</Router>
			);
	}
}