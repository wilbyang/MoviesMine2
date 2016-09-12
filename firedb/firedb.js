
import * as firebase from "firebase";

export default class Firebase {

  /**
   * Initialises Firebase
   */
  static initialise() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBfmwgeFFgbhklTh8eRWK9xlwa0gpcaqVY",
      authDomain: "friendlychat-57c11.firebaseapp.com",
      databaseURL: "https://friendlychat-57c11.firebaseio.com",
      storageBucket: "friendlychat-57c11.appspot.com",
    };
    firebase.initializeApp(config);
  }

}
