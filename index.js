/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import CommunicationExample from './src/CommunicationExample/CommunicationExample';

AppRegistry.registerComponent(appName, () => CommunicationExample);
