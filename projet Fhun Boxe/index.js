                  
    const reponse = await fetch("abonne.json");
    const abonne = await reponse.json();
    
    const numero=document.getElementById("num");
    const button=document.getElementById("bouton");
    const messageAutorisation=document.getElementById("message")
        
    let numeroElement = 0;
                    
    
                    function confirmation(){        //fonction pour transformer la valeur inscrite en valeur décimale

                    numeroElement = parseInt(numero.value);
                    
                    console.log(numeroElement);
                    
                    };

                    function valide(){
                        
                            messageAutorisation.innerText="Vous êtes autorisé";
                            
                    };

                    function refuse(){

                            messageAutorisation.innerText="Veuillez vérifier le numero inscrit, si vous voulez vous inscrire il suffit de venir à un cour collectif le samedi à 10h c'est gratuit";
                            
                    };
                      
                    function abonneListe(){    //fonction pour chercher dans la base json un numero similaire
                        for (let i=abonne.length-1; i>=0; i--){
                            console.log(numeroElement);
                            console.log(abonne[i].numero);
                            if(numeroElement===abonne[i].numero){
                               valide();
                               window.location.href= "http://127.0.0.1:5500/espace_connection.html";

                               const bonjourAbonne = document.createElement("h2");
                                    bonjourAbonne.innerText=(`Bonjour ${abonne[i].name}`);
                
                                const bonjour = document.querySelector(".bonjour");
                                bonjour.appendChild(bonjourAbonne);

                               return;
                                
                            }
                        }
                        refuse();
                                console.log(`le ${numeroElement}`);
                    };
    
                    button.addEventListener("click", function(){
                        confirmation();
                        abonneListe();
                    });
        