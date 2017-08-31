'use strict';

export default function talkCtrl(TalkServ, $scope) {
    
    $scope.talk = TalkServ.talk
    
    $scope.message = {
        user: TalkServ.getUser()
    }
    
    $scope.send = (message) => {
        TalkServ.add(message)
        $scope.message.text = ''
    }
    
    $scope.verify = (message) => {
        if (message.user === $scope.message.user)
            return 'right right-align'
        else
            return 'left left-align'
    }   
    
    $scope.logout = () => {
        TalkServ.removeUser()
    }
    
    /*function scroll() {
        var aux = document.getElementById('talk')
        aux.scrollTop = aux.scrollHeight    
    }*/
    
    $scope.$watch('talk', function(newVal, oldVal) {
        var aux = document.getElementById('talk')
        aux.scrollTop = aux.scrollHeight    
    }, true);
        
}