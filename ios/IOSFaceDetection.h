//
//  IOSFaceDetection.h
//  NativeCommunicationDemo

//
//  Created by bytter on 2019/3/20.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

NS_ASSUME_NONNULL_BEGIN

// IOS原生端和RN端通信的接口
// 继承RCTEventEmitter，原生模块也可以给 JavaScript 发送事件通知。
// 最好的方法是继承RCTEventEmitter，实现suppportEvents方法并调用self sendEventWithName:
@interface IOSFaceDetection : RCTEventEmitter<RCTBridgeModule>

@end

NS_ASSUME_NONNULL_END
