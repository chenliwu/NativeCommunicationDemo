//
//  IOSFaceDetectionViewController.h
//  NativeCommunicationDemo
//  IOS原生人脸识别页面
//
//  Created by bytter on 2019/3/20.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>

#define TYPE_FACE_LOGIN 100       //人脸登录操作标识
#define TYPE_FACE_COLLECTION 200  //人脸采集操作标识

NS_ASSUME_NONNULL_BEGIN

@interface IOSFaceDetectionViewController : UIViewController

//在这里定义React Native传递过来的参数对象
@property int type;


@end

NS_ASSUME_NONNULL_END
