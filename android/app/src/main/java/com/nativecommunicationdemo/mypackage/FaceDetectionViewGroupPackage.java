package com.nativecommunicationdemo.mypackage;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.nativecommunicationdemo.camera.ImagePickerModule;
import com.nativecommunicationdemo.dialog.MyDialogModule;
import com.nativecommunicationdemo.facedetection.FaceDetectionViewGroupManager;
import com.nativecommunicationdemo.mymodule.CommunicationModule;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;


public class FaceDetectionViewGroupPackage implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }


    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        List<ViewManager> viewManagerList = new ArrayList<>();
        viewManagerList.add(new FaceDetectionViewGroupManager());
        return viewManagerList;
    }
}
