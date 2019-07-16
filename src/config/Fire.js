import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCwnD0s9z2Hc_AWjc0hmUkP8tWhL9znmB4",
  authDomain: "reactfirebaseauthtest.firebaseapp.com",
  databaseURL: "https://reactfirebaseauthtest.firebaseio.com",
  projectId: "reactfirebaseauthtest",
  storageBucket: "",
  messagingSenderId: "1086419734850",
  appId: "1:1086419734850:web:769da47bb73cef28"
};

const fire = firebase.initializeApp(config);
export default fire;
