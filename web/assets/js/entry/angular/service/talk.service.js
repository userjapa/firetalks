'use strict';

import db from './../../firebase/config/config'
const data = db.child('talk')

export default function talkService($firebaseArray, $stateParams, $cookies, $state) {
    
    this.talk = $firebaseArray(data)
    
    this.add = (message) => {
        this.talk.$add(message)
    }   
    
    this.removeUser = () => {
        $cookies.remove('user')
        console.log($cookies.get('user'))
        $state.go('login')
    }
    
    this.getUser = () => {
        return $cookies.get('user')
    }
    
    return this
}