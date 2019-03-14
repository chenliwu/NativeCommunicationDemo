import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    DeviceEventEmitter,
    ToastAndroid,
    NativeModules,
    Button
} from 'react-native';

let message = "dxw";

DeviceEventEmitter.addListener('NewRNLayout', (msg) => {

});

export default class NewRNLayout extends Component {

    constructor(props) {
        super(props);

    }

    /**
     * 接收原生调用
     */
    componentWillMount() {
        //有延迟
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>RN页面</Text>
                <Text>{message}</Text>
                <Button title={'跳转到android原生页面'} onPress={() => {
                }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});