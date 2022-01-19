'use strict';
app.factory('statistiqueService', function($http){
    return{
        statListType: function(listType){
            var retour = [];
            var index = 0;
            listType.then(function(response){
                var type = response.data.reponse;
                type.forEach(element => {
                    var stat = $http.get("https://projet-signalement-incident.herokuapp.com/statistique/SignalementResolu/"+element.type);
                    stat.then(function(response){
                        var statistique  = response.data.reponse;
                        statistique.index = index;
                        retour.push(statistique);
                        // console.log(statistique);
                        index+=1;
                    });
                
                });
            });
            return retour;
        }
    }
});