import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Platform,
    Dimensions
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const isAndroid = Platform.OS === 'android';

const isIOS = Platform.OS === 'ios';

import FaceDetectionViewGroup from './FaceDetectionViewGroup';

export default class FaceDetectionViewGroupExample extends Component {

    static navigationOptions = {
        headerTitle: 'Android布局组件封装example',
    };

    constructor(props, context) {
        super(props, context);
    }

    render() {

        return (
            <View style={styles.container}>
                <FaceDetectionViewGroup style={{
                    flex:1,
                    width:screenWidth,
                    //height:300,
                    backgroundColor:'green'
                }}>
                </FaceDetectionViewGroup>
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