
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAq5luMoe1WlUmmzaUmgWqe8L0q2tCygEg",
    authDomain: "mychat-e8eab.firebaseapp.com",
    projectId: "mychat-e8eab",
    storageBucket: "mychat-e8eab.firebasestorage.app",
    messagingSenderId: "1083133973215",
    appId: "1:1083133973215:web:c2ae342767c6a1e4dd0f6a",
    measurementId: "G-Q26QCW1644"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);