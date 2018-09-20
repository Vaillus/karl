package com.example.karl.karl;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.drawable.Drawable;
import android.media.Image;
import android.net.Uri;
import android.os.AsyncTask;
import android.os.Bundle;
import android.provider.MediaStore;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.ProgressBar;
import android.widget.TextView;

import com.google.android.gms.auth.api.signin.GoogleSignIn;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.auth.api.signin.GoogleSignInClient;
import com.google.android.gms.auth.api.signin.GoogleSignInOptions;



import de.hdodenhof.circleimageview.CircleImageView;

/**
 * Created by Edouard on 19/09/2018.
 */

@SuppressLint("Registered")
public class Welcome_Page extends AppCompatActivity{


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home_page);
        ProgressBar spinner;

        spinner = (ProgressBar) findViewById(R.id.progressBar1);
        spinner.setVisibility(View.VISIBLE);

        Button buttonquiz = findViewById(R.id.boutonquizz);
        buttonquiz.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent myIntent = new Intent(Welcome_Page.this, QuizStart.class);
                startActivity(myIntent);
            }
        });

        // Example of a call to a native method
        TextView tv = (TextView) findViewById(R.id.persons_name);
        TextView tv2 = (TextView) findViewById(R.id.invitation);

        GoogleSignInAccount acct = GoogleSignIn.getLastSignedInAccount(getApplicationContext());
        if (acct != null) {
            String personName = acct.getDisplayName();
            String personGivenName = acct.getGivenName();
            String personFamilyName = acct.getFamilyName();
            String personEmail = acct.getEmail();
            String personId = acct.getId();
            String personPhoto = acct.getPhotoUrl().toString();
            CircleImageView imageView = findViewById(R.id.persons_face);

            tv.setText("Bonjour " + personGivenName);
            tv2.setText("Nous allons commencer par un petit quizz pour que j'apprenne à mieux te connaitre." +
                    " Indique moi si les tenues te plaisent");

            new DownloadImageFromInternet(imageView,spinner)
                    .execute(personPhoto);
        }

    }

    private void updateUI(GoogleSignInAccount account) {
    }

}
