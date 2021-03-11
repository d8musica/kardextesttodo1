import crypto from 'crypto'
import { v4 as uuidv4 } from 'uuid'
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"



// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";


/**
 * User methods. The example doesn't contain a DB, but for real applications you must use a
 * db here, such as MongoDB, Fauna, SQL, etc.
 */

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKp81Oh5lHlmRapJhd5vJ8HedKNw7Fjak",
  authDomain: "kardextodo1.firebaseapp.com",
  databaseURL: "https://kardextodo1-default-rtdb.firebaseio.com",
  projectId: "kardextodo1",
  storageBucket: "kardextodo1.appspot.com",
  messagingSenderId: "982853709926",
  appId: "1:982853709926:web:747d1a2d854261cb90bda7",
  measurementId: "G-6T0VRE4RQC"
};



// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}

var db = firebase.firestore();

const users = []
let userExists;

export async function createUser({ username, password }) {
  // Here you should create the user and save the salt and hashed password (some dbs may have
  // authentication methods that will do it for you so you don't have to worry about it):
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex')
  const user = {
    id: uuidv4(),
    createdAt: Date.now(),
    username,
    hash,
    salt,
  }

  // This is an in memory store for users, there is no data persistence without a proper DB
  users.push(user)

  db.collection("users").add({
    id: user.id,
    createdAt: user.createdAt,
    username:user.username,
    hash:user.hash,
    salt:user.salt
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});
  

  return { username, createdAt: Date.now() }
}

// Here you should lookup for the user in your DB
export async function findUser({ username }) {
  // This is an in memory store for users, there is no data persistence without a proper DB
  

  db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
       if (doc.data().username === username) {
         
        users.push(doc.data())
        
         
         return users.find((users)=>users.username === username)

         
        } else {
          return null;
        }
         
    });

    
});

  
}

// Compare the password of an already fetched user (using `findUser`) and compare the
// password for a potential match
export function validatePassword(userExists, inputPassword) {
  console.log(inputHash)
  if (userExists){
    console.log(inputHash)
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, userExists.salt, 1000, 64, 'sha512')
    .toString('hex')
  const passwordsMatch = userExists.hash === inputHash
  return passwordsMatch}
}
