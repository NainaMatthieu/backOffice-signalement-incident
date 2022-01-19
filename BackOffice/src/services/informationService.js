// liste status, type
'use strict';
     
app.factory('informationService', function($http){
    return{
        listeStatus: function(){
            var list = $http.get("https://projet-signalement-incident.herokuapp.com/status");
            return list;
        },
        listeType : function(){
            var list = $http.get("https://projet-signalement-incident.herokuapp.com/types");
            return list;
        }
    }
});