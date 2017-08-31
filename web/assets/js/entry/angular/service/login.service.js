'use strict';

export default function loginService($cookies, $state ) {

    this.setUser = (user) => {
        $cookies.put('user', user)
        $state.go('talk', {user: user})
    }
    
    return this   
}