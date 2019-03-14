package com.nativecommunicationdemo.mymodule;

import android.app.Activity;
import android.content.Intent;
import android.support.annotation.Nullable;
import android.util.Log;

import com.facebook.react.bridge.JSApplicationIllegalArgumentException;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.nativecommunicationdemo.CommunicationActivity;

public class CommunicationModule extends ReactContextBaseJavaModule {

    private final static String TAG = "COMMUNICATION";

    public static ReactApplicationContext mReactContext;

    public CommunicationModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.mReactContext = reactContext;
    }


    /**
     * ReactContextBaseJavaModule要求派生类实现getName方法。
     * 这个函数用于返回一个字符串名字，这个名字在 JavaScript 端标记这个模块。
     * 这里我们把这个模块叫做Communication，这样就可以在 JavaScript 中通过NativeModules.Communication访问到这个模块。
     *
     * @return
     */
    @Override
    public String getName() {
        return "CommunicationModule";
    }

    /**
     * 要导出一个方法给 JavaScript 使用，Java 方法需要使用注解@ReactMethod。
     * 方法的返回类型必须为void。
     * React Native 的跨语言访问是异步进行的，所以想要给 JavaScript 返回一个值的唯一办法是使用回调函数或者发送事件（参见下文的描述）。
     *
     * @param params
     */
    @ReactMethod
    public void startActivityFromReactNative(String params) {
        try {
            Activity currentActivity = getCurrentActivity();
            if (currentActivity != null) {
                Intent intent = new Intent(currentActivity, CommunicationActivity.class);
                intent.putExtra("params", params);
                currentActivity.startActivity(intent);
            }
        } catch (Exception e) {

            throw new JSApplicationIllegalArgumentException("打开Activity失败：" + e.getMessage());
        }
    }

    @ReactMethod
    public void closeActivity() {
        Log.d(TAG, "closeActivity");
        ////无法关闭打开的CommunicationActivity
        //Activity currentActivity = getCurrentActivity();
        //currentActivity.finish();


        ///这种方式就可以关闭当前打开的CommunicationActivity
        if (CommunicationActivity.mCommunicationActivity != null) {
            CommunicationActivity.mCommunicationActivity.finish();
        }
    }


}
