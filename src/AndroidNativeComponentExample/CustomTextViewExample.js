import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Button,
    Platform,
    NativeModules
} from 'react-native';

const isAndroid = Platform.OS === 'android';

import RCTText from './CustomText';

export default class CommunicationExample extends Component {


    constructor(props, context) {
        super(props, context);
    }

    render() {

        return (
            <View style={styles.container}>
                <RCTText
                    style={styles.myTextView}
                    text="我是封装的原生组件"
                    textSize={16}
                    onChangeMessage={(msg) => {
                        alert('点击事件');
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
    },
    myTextView: {
        //flex: 1,
        alignSelf: 'center',
        width: 200,
        height: 300,
        backgroundColor: 'pink',
    },
});