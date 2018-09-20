package com.example.karl.karl;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class QuizStart extends AppCompatActivity implements View.OnClickListener {

    // Used to load the 'native-lib' library on application startup.

    private View Button;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_quiz_start);

        // Example of a call to a native method
        TextView tv = (TextView) findViewById(R.id.sample_text);
        tv.setText("lalala");
        String str = "toto";
        Button = findViewById(R.id.sample_button);
        Button.setOnClickListener(this);
    }



    /**
     * A native method that is implemented by the 'native-lib' native library,
     * which is packaged with this application.
     */
    public native String stringFromJNI();

    @Override
    public void onClick(View v) {
        Intent myIntent = new Intent(QuizStart.this, Home_Page.class);
        startActivity(myIntent);

    }

}
