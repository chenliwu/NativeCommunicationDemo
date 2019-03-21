package com.nativecommunicationdemo;

import android.app.Service;
import android.content.Intent;
import android.os.IBinder;
import android.os.SystemClock;
import android.util.Log;

/**
 * 自定义服务器类<p>
 * 经过测试，使用startService()启动服务，方法调用顺序为onCreate()->onStartCommand()->onStart()
 *
 * @author chenliwu
 * @version 1.0.0
 * @date 2017-7-21 下午7:28:44
 */
public class MyService extends Service {

    private final String TAG = "MyService";

    boolean flag;

    int time;

    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    @Override
    @Deprecated
    public void onStart(Intent intent, int startId) {
        Log.d(TAG, "onStart");
        super.onStart(intent, startId);
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        Log.d(TAG, "onStartCommand");
        return super.onStartCommand(intent, flags, startId);
    }

    @Override
    public void onCreate() {
        super.onCreate();
        Log.d(TAG, "onCreate");
        flag = true;

        //启动一个线程
        new Thread(new Runnable() {

            @Override
            public void run() {
                while (flag) {
                    Intent intent = new Intent("com.clw.testservice.MyService.time");
                    intent.putExtra("time", time);
                    sendBroadcast(intent);
                    time++;
                    //系统休眠1s
                    SystemClock.sleep(1000);
                    Log.i(TAG, time + "");
                }
            }
        }).start();
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        Log.d(TAG, "onDestroy");
        flag = false;
    }

}
