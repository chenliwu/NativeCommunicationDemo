package com.nativecommunicationdemo;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.View;
import android.widget.Button;

public class TestFaceDetectionActivity extends Activity {


    private Button mBtnBackRn;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_face_detection);

        mBtnBackRn = (Button) findViewById(R.id.btn_backRn);

        mBtnBackRn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //返回RN页面
                Intent intent = new Intent(TestFaceDetectionActivity.this, RNActivity.class);
                startActivity(intent);
            }
        });

    }
}
