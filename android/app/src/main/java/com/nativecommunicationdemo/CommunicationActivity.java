package com.nativecommunicationdemo;

import android.content.Intent;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.nativecommunicationdemo.mymodule.CommunicationModule;

public class CommunicationActivity extends AppCompatActivity {

    public static CommunicationActivity mCommunicationActivity;

    private Button mBtnClose;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_communication);

        mCommunicationActivity = this;

        Intent intent = getIntent();
        if (intent != null) {
            String params = intent.getStringExtra("params");
            if (params != null) {
                Toast.makeText(this, "从React Native传递来的参数：" + params, Toast.LENGTH_LONG).show();
            }
        }

        mBtnClose = (Button) findViewById(R.id.btn_close);

        mBtnClose.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                sendEventToReactNative(CommunicationModule.mReactContext, "onCloseActivity", null);
            }
        });


    }


    /**
     * 原生模块可以在没有被调用的情况下往 JavaScript 发送事件通知。
     * 最简单的办法就是通过RCTDeviceEventEmitter，这可以通过ReactContext来获得对应的引用，像这样：
     *
     * @param reactContext
     * @param eventName
     * @param params
     */
    private void sendEventToReactNative(ReactContext reactContext,
                                        String eventName,
                                        @Nullable WritableMap params) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }

}
