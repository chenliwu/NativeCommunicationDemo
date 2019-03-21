//
//  IOSFaceDetectionViewController.m
//  NativeCommunicationDemo

//
//  Created by bytter on 2019/3/20.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "IOSFaceDetectionViewController.h"
#import "IOSFaceDetection.h"

@interface IOSFaceDetectionViewController ()

@end

// IOS原生人脸识别页面
@implementation IOSFaceDetectionViewController

//viewDidLoad方法是我们最常用的方法的，类中成员对象和变量的初始化我们都会放在这个方法中，在类创建后，无论视图的展现或消失，这个方法也是只会在将要布局时调用一次。
- (void)viewDidLoad {
    [super viewDidLoad];
    NSLog(@"viewDidLoad");
    self.view.backgroundColor = UIColor.whiteColor;
    // Do any additional setup after loading the view.
    
    //创建一个文本组件
    UITextView *textView = [[UITextView alloc] initWithFrame:CGRectMake(20,20,200,60)];
    //设置文字
    textView.text = @"IOS原生人脸识别页面";
    //设置字体大小
    [textView setFont:[UIFont systemFontOfSize:20]];
    //添加文件组件到页面当中
    [self.view addSubview:textView];
    
    //创建一个按钮组件
    UIButton *button = [UIButton buttonWithType:UIButtonTypeSystem];
    button.frame = CGRectMake(20, 80, 60, 40);
    [button setTitle:@"返回" forState:UIControlStateNormal];
    [button addTarget:self action:@selector(closeAction) forControlEvents:UIControlEventTouchUpInside];
    //添加按钮组件到页面当中
    [self.view addSubview:button];
    
    
    //创建一个按钮组件
    UIButton *sendRNEventButton = [UIButton buttonWithType:UIButtonTypeSystem];
    sendRNEventButton.frame = CGRectMake(20, 150, 100, 40);
    [sendRNEventButton setTitle:@"回调RN事件" forState:UIControlStateNormal];
    [sendRNEventButton addTarget:self action:@selector(sendEventToReactNative) forControlEvents:UIControlEventTouchUpInside];
    //添加按钮组件到页面当中
    [self.view addSubview:sendRNEventButton];
    
}

- (void)viewDidAppear:(BOOL)animated{
    //[super viewDidAppear:animated];
    //    UIAlertController *alertController = [UIAlertController alertControllerWithTitle:@"操作类型标识：" message:[NSString stringWithFormat:@"%d",self.type] preferredStyle:UIAlertControllerStyleAlert];
    
    NSString *message = self.type == TYPE_FACE_LOGIN ? @"人脸登录":@"人脸采集";
    UIAlertController *alertController = [UIAlertController alertControllerWithTitle:@"操作类型标识：" message:message preferredStyle:UIAlertControllerStyleAlert];
    UIAlertAction *cancelAction = [UIAlertAction actionWithTitle:@"取消" style:UIAlertActionStyleCancel handler:nil];
    [alertController addAction:cancelAction];
    //弹出对话框
    [self presentViewController:alertController animated:YES completion:nil];
}

// viewWillDisappare   在视图变换时，当前视图在即将被移除、或者被覆盖时，会调用这个方法进行一些善后的处理和设置。
- (void)viewWillDisappear:(BOOL)animated{
    [self.faceDetection sendEventWithName:@"onCloseFaceDetection" body:@{}];
}

- (void)closeAction {
    //关闭页面
    [self dismissViewControllerAnimated:YES completion:nil];
}

// 发送事件到RN
- (void)sendEventToReactNative{
    // 不能通过实例化新的对象来发送事件到RN，这样会出错。
    //IOSFaceDetection *faceDetection = [IOSFaceDetection new];
    //[faceDetection sendEventWithName:@"onFaceLogin" body:@{@"faceBase64":@"人脸数据"}];
    
    if(self.type == TYPE_FACE_LOGIN){
        // 人脸登录回调
        [self.faceDetection sendEventWithName:@"onFaceLogin" body:@{@"faceBase64":@"人脸登录-人脸数据"}];
    }else if(self.type == TYPE_FACE_COLLECTION){
        [self.faceDetection sendEventWithName:@"onFaceCollection" body:@{@"faceBase64":@"人脸采集-人脸数据"}];
    }
}

/*
 #pragma mark - Navigation
 
 // In a storyboard-based application, you will often want to do a little preparation before navigation
 - (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
 // Get the new view controller using [segue destinationViewController].
 // Pass the selected object to the new view controller.
 }
 */

@end
