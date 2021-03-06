"use strict";
//@ts-check
import * as firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
 export const database = firebase.database();
 export const firebaseVersion = firebase.SDK_VERSION
