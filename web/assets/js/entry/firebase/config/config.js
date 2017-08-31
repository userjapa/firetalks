'use strict';

import firebase from 'firebase'

import auth from './keys/serviceAccountKey.json'

firebase.initializeApp(auth)

export default firebase.database().ref()