import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNM4CIDAYC9TQhSc0WoJzwQS-f8AWQb9U",
  authDomain: "gin-shelby-coder.firebaseapp.com",
  projectId: "gin-shelby-coder",
  storageBucket: "gin-shelby-coder.appspot.com",
  messagingSenderId: "1052804368793",
  appId: "1:1052804368793:web:18a02deebe77a046f46b08"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


