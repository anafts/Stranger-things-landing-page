
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAQcjAQGkE6IILcxk7gqnLkaz_SpAETgVY",
    authDomain: "dd-subscription.firebaseapp.com",
    projectId: "dd-subscription",
    storageBucket: "dd-subscription.appspot.com",
    messagingSenderId: "590507187152",
    appId: "1:590507187152:web:bb007fe337f5d229c077d5"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default app;
