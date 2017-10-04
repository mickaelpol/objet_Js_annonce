
var idAnnonce = 1;
var Rubrique = [
   typeImobilier = {
       rubrique : "immobilier",
       t1 : "vente",
       t2 : "locattion",
       t3 : "colocation",
   },
   typeVacance = {
       rubrique : "vacance",
       t1 : "gite",
       t2 : "hotel",
       t3 : "camping",
   }
];
var immobilier = [];
var vacance = [];
var annonce =  function(choixType, nom, adresse){
   this.idAnnonce = idAnnonce,
   idAnnonce++,
   this.type = choixType,
   this.nom = nom,
   this.adresse = adresse;}
immobilier.push(new annonce( typeImobilier.t1, "test", "addr"));
immobilier.push(new annonce( typeImobilier.t2, "num2", "complement"));
vacance.push(new annonce( typeVacance.t1, "test", "addr"));
vacance.push(new annonce( typeVacance.t2, "num2", "complement"));

//fait apparaitre le modale
$("#ajout").click(function () {
   $('#myModal').modal('show')
   $('#rubrique').val(" ")
});
//liste les rubrique dans le modale
for (var i = 0; i < Rubrique.length; i++) {
   $('#rubrique').append("<option class='selection' value='" + i+ "'>" + Rubrique[i].rubrique + "</option>")    
}
//change le type en fonction de la categorie
$('#rubrique').change(function(){
   var recupChoix = $(this).val();
       var longChoix = Object.keys(Rubrique[recupChoix]).length;
       $('#choixType').html("")
   for (var i = 1; i < longChoix ; i++) {
       var test = "t" + i
       $('#choixType').append("<option>" + Rubrique[recupChoix][test] + "</option>");
   }
});
$("#valider").click(function () {
       if ($('#rubrique').val() == 0){
       immobilier.push(new annonce($('#rubrique').val(), $('#choixType').val(), $('#nom').val(),$('#adresse').val() ));
       }
       else if ($('#rubrique').val() == 1){
           vacance.push(new annonce($('#rubrique').val(), $('#choixType').val(), $('#nom').val(),$('#adresse').val() ));
       }
});
$("#immobilier").click(function () {
   $("#afficher").html(" ")
   for (var i = 0; i < immobilier.length; i++) {
       $("#afficher").append(
       "RÃ©f : " + immobilier[i].idAnnonce +
       " Type d'immobilier : " + immobilier[i].type +
       " Contact : " + immobilier[i].nom +
       " Adresse : " + immobilier[i].adresse +
       "<br />"
       )  
   }
});    $("#vacance").click(function () {
       $("#afficher").html(" ")
       for (var i = 0; i < vacance.length; i++) {
           $("#afficher").append(
           "RÃ©f : " + vacance[i].idAnnonce +
           " Type de vacance : " + vacance[i].type +
           " Contact : " + vacance[i].nom +
           " Adresse : " + vacance[i].adresse +
           "<br />"
           )  
       }            
});