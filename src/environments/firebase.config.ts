import {AuthMethods, AuthProviders} from "angularfire2";

export const firebaseConfig = {
  apiKey: "AIzaSyCRcJHrBSjYwdD9h6L67ut3-Nzwk64a82w",
    authDomain: "pcccoop-d81c0.firebaseapp.com",
    databaseURL: "https://pcccoop-d81c0.firebaseio.com",
    storageBucket: "pcccoop-d81c0.appspot.com",
    messagingSenderId: "361725045743"
};

export const authConfig = {
    provider: AuthProviders.Google,
    method: AuthMethods.Popup
};
