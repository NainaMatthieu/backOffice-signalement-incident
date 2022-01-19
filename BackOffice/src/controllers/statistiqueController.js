'use strict';
// var listParType = [
//     {
//         index  : 1,
//         type : "Accident",
//         valeur : 20
//     },
//     {
//         index : 2,
//         type : "route abimée",
//         valeur : 80
//     },
//     {
//         index :3,
//         type : "ordures",
//         valeur : 100
//     },
// ]

app.controller("statistiqueCtrl",function($scope,statistiqueService,informationService){
    var listeType = informationService.listeType();
    var listParType = statistiqueService.statListType(listeType);
    $scope.listParType = listParType;
})