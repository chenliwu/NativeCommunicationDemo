/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import CommunicationExample from './src/CommunicationExample/CommunicationExample';
import RCTButtonExample from './src/AndroidNativeComponentExample/RCTButtonExample';
import CustomTextViewExample from './src/AndroidNativeComponentExample/CustomTextViewExample';

AppRegistry.registerComponent(appName, () => RCTButtonExample);
