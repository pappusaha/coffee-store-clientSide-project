// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx_6BzLLHo0NukxE_lPcoIoL8j2hvsOHI",
  authDomain: "coffee-store-35567.firebaseapp.com",
  projectId: "coffee-store-35567",
  storageBucket: "coffee-store-35567.firebasestorage.app",
  messagingSenderId: "534895372998",
  appId: "1:534895372998:web:ec79880a5f9359a5e985c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app