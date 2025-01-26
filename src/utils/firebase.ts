import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "nexus-blog-28d81.firebaseapp.com",
  projectId: "nexus-blog-28d81",
  storageBucket: "nexus-blog-28d81.firebasestorage.app",
  messagingSenderId: "826029097371",
  appId: "1:826029097371:web:a0f46f585af2dbb340e13e",
  measurementId: "G-BF7S43LD90"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);