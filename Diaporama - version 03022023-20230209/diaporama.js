////////////// Déclarations de variables globales

var diaporama = document.querySelector("#diaporama");

var images_list = document.querySelectorAll("#diaporama > img"); // ">" implique que les images doivent se trouver DIRECTEMENT dans l'élément #diaporama
// ou diaporama.querySelectorAll("img") - mais cela n'inclue pas l'aspect parenté directe

var current_image_index; // Pour garder trace de l'indice de l'image actuellement affichée

var cycle; // Pour avoir le contrôle du défilement automatique (pouvoir l'arrêter et le redémarrer)


////////////// Mise en place de l'interface et des détections de clics

// Rattachement de la fonction show_next_image() à l'événement click de l'élément #diaporama
//diaporama.onclick = show_next_image;

// a) Conteneur pour les boutons

var buttons_container = document.createElement("div");

diaporama.appendChild(buttons_container);

buttons_container.className = "buttons-container";

// b) Les boutons en eux-mêmes

images_list.forEach(function(param1, param2) { // Le paramètre attendu par forEach doit être une fonction (seule manière de passer des instructions en paramètre)
    // À cette fonction, on peut donner deux paramètres. Dans ce cas, le premier fera automatiquement référence (dans le cadre de notre boucle forEach) à l'élément du tableau qui nous concerne, et le deuxième fera référence à l'indice de cet élément dans le tableau. Ici on aurait pu appeler ces paramètres image et image_index par exemple.

    //console.log(param1); // On obtient à chaque fois une image de notre liste

    //console.log(param2); // On obtient l'indice de cette image dans notre liste
    
    // Création du bouton
    
    var new_button = document.createElement("button");

    buttons_container.appendChild(new_button);
    
    // Création de l'image miniature dans le bouton
    
    var thumbnail = document.createElement("img");
    
    new_button.appendChild(thumbnail);
    
    var thumbnail_src = param1.getAttribute("src"); // Récupération attribut src de l'image concernée
    
    thumbnail.setAttribute("src", thumbnail_src); // On donne la valeur récupérée comme attribut src de la miniature
    
    //new_button.textContent = param2; // si on voulait afficher l'indice de l'image dans le bouton
    
    // Autre approche pour remplacer création bouton et miniature :
    // buttons_container.innerHTML += "<button><img src='" + thumbnail_src + "'></button>";
    // (il faudrait par contre pouvoir ensuite désigner le bouton)
    // var new_button = buttons_container.querySelector("button:last-child");
    
    new_button.onclick = function() {show_image(param2)} // Rappel : param2 est l'indice de l'image concernée
    
}

);

// Une fois nos boutons en place, on les répertorie de la même manière que nos images. Cela servira lorsqu'on veut atteindre le n-ième bouton en même temps que la n-ième image
var buttons_list = document.querySelectorAll(".buttons-container button");


////////////// Mise en place situation de départ (on démarre le diaporama sur une image au hasard)

var random_index = Math.floor(Math.random() * images_list.length);

show_image(random_index);


////////////// Préparation des fonctions de défilement

function show_image(image_index) {
    
    //var current_image = diaporama.querySelector("img.visible");
    // ou, en utilisant la logique de notre tableau :
    var current_image = images_list[current_image_index] || images_list[0];
    
    var current_button = buttons_list[current_image_index] || buttons_list[0];
    
    current_image.classList.remove("visible");
    
    current_button.classList.remove("current");
    
    current_image_index = image_index; // Mise à jour de notre indice d'image actuelle
    
    var new_current_image = images_list[current_image_index];
    
    var new_current_button = buttons_list[current_image_index];
    
    new_current_image.classList.add("visible");
    
    new_current_button.classList.add("current");
    
    // Remise à zéro du cycle (pour garantir une durée de 3 secondes, même après un clic tardif)
    clearTimeout(cycle);
    cycle = setTimeout(show_next_image, 3000);
    
}

function show_next_image() {

    var next_image_index = current_image_index; // On se base sur l'indice d'image actuelle, mais on ne veut pas le modifier directement ici (c'est le rôle de show_image() )
    
    if (next_image_index < images_list.length - 1) {

        next_image_index++;
        // correspond à next_image_index += 1
        // ou
        // next_image_index = next_image_index + 1

    } else { // On se trouvait déjà sur la dernière image
        
        next_image_index = 0;
        
    }
    
    show_image(next_image_index);
    
}


