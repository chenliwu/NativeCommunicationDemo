import React, {Component} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import TestReactNativeView from './TestReactNativeView';

const screenWidth = Dimensions.get('window').width;

/**
 * IOS原生组件封装，注意RN端设置组件的宽度和高度，这样组件才能显示。
 */
export default class TestReactNativeViewExample extends Component {

    static navigationOptions = {
        headerTitle: 'IOS原生组件封装example',
    };

    constructor(props, context) {
        super(props, context);
    }


    render() {

        return (
            <View style={styles.container}>
                <TestReactNativeView
                    style={{
                        flex: 1,
                        width: screenWidth,
                    }}
                    type={'type from react-native'}
                />
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