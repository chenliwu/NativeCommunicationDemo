import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


import DeviceInfo from './DeviceInfo';

export default class DeviceInfoExample extends Component {


    static navigationOptions = {
        title: '获取IOS设备信息',
    };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>系统名称：{DeviceInfo.systemName}</Text>
                <Text>系统版本：{DeviceInfo.systemVersion}</Text>
                <Text>默认语言：{DeviceInfo.defaultLanguage}</Text>
                <Text>应用版本：{DeviceInfo.appVersion}</Text>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});