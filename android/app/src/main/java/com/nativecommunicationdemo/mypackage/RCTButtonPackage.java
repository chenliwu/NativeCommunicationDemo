package com.nativecommunicationdemo.mypackage;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.nativecommunicationdemo.customview.RCTButtonManager;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;


public class RCTButtonPackage implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }

    /**
     * 在Java中的最后一步就是把视图控制器注册到应用中。
     * 我们需要创建MyReactPackage类实现ReactPackage接口,然后在createNativeModules方法中添加自己封装的UI组件。
     * 如果UI组件没有被注册，它也无法在JS中被访问到。
     *
     * @param reactContext
     * @return
     */
    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Arrays.<ViewManager>asList(
                new RCTButtonManager()
        );
    }
}
