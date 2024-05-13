import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDThzvpV1cFXIaS_p6yewTi2EHbIMneaek",
  authDomain: "social-media-clone-57ad7.firebaseapp.com",
  projectId: "social-media-clone-57ad7",
  storageBucket: "social-media-clone-57ad7.appspot.com",
  messagingSenderId: "1027031638111",
  appId: "1:1027031638111:web:01802119f22829d081bbea",
  measurementId: "G-WFDEN8LJ52"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, analytics, auth,firestore, storage};
