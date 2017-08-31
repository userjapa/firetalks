'use strict';

export default function run($cookies ,$state, $timeout) {
    const aux = $cookies.get('user')
    console.log(aux)
    $timeout(function() {
        if (typeof aux === 'string')
            $state.go('talk', {user : aux})
    });
}