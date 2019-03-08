import React, {Component} from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';


import {
    SafeAreaView,
    createDrawerNavigator
} from 'react-navigation';

import AndroidNativeNavigator from './AndroidNativeComponentExample/AndroidNativeNavigator';

import IOSNativeNavigator from './IOSCommunicationExample/IOSNativeNavigator';


class AppNavigatorPage extends Component {

    static navigationOptions = {
        headerTitle: 'AppNavigatorPage'
    };

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>RN与原生平台的通讯</Text>
                <Text>2019-02-22</Text>
                <Text>chenlw</Text>
                <Text>右滑打开抽屉</Text>
                <Button title="打开抽屉" onPress={() => {
                    this.props.navigation.openDrawer();
                }}/>
            </SafeAreaView>
        );
    }

}

export default createDrawerNavigator(
    {
        AppNavigatorPage: {
            screen: AppNavigatorPage,
            navigationOptions: {
                drawerLabel: "首页",
            }
        },
        AndroidNativeNavigator: {
            screen: AndroidNativeNavigator,
            navigationOptions: {
                drawerLabel: "Android平台通信",
            }
        },
        IOSNativeNavigator: {
            screen: IOSNativeNavigator,
            navigationOptions: {
                drawerLabel: "IOS平台通信",
            }
        },


    },
    {
        initialRouteName: 'AppNavigatorPage',
        //headerMode: 'center'
    }
);


