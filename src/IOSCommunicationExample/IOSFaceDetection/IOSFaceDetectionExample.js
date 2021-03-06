import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import IOSFaceDetection from './IOSFaceDetection';

export default class IOSFaceDetectionExample extends Component {


    static navigationOptions = {
        title: 'IOS人脸离线采集',
    };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title={'人脸登录'} onPress={() => {
                    IOSFaceDetection.jumpFaceLoginPage((faceBase64) => {
                        alert(faceBase64);
                    });
                }}/>
                <Button title={'人脸采集'} onPress={() => {
                    IOSFaceDetection.jumpFaceCollectionPage((faceBase64) => {
                        alert(faceBase64);
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