//
//  IOSDeviceInfo.h
//  NativeCommunicationDemo
//
//  Created by bytter on 2019/3/11.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

NS_ASSUME_NONNULL_BEGIN

//RCTBridgeModule是react-native平台为开发者提供的与IOS原生平台通信的桥接接口。
@interface IOSDeviceInfo : NSObject<RCTBridgeModule>

@end

NS_ASSUME_NONNULL_END
