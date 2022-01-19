'use strict';

app.controller("affectationStatusCtrl",function($scope,$http,affectionStatusService,informationService){

    var listeStatus = informationService.listeStatus();
    listeStatus.then(function(response){
        $scope.listeStatus = response.data.reponse;
    }).catch(console.error);

    var listeSignalement = affectionStatusService.signalementSansStatus();
    listeSignalement.then(function(response){
        var listesignalementSansStatus = response.data.reponse;
        listesignalementSansStatus.forEach(element => {
            $http.get("https://projet-signalement-incident.herokuapp.com/regions/"+element.idregion)
                .then(function(region){
                    element.region = region.data.reponse.libelle;
                });
        });
        //console.log(listesignalementSansStatus);
        $scope.signalementSansStatus = listesignalementSansStatus;
        
    }).catch(console.error);

    $scope.modifierStatus = function(signalement){
        console.log("status : "+$scope.status)
        console.log(signalement)
        Reflect.deleteProperty(signalement,"region")
        affectionStatusService.affecterStatusSignalement(signalement,$scope.status)
    }
    $scope.changeValue = function(value){
        $scope.status = value
    }
})