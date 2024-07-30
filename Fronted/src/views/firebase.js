import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBzPkpoZNYeYUU2zc2vJ-P4QrPF_vqKiLU",
    authDomain: "plagiarism-detection-20c12.firebaseapp.com",
    projectId: "plagiarism-detection-20c12",
    storageBucket: "plagiarism-detection-20c12.appspot.com",
    messagingSenderId: "441497827187",
    appId: "1:441497827187:web:42d2151cc7b773d3cf3706"  
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// google auth signin
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);

    const user = res.user;
    localStorage.setItem("profilePic", user.photoURL);
    localStorage.setItem("Email", user.email);
    localStorage.setItem("Name",user.displayName)
    console.log(user.photoURL)
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
    sessionStorage.setItem("flag","true");
    window.location.replace('/home')

  } catch (err) {
    console.error(err);
    sessionStorage.setItem("flag","false");
    alert(err.message);
  }
};

const logout = () => {
  sessionStorage.setItem("flag","false");
  window.location.replace('/')
  signOut(auth);
};
export {
  auth,
  db,
  signInWithGoogle,
  logout,
};
