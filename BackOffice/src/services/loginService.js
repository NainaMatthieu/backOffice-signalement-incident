'use strict';
     
app.factory('loginService', function($http, $location, sessionService){
    return{
        login: function(admin, $scope){
            var validate = $http.get("https://projet-signalement-incident.herokuapp.com/admin/"+admin.login+"/"+admin.password);
            validate.then(function(response){
                var user = response.data.reponse;
                console.log(user);
                if(user){
                    $scope.errorLogin = false;
                    sessionService.set('admin',user.id);
                    localStorage.userId = user.id
                    localStorage.user = user.name
                    window.location.replace("https://projet-signalement-incident.herokuapp.com/BackOffice/#/home");
                }
 
                else{
                    $scope.successLogin = false;
                    $scope.errorLogin = true;
                    $scope.errorMsg = response.data.message;
                    window.location.replace("https://projet-signalement-incident.herokuapp.com/BackOffice/login.html");
                }
            });
            console.log($scope.errorLogin)
        },
        logout: function(){
            sessionService.destroy('admin');
            $location.path('/');
        },
        islogged: function(){
            var checkSession =false;
            if(localStorage.userId) checkSession = true;
            return checkSession;
        }
    }
});