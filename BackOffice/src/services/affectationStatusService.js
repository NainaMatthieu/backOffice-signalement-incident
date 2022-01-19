'use strict';
     
app.factory('affectionStatusService', function($http){
    return{
        signalementSansStatus: function(){
            var list = $http.get("https://projet-signalement-incident.herokuapp.com/signalements/sansStatus");
            return list;
        },
        affecterStatusSignalement : function(signalement,status){
            signalement.status = status;
            $http.put("https://projet-signalement-incident.herokuapp.com/signalements",signalement)
            .then(function(response){
                console.log(response.data.reponse);
            })
        }        
    }
});