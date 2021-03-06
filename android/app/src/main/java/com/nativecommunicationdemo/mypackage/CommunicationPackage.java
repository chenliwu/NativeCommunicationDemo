package com.nativecommunicationdemo.mypackage;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.nativecommunicationdemo.camera.ImagePickerModule;
import com.nativecommunicationdemo.dialog.MyDialogModule;
import com.nativecommunicationdemo.mymodule.CommunicationModule;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * 2019-02-13
 * chenlw
 * work：将Communication模块导出供React Native接口调用
 */
public class CommunicationPackage implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> moduleList = new ArrayList<>();
        moduleList.add(new CommunicationModule(reactContext));
        moduleList.add(new MyDialogModule(reactContext));
        moduleList.add(new ImagePickerModule(reactContext));
        return moduleList;
    }


    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
