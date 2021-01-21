import firebase from "firebase"

//firebaseを初期化するためのID
const config = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  // apiKey: "api-key",
  // authDomain: "project-id.firebaseapp.com",
  // databaseURL: "https://project-id.firebaseio.com",
  // storageBucket: "project-id.appspot.com",
  // messagingSenderId: "sender-id",
  // appID: "app-id",
}

//firebaseの初期化
if(!firebase.apps.length){
  firebase.initializeApp(config)
}

//他の場所から使えるようにする
export default firebase