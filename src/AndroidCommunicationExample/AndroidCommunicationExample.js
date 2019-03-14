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

export default class AndroidCommunicationExample extends Component {


    constructor(props, context) {
        super(props, context);
    }

    componentWillMount(): void {
        DeviceEventEmitter.addListener("onCloseActivity",this.onCloseActivity);
    }

    onCloseActivity=()=>{
        NativeModules.CommunicationModule.closeActivity();
    };

    render() {

        return (
            <View style={styles.container}>
                <Button title={'调用原生组件'} onPress={() => {
                    if (isAndroid) {
                        //调用Android平台接口
                        //Communication.startActivityFromReactNative('12345');
                        NativeModules.CommunicationModule.startActivityFromReactNative('12345');
                    }
                }}/>

            </View>
        )
    }

    componentWillUnmount(): void {
        DeviceEventEmitter.removeListener("onCloseActivity",this.onCloseActivity);
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});