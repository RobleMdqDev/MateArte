import firebase from 'firebase/app'
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBu4rqKUaECyyOc7h_MQPF3VfrgsU1Ec4g",
    authDomain: "robledo-885d9.firebaseapp.com",
    projectId: "robledo-885d9",
    storageBucket: "robledo-885d9.appspot.com",
    messagingSenderId: "1051909314301",
    appId: "1:1051909314301:web:bf5d722839d134a0319094"
})

export function getFirebase() {
    return app
} 

export function getFirestore(){
    return firebase.firestore(app)
} 
