$('#afficherTh').hide()

$(function(){

	//objet rubrique
	function Rubrique(id_rubrique, titre, id_rubrique_parent){
		this.id_rubrique = id_rubrique;
		this.titre = titre;
		this.id_rubrique_parent = id_rubrique_parent;
	}

	function Annonce(id_annonce, titre, prix, contenu, rubrique){
		this.id_annonce = id_annonce;
		this.titre = titre;
		this.prix = prix;
		this.contenu = contenu;
		this.rubrique = rubrique;
		// this.id_rubrique = rubrique[id_rubrique]; //a voir

	}

	

//tableau de rubrique
var rubrique = [ 
new Rubrique(0, "immobilier", null),
new Rubrique(1, "ventes", 0),
new Rubrique(2, "locations", 0),
new Rubrique(3, "colocations", 0),

new Rubrique(4, "vacances", null),
new Rubrique(5, "gites", 4),
new Rubrique(6, "hotels", 4),
new Rubrique(7, "camping", 4),
]

//console.log(rubrique[2].id_rubrique);
function createRubriqueSelector( rubriques ){
	var html = "";
	var curRub;
	var isBaliseParentOpen = false;

	for(var i = 0; i < rubriques.length; i++){
		curRub = rubriques[i];		  
		if (null === curRub.id_rubrique_parent) {
			if ( isBaliseParentOpen ) {

				html += "</optgroup>";
				isBaliseParentOpen = false;
			}
			html += "<optgroup label='" + curRub.titre + "'>";
			isBaliseParentOpen = true;

		}
		else {
			html += "<option value='" + i + "'>" + curRub.titre + "</option>";
		}
	}
	html += "</optgroup>";

	return html;
}

$('#select1').html(createRubriqueSelector(rubrique));




var annonce = [];
var compteurId = 1;

$('#valid').click(function(){
	
	var titre = $('#titre').val();
	var prix = $('#prix').val();
	var contenu = $('#contenu').val();
	var rubrique1 = parseInt($('#select1').val());

	annonce.push(new Annonce(compteurId++ , titre, prix, contenu, rubrique[rubrique1]));
	console.log(annonce);
});

$('#afficherAnnonce').click(function(){
	for(var i = 0; i < annonce.length; i++){

		$('#contenuAnnonce').append("<tr><td>"+ annonce[i].titre +"</td>" + "<td>" + annonce[i].prix + "</td>" + "<td>" + annonce[i].contenu + "</td>" + "<td>" + annonce[i].rubrique.id_rubrique + "</td></tr");
	}
	$('#afficherTh').show();
});

})