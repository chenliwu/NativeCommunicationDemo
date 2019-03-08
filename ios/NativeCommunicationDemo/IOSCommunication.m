//
//  Communication.m
//  NativeCommunicationDemo
//
//  Created by bytter on 2019/3/8.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "IOSCommunication.h"

@implementation IOSCommunication

//为了实现RCTBridgeModule协议，你的类需要包含RCT_EXPORT_MODULE()宏。
RCT_EXPORT_MODULE();

//到处一个名称为prsentViewControllerFromReactNative的方法给React Native使用。
RCT_EXPORT_METHOD(prsentViewControllerFromReactNative:(NSString*)params){
  NSLog(@"React Native传递的参数：%@",params);
}

@end
