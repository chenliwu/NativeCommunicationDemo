//
//  IOSDeviceInfo.m
//  NativeCommunicationDemo
//
//  Created by bytter on 2019/3/11.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "IOSDeviceInfo.h"


@implementation IOSDeviceInfo

//为了实现RCTBridgeModule协议，你的类需要包含RCT_EXPORT_MODULE()宏。
RCT_EXPORT_MODULE();

- (NSDictionary *)constantsToExport{
  //返回一个键值对
  return @{
           @"systemName":@"IOS",
           @"systemVersion":@"12.0",
           @"deviceLocale":@"english",
           @"appVersion":@"1.0.0"
           };
  
}

@end
