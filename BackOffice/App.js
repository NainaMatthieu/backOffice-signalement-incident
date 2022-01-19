'use strict';

var app = angular.module("backOfficeApp",['ngRoute']);
console.log("variable local: "+localStorage.userId)
if(localStorage.userId!==undefined){
    app.config(function($routeProvider){
        $routeProvider
      
        .when('/home', {
            templateUrl: 'src/views/accueil.html',
            controller: 'accueilCtrl'
        })
        .when('/statistique', {
            templateUrl: 'src/views/statistique.html',
            controller: 'statistiqueCtrl'
        })
        .when('/affecterRegion', {
            templateUrl: 'src/views/affectationRegion.html',
            controller: 'affectationRegionCtrl'
        })
        .when('/affecterStatus', {
            templateUrl: 'src/views/affectationStatus.html',
            controller: 'affectationStatusCtrl'
        })
        .when('/creationRegion', {
            templateUrl: 'src/views/creationRegion.html',
            controller: 'creationRegionCtrl'
        })
        .when('/statistique', {
            templateUrl: 'src/views/statistique.html'
        })
        .otherwise({
            redirect: '/'
        });
    });
     
    app.run(function($rootScope, $location, loginService){
        //prevent going to homepage if not loggedin
        var routePermit = ['/home'];
        $rootScope.$on('$routeChangeStart', function(){
            if(routePermit.indexOf($location.path()) !=-1){
                var connected = loginService.islogged();
                    if(!connected){
                        $location.path('/');
                    }
            }
        });
        //prevent going back to login page if session is set
        var sessionStarted = ['/'];
        $rootScope.$on('$routeChangeStart', function(){
            if(sessionStarted.indexOf($location.path()) !=-1){
                var cantgoback = loginService.islogged();
                    if(cantgoback){
                        $location.path('/home');
                    }
    
            }
        });
    });
}
else{
    window.location.replace("http://127.0.0.1/BackOffice/login.html");
}