import React from 'react';

import Home from './components/Home';
import Chat from './components/Chat';
import Splash from './components/Splash';

import {Platform} from 'react-native';

import {Router, Scene} from 'react-native-router-flux';

class App extends React.Component {
    render(){
        return (
           <Splash />
        );
    }
}

export default App;