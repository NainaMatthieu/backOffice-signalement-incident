'use strict';

app.controller("creationRegionCtrl",function($scope,regionService){
  
        
    $scope.creerRegion = function(region){
        regionService.creationRegion(region);
    }
});