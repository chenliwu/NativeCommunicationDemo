import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Button,
    Platform,
    NativeModules
} from 'react-native';

const isAndroid = Platform.OS === 'android';

import RCTButton from './RCTButton';

export default class CommunicationExample extends Component {

    static navigationOptions = {
        headerTitle: 'Android-Button组件',
    };


    constructor(props, context) {
        super(props, context);
    }

    render() {

        return (
            <View style={styles.container}>
                <RCTButton
                    style={{
                        width: 200,
                        height: 100,
                        backgroundColor: 'pink',
                    }}
                    text={'Android原生组件'}
                    onClick={(event) => {
                        console.log('');
                        console.log('_onClick');
                        console.log(event.nativeEvent);
                        alert(event.nativeEvent.msg);
                    }}
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