import React, {Component} from 'react';
import {Button, Platform, StyleSheet, View,} from 'react-native';

import AndroidDialogUtils from './../utils/AndroidDialogUtils';

const isAndroid = Platform.OS === 'android';

export default class TestDialogUtilsExample extends Component {

    static navigationOptions = {
        headerTitle: '测试Android对话框工具类',
    };


    constructor(props, context) {
        super(props, context);
    }


    render() {

        return (
            <View style={styles.container}>
                <Button title={'调用Android对话框'} onPress={() => {
                    AndroidDialogUtils.showInputPasswordDialog('标题', '消息', '请输入密码', (password) => {
                        alert('输入的密码：' + password);
                    });
                }}/>
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