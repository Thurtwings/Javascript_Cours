// jQuery donne accès, en premier lieu, à une fonction jQuery() qui peut aussi s'écrire $(). Celle-ci sert à désigner des éléments HTML et leur donne de nouvelles possibilités (méthodes, etc)

console.log( $("#div1") );

$("#div1").addClass("nouvelle_classe");

// On peut traiter plusieurs éléments à la fois, là où du JS natif aurait demandé un forEach, etc.
$("p").addClass("parag_special");

// On peut aussi "chainer" les méthodes :

$("p").css("background-color","#123456").css("color","white").html("Du <span>contenu</span> inséré via .html()");

// Modifier plusieurs propriétés css en un appel, via un objet JS

$("p").css( {border:"2px dashed red", padding:"10px", textAlign:"center"} );

// On peut faire, en une instruction, des choses sur un ensemble d'éléments PUIS resserrer notre sélection :

$("p").css("font-size","30px").filter(".different , .diff2").css({fontFamily:"sans-serif",fontSize:"45px"});

$("p").not(".different , .diff2").css("transform","scale(0.5)").find("span").html("C O N T E N U").css("color","red");

// La fonction $() accepte des paramètres sous différentes formes (par exemple ici des variables qui sont en fait déjà des éléments)

var div1_classique = document.querySelector("#div1");

$(div1_classique).html("Bonjour !");

var parags_classiques = document.querySelectorAll("p");

$(parags_classiques).append("<a href=''>un lien</a>");

$(parags_classiques[1]).html("Parag 2");

// Critère possible de filtrage : l'élément a-t-il comme enfant un autre élément spécifique ?

$("li").has("ul").css("background-color","red");

$("li").has("ul").find("li").css("text-decoration","underline");

// Test animations :

//$("p").animate({opacity:0},{duration:10000, queue:false});
//$("p").animate({marginTop:"500px"},{duration:7000, queue:false});

$("p").animate({opacity:0},{duration:10000, queue:false}).animate({marginTop:"500px"},{duration:7000, queue:false});



