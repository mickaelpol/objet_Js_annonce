$("#afficherTh").hide(); // formulaire initiaklement caché

$(function(){

	// creation objet Rubrique de selection 
	function Rubrique(idRubrique, titre, idRubriqueParent){
		this.idRubrique = idRubrique;
		this.titre = titre;
		this.idRubriqueParent = idRubriqueParent;
	}
	


	//stockage des valeurs des inputs du formulaire
	function Formulaire(idFormulaire, user, password, commentaire, rubrique){
		this.idFormulaire = idFormulaire;
		this.user = user;
		this.password = password;
		this.commentaire = commentaire;
		this.rubrique = rubrique;

	}

	var rubrique = [
	new Rubrique(0, "AVIS POSITIF", null),
	new Rubrique(1, "plus ou moins satisfait", 0),
	new Rubrique(2, "satisfait", 0),
	new Rubrique(3, "trés satisfait", 0),
	new Rubrique(4, "AVIS NEGATIF", null),
	new Rubrique(5, "peu mécontent", 4),
	new Rubrique(6, "mécontent", 4),
	new Rubrique(7, "trés mécontent", 4),
	]

	//creation d'une fonction select
	function creationSelect( rubriques ){
		var html = "";
		var currentRubrique;
		var isBaliseOpen = false;

		for(var i = 0; i < rubriques.length; i++){
			currentRubrique = rubriques[i];
			if (null === currentRubrique.idRubriqueParent) {
				if (isBaliseOpen) {
					
					html += "</optgroup>";
					isBaliseOpen = false;
				}
				html += "<optgroup label='" + currentRubrique.titre + "'>";
				isBaliseOpen = true;
			}
			else {
				html += "<option value='" + i + "'>" + currentRubrique.titre + "</option>";
			}
		}
		html += "</optgroup>";
		return html;
	}
	 $("#select").html(creationSelect(rubrique));
	

	var formulaire = [];//initialisation du tableau d'objet vide
	var compteurForm = 1; //initialisation du compteur d'id formulaire


	$('#SC').click(function(){  // fonction du clic pour afficher le contenu du tableau d'objet
		var user = $('#username').val();//stockage des valeurs des input dans des variables
		var passwd = $('#password').val();
		var comment = $('#commentaire').val();
		var section = parseInt($('#select').val());

		formulaire.push(new Formulaire(compteurForm++ , user, passwd, comment, rubrique[section]));
		console.log(formulaire);
	});

	$("#afficherAnnonce").click(function(){
		for(var i = 0; i < formulaire.length; i++){
			$("#contenuFormulaire").append("<tr><td>" + formulaire[i].compteurForm + "</td>" +
				"<td>" + formulaire[i].user + "</td>" + "<td>" + formulaire[i].passwd + "</td>" + "<td>" + formulaire[i].comment + "</td></tr>");
		}
		$("#afficherTh").show();
	});

});