import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCikQfKPVVUmtia01cOAGsN32v6kNc9Zlk",
  authDomain: "web-projecte-vue.firebaseapp.com",
  projectId: "web-projecte-vue",
  storageBucket: "web-projecte-vue.firebasestorage.app",
  messagingSenderId: "206821374731",
  appId: "1:206821374731:web:e08ed8f28e5675d400400e"
};


const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)