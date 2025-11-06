// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAlIhQyJs_NztxImACYH6p1pFohp-rHwwA',
  authDomain: 'my-portofolio-63497.firebaseapp.com',
  projectId: 'my-portofolio-63497',
  storageBucket: 'my-portofolio-63497.firebasestorage.app',
  messagingSenderId: '938872717107',
  appId: '1:938872717107:web:b6ddafbfab9d73af69c846',
  measurementId: 'G-V6B20828N0',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
