import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7PSc8EvgjU1BOTu8-r7il_OkL_VL50Tk",
  authDomain: "softwaredesign-2c0e3.firebaseapp.com",
  projectId: "softwaredesign-2c0e3",
  storageBucket: "softwaredesign-2c0e3.appspot.com",
  messagingSenderId: "257766098487",
  appId: "1:257766098487:web:fdccebdaf6af6ee27d61b2",
  measurementId: "G-WBN01VXVQ5"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
