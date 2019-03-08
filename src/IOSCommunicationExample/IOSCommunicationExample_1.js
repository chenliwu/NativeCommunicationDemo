import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Button,
    Platform,
    NativeModules
} from 'react-native';

const isAndroid = Platform.OS === 'android';

export default class CommunicationExample extends Component {


    constructor(props, context) {
        super(props, context);
    }

    render() {

        return (
            <View style={styles.container}>
                <Button title={'调用原生组件'} onPress={() => {
                    if (!isAndroid) {
                        NativeModules.IOSCommunication.prsentViewControllerFromReactNative('123456');
                    }
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