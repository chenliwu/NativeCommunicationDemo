import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import IOSFaceDetection from './IOSFaceDetection';

export default class IOSFaceDetectionExample extends Component {


    static navigationOptions = {
        title: 'IOS人脸识别',
    };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title={'进入IOS原生人脸识别页面'} onPress={() => {
                    IOSFaceDetection.goFaceLoginPage(()=>{

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