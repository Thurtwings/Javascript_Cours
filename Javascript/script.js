function save_data(e) 
{
    
    // Tout d'abord : annuler le comportement par défaut du bouton submit (validation classique du form)
    console.log(e);
    e.preventDefault(); // ! \ A EXPLIQUER CORRECTEMENT
    // Récupération valeur champ // ! \ FAIRE UN POINT SUR ATTRIBUT VALUE
    var value_to_send = document.querySelector("textarea").value;
    
    // Envoi requête
    $.ajax("save_data.php",
    {
        method:"POST",
        data:
        {
            user_text: value_to_send
        }, // ou data: "user_text=" + value_to_send
        success:function()
        {
            // Une fois la requête bien envoyée, on vide le champ texte
            document.querySelector("textarea").value = "";
        }
    });
    
}

document.querySelector("input[type='submit']").onclick = save_data;

function Getdata()
{
    $.ajax("Get_Data.php", 
    {
        success: function(result)
        {
            document.querySelector("#display").innerHTML= result;
        }
    })


}


Getdata();