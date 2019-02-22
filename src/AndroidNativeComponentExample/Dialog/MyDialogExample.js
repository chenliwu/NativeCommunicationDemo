import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Button,
    Platform,
    NativeModules,
    DeviceEventEmitter
} from 'react-native';

const isAndroid = Platform.OS === 'android';

export default class MyDialogExample extends Component {

    static navigationOptions = {
        headerTitle: '调用Android对话框',
    };

    onConfirmPasswordListener = null;


    constructor(props, context) {
        super(props, context);
    }

    componentWillMount(): void {
        this.addOnConfirmPasswordListener();
    }

    componentWillUnmount(): void {
        this.removeOnConfirmPasswordListener();
    }

    addOnConfirmPasswordListener = () => {
        //监听Android发送的事件
        this.onConfirmPasswordListener = DeviceEventEmitter.addListener('onConfirmPassword', (params) => {
            // handle event.
            console.log('onConfirmPassword');
            console.log(params);
            NativeModules.MyDialogModule.showDialog('提示信息', '输入的密码：' + params.password);
        });
    };

    removeOnConfirmPasswordListener = () => {
        this.onConfirmPasswordListener && this.DeviceEventEmitter.removeAllListeners("onConfirmPassword");
    };

    render() {

        return (
            <View style={styles.container}>
                <Button title={'调用Android对话框'} onPress={() => {
                    //NativeModules.MyDialogModule.showDialog('标题', '对话框内容');
                    NativeModules.MyDialogModule.showInputPasswordDialog('登录密码校验', '', '请输入密码');
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