'use strict';

app.controller("accueilCtrl",function($scope,regionService){
  
    var listRegion = regionService.listeRegion();
    listRegion.then(function(response){
        $scope.listeRegion = response.data.reponse;
    }).catch(console.error);
  
});