'use strict';
     
app.factory('regionService', function($http){
    return{
        listeRegion: function(){
            var list = $http.get("https://projet-signalement-incident.herokuapp.com/regions");
            return list;
        },
        creationRegion : function(region){
            console.log(region)
            $http.post("https://projet-signalement-incident.herokuapp.com/regions",region)
                .then(function(reponse){
                    console.log(reponse)
                })
        }
    }
});