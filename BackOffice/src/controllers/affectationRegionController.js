'use strict';

app.controller("affectationRegionCtrl",function($scope,affectionRegionService,regionService){
    
    var listSignalement  = affectionRegionService.signalementSansRegion();
    listSignalement.then(function(response){
        $scope.listeSignalementSansRegion = response.data.reponse;

    }).catch(console.error);

    var listRegion = regionService.listeRegion();
    listRegion.then(function(response){
        $scope.listeRegion = response.data.reponse;
    }).catch(console.error);
    
    $scope.affecter = function(signalement){
        console.log("Fonction affectée region");
        console.log(signalement);
        console.log("------");
        console.log(" id region : "+$scope.region);
        signalement.idregion = $scope.region ;
        affectionRegionService.affecterRegion(signalement);
    }

    $scope.changeValue =function(value){
        $scope.region = value;
    }
});