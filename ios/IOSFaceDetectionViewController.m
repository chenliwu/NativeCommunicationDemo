//
//  IOSFaceDetectionViewController.m
//  NativeCommunicationDemo

//
//  Created by bytter on 2019/3/20.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "IOSFaceDetectionViewController.h"

@interface IOSFaceDetectionViewController ()

@end

// IOS原生人脸识别页面
@implementation IOSFaceDetectionViewController

- (void)viewDidLoad {
    [super viewDidLoad];
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
    button.frame = CGRectMake(20, 60, 60, 80);
    [button setTitle:@"返回" forState:UIControlStateNormal];
    [button addTarget:self action:@selector(closeAction) forControlEvents:UIControlEventTouchUpInside];
    //添加按钮组件到页面当中
    [self.view addSubview:button];
    
}

- (void)viewDidAppear:(BOOL)animated{
    //[super viewDidAppear:animated];
    
    UIAlertController *alertController = [UIAlertController alertControllerWithTitle:@"操作类型标识：" message:[NSString stringWithFormat:@"%d",self.type] preferredStyle:UIAlertControllerStyleAlert];
    
    UIAlertAction *cancelAction = [UIAlertAction actionWithTitle:@"取消" style:UIAlertActionStyleCancel handler:nil];
    [alertController addAction:cancelAction];
    //弹出对话框
    [self presentViewController:alertController animated:YES completion:nil];
}

- (void)closeAction {
    //关闭页面
    [self dismissViewControllerAnimated:YES completion:nil];
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
