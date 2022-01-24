'use strict';
     
app.controller('loginCtrl', function($scope, loginService){
    $scope.errorLogin = true;
 
    $scope.login = function(admin){
        console.log(admin)
        var isLog = loginService.login(admin, $scope);
        console.log(isLog+" est la reponse");

    }
 
    $scope.clearMsg = function(){
        $scope.errorLogin = false;
    }
});