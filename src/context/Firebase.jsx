import { createContext, useContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, addDoc  } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Import Required Firebase Utility

const firebaseConfig = {
  apiKey: "AIzaSyAKSWHb3v8UYOdl9ijIDpSU4io-kWIrSFo",
  authDomain: "genesis-mep.firebaseapp.com",
  projectId: "genesis-mep",
  storageBucket: "genesis-mep.appspot.com",
  messagingSenderId: "1063733452370",
  appId: "1:1063733452370:web:36b9165985db0278e8c98b",
  measurementId: "G-0287F5CECF"
};

const FirebaseContext = createContext(null);
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
// Create an instance of the imported firebase utility

const db = getFirestore(firebaseApp);


export const useFirebase = () => {
  return useContext(FirebaseContext);
};

export const FirebaseProvider = (props) => {


  // Create the required function for using the internal functions of the utility imported

  

  

  const addDocument = async ( data) => {
    try {
      console.log(data)
      await addDoc(collection(db, "data"), data);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };




  return (
    <FirebaseContext.Provider
      value={{
        // Pass the functions created to be used globally

   
        addDocument,
    
     
    
    
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};