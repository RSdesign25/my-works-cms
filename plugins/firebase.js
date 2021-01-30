import firebase from "firebase"

//firebaseを初期化するためのID
const config = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDERID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
}

//firebaseの初期化
if(!firebase.apps.length){
  firebase.initializeApp(config)
}

//他の場所から使えるようにする
export default firebase