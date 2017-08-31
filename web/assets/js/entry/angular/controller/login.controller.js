'use strict';

export default function loginCtrl(LoginServ, $scope) {
    $scope.user = ''
    
    $scope.login = (user) => {
        LoginServ.setUser(user)
    }
}