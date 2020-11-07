import firebase from 'firebase/app'
import 'firebase/firestore'
import config from './firebase-config'

// firebase initialize
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()

// firebase collections
const educationCollection = db.collection('education')

export {
    db,
    educationCollection
}