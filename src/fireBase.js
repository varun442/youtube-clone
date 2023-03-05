import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBqp-HWS1Pv4-HH0Q9gZPTBGcxaTN_fk20",
  authDomain: "yt-clone-3d6bb.firebaseapp.com",
  projectId: "yt-clone-3d6bb",
  storageBucket: "yt-clone-3d6bb.appspot.com",
  messagingSenderId: "723377617235",
  appId: "1:723377617235:web:6fa7e09ff2ed65ce1749a6",
  measurementId: "G-ZLD2HK0XCG",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
export default auth;
// connected firebase to our react app using .initializeApp() which creates a firebase instance
