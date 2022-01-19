'use strict';
     
app.factory('affectionRegionService', function($http){
    return{
        signalementSansRegion: function(){
            var list = $http.get("https://projet-signalement-incident.herokuapp.com/signalements/sansRegion");
            return list;
        },
        affecterRegion : function(signalement){
            $http.put("https://projet-signalement-incident.herokuapp.com/signalements",signalement)
                .then(function(response){
                    console.log(response.data.reponse);
                })
        }
    }
});