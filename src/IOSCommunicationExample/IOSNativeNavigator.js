import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import {
    SafeAreaView,
    createStackNavigator
} from 'react-navigation';


import IOSCommunicationExample_1 from './IOSCommunicationExample_1';
import DeviceInfoExample from './DeviceInfo/DeviceInfoExample';

class IOSNativeNavigatorPage extends React.Component {

    static navigationOptions = {
        headerTitle: 'IOS原生平台通讯',
    };

    flatListComponent = null;

    constructor(props) {
        super(props);
        let dataList = new Array();

        dataList.push({
            id: 'IOSCommunicationExample_1',
            name: 'IOS原生平台通信example'
        });
        dataList.push({
            id: 'DeviceInfoExample',
            name: 'IOS原生平台通信-获取设备信息'
        });


        this.state = {
            dataList: dataList
        };
    }

    /**
     * item点击事件
     * @param item
     * @private
     */
    _onPressItem = (item) => {
        this.props.navigation.navigate(item.id);
    };

    /**
     * 渲染item组件（数据行）
     * @param item
     * @returns {*}
     * @private
     */
    _renderItem = ({item, index}) => {
        return (
            <TouchableOpacity
                style={{
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPress={() => {
                    this._onPressItem(item);
                }}
            >
                <Text>{item.name}</Text>
            </TouchableOpacity>

        )
    };


    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: '#fff'
            }}>
                <FlatList
                    ref={(flatList) => {
                        //获取FlatList组件的引用
                        this.flatListComponent = flatList;
                    }}
                    ItemSeparatorComponent={() => <View
                        style={{height: 1, backgroundColor: '#f5f5f9',}}/>}
                    data={this.state.dataList}
                    keyExtractor={(item, index) => {
                        return item.id;
                    }}
                    renderItem={({item, index}) => {
                        return this._renderItem({item, index});
                    }}

                    getItemLayout={(item, index) => (
                        {length: 50, offset: (50 + 2) * index, index}
                    )}

                />
            </SafeAreaView>
        );
    }
}


const AnimationStudyNavigator = createStackNavigator(
    {
        IOSNativeNavigatorPage: {
            screen: IOSNativeNavigatorPage
        },

        IOSCommunicationExample_1: {
            screen: IOSCommunicationExample_1
        },
        DeviceInfoExample: {
            screen: DeviceInfoExample
        },


    },
    {
        initialRouteName: 'IOSNativeNavigatorPage',
        navigationOptions: {
            // headerStyle: {
            //     height: 50,
            //     backgroundColor: 'pink'
            // }
        },
    }
);

AnimationStudyNavigator.navigationOptions = ({navigation}) => {
    let drawerLockMode = 'unlocked';
    if (navigation.state.index > 0) {
        drawerLockMode = 'locked-closed';
    }

    return {
        drawerLockMode,
    };
};

export default AnimationStudyNavigator;

