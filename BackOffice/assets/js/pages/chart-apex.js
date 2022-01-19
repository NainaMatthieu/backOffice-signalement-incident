'use strict';
var stat =[];
// var listMois =['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Dec'];
// var statMois=[];
var card1 =  document.querySelector("#line-chart-1");
var card2 = document.querySelector("#radialBar-chart-1");
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
var listParType =[];
var listParTypeCouleur =[];
var label = [];
var listCouleur = [];
var listeType = [];
var index =0;
$.ajax({
    headers: { "Accept": "application/json"},
    type: 'GET',
    url: 'https://projet-signalement-incident.herokuapp.com/types',
    crossDomain: true,
    beforeSend: function(xhr){
        xhr.withCredentials = true;
},
    success: function(data, textStatus, request){
        data.reponse.forEach(element => {
            listeType.push(element);
            // console.log(element);
        });
        listeType.forEach( value=>{
            console.log("aiza")
            $.ajax({
                headers: { "Accept": "application/json"},
                type: 'GET',
                url: 'https://projet-signalement-incident.herokuapp.com/statistique/SignalementResolu/'+value.type,
                crossDomain: true,
                beforeSend: function(xhr){
                    xhr.withCredentials = true;
            },
                success: function(donnee, textStatus, request){
                    var statistique = donnee.reponse;
                    statistique.index = index;
                    listParType.push(statistique);
                    index+=1;
                }
            });
            $.ajax({
                headers: { "Accept": "application/json"},
                type: 'GET',
                url: 'https://projet-signalement-incident.herokuapp.com/statistique/nombreSignalement/'+value.type,
                crossDomain: true,
                beforeSend: function(xhr){
                    xhr.withCredentials = true;
                },
                success: function(donnee, textStatus, request){
                    var d = donnee.reponse;
                    console.log(d)
                    listParTypeCouleur.push(d.valeur);
                    listCouleur.push(d.couleur);
                    label.push(d.type)

                }
            });  
        });
    }
});
// vue globale

        

// console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
// console.log(listParType)
// console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")


// console.log("*************************");
// console.log(listParType);
// console.log("************************")
var color = ["#f60000","#0068f6","#10ef39"];

$(document).ready(function() {
    
    setTimeout(function() {
            $.ajax({
                headers: { "Accept": "application/json"},
                type: 'GET',
                url: 'https://projet-signalement-incident.herokuapp.com/statistique/SignalementParMois/2021',
                crossDomain: true,
                beforeSend: function(xhr){
                    xhr.withCredentials = true;
                },
                success: function(data, textStatus, request){
                    data.reponse.forEach(element => {
                        stat.push(element.valeur);
                        // statMois.push(listMois[element.mois-1]);    
                    });
                }
            });
        if(card1!==null){
            $(function() {
                console.log("-------------------------------------");
                console.log(stat)
                console.log("-------------------------------------");
                // console.log(statMois)
                var options = {
                    chart: {
                        height: 300,
                        type: 'line',
                        zoom: {
                            enabled: false
                        }
                    },
                    dataLabels: {
                        enabled: false,
                        width: 2,
                    },
                    stroke: {
                        curve: 'straight',
                    },
                    colors: ["#4680ff"],
                    series: [{
                        name: " ",
                        data: stat
                    }],
                    title: {
                        text: 'Signalement par Mois',
                        align: 'left'
                    },
                    grid: {
                        row: {
                            colors: ['#f3f6ff', 'transparent'], // takes an array which will be repeated on columns
                            opacity: 0.5
                        },
                    },
                    xaxis: {
                        categories:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Dec'],
                    }
                }
    
                var chart = new ApexCharts(
                    document.querySelector("#line-chart-1"),
                    options
                );
                chart.render();
            });
        }
        
        
        // ity ilay signalement resolu
        listParType.forEach(statut =>{
            var card2 =  document.querySelector("#resolu"+statut.index);
         
            console.log(statut.valeur)
            if(statut.valeur<=25){
                console.log("1")
              var couleur = color[1]  
            }else if(statut.valeur>25 && statut.valeur<=75){
                console.log("2")
                var couleur = color[2]
            }else if(statut.valeur>75){
                console.log("0")
                var couleur = color[0]
            }
        
            
            console.log("la couleur est : "+couleur)
            if(card2!==null){
                $(function() {
                var options = {
                    chart: {
                        height: 350,
                        type: 'radialBar',
                    },
                    plotOptions: {
                        radialBar: {
                            hollow: {
                                size: '70%',
                            }
                        },
                    },
                    colors: [couleur],
                    series: [statut.valeur],
                    labels: [statut.type],
                }
                var chart = new ApexCharts(
                    document.querySelector("#resolu"+statut.index),
                    options
                );
                chart.render();
            });
            }
        
        })
        // vue d'ensemble  
        $(function() {
            var options = {
                chart: {
                    height: 320,
                    type: 'pie',
                },
                labels: label,
                series: listParTypeCouleur,
                colors: listCouleur,
                legend: {
                    show: true,
                    position: 'bottom',
                },
                dataLabels: {
                    enabled: true,
                    dropShadow: {
                        enabled: false,
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            }
            var chart = new ApexCharts(
                document.querySelector("#pie-chart-1"),
                options
            );
            chart.render();
        });
    }, 1500);
});
