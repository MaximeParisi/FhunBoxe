let jeuDeCarte =[1,2,3,4,5];
let joueur1=50;
let joueur2=50;
let carte2= 0;
let carte1 = 0;
let cagnotte = 0;

const appelCarte = document.querySelector(".bataille");

function appelCarteHazard (){

    console.log("Je commence la function appelCarteHazard")

    joueur1--;    //chaque joueur joue 1 carte de leur paquet
    joueur2--;
    console.log(joueur1+'et'+joueur2)
  carte1 = Math.random();     //la carte jouer est tier au hazard
  carte2 = Math.random();

        if(carte1<0.2){
        carte1=jeuDeCarte[0];
        }   else if(carte1<0.4){
            carte1=jeuDeCarte[1];
            }
                else if(carte1<0.6){
                carte1=jeuDeCarte[2];
                }
                    else if(carte1<0.8){
                    carte1=jeuDeCarte[3];
                    }
                        else{
                        carte1=jeuDeCarte[4];
                        }
        if(carte2<0.2){
        carte2=jeuDeCarte[0];
        }
            else if(carte2<0.4){
            carte2=jeuDeCarte[1];
            }
                else if(carte2<0.6){
                carte2=jeuDeCarte[2];
                }
                    else if(carte2<0.8){
                    carte2=jeuDeCarte[3];
                    }
                        else{
                        carte2=jeuDeCarte[4];
                        }
        console.log("Carte1:"+carte1);    //revelation carte joué 
        console.log("Carte2:"+carte2);

        const carteJoueur=document.createElement("p");   //affichage carte joueur 1
        carteJoueur.innerText= `Carte joueur1: ${carte1}`;
        const appelCarte = document.querySelector(".bataille");
        appelCarte.appendChild(carteJoueur);

        const carteJoueur2=document.createElement("p");  //affichage carte joueur 2
        carteJoueur2.innerText= `Carte joueur2: ${carte2}`;
        appelCarte.appendChild(carteJoueur2);
    

        console.log("fin function appelCarteHazard")
        console.log(joueur1+'et'+joueur2)
        
}

function ifBataille(){

    console.log("Je commence la function IfBataille")
    console.log("avant bataille"+joueur1+"et"+joueur2)
    if (carte1===carte2){
        console.log("bataille");
        joueur1-=2;
        joueur2-=2;
        cagnotte+=6;
        
    const bataille = document.createElement("h2");      //création "bataille"
        bataille.innerText="BATAILLE";

        const appelCarte = document.querySelector(".bataille"); //affichage "bataille"
        appelCarte.appendChild(bataille);
        console.log("pendant bataille"+joueur1+"et"+joueur2)


            appelCarteHazard();
            
            if(carte1>carte2){               //resultat de la boucle bataille
                console.log("j1 a gagné");
                joueur1+=2+cagnotte;
                console.log(cagnotte);
                cagnotte=0;

                const winner = document.createElement("h2");
        winner.innerText = "J1 a gagné";
        appelCarte.appendChild(winner);
        console.log(`affichage gagnant${winner} avec`+joueur1+"cartes");
        console.log("J2"+joueur2+"cartes");

            }
            else if(carte1<carte2){
                console.log("j2 a gagné");
                joueur2+=2+cagnotte;
                console.log("la cagnotte est de "+cagnotte);
                cagnotte=0;

                const winner2= document.createElement("h2");
        winner2.innerText= "J2 a gagné";
        appelCarte.appendChild(winner2);
        console.log(`affichage gagnant${winner2} avec`+joueur2+"cartes");
        console.log("J2 "+joueur1+"cartes");
        
            }
            else{
                ifBataille();
            }
            
    };
        console.log("fin bataille"+joueur1+"et"+joueur2)
    
    
    console.log("Je finis la function IfBataille")
}

//Début de la partie !!!!!!!!!!!!!!!!!!!!!!!!!


const bouton = document.querySelector("#bouton");  //connexion bouton

bouton.addEventListener("click", function() {     //les joueurs cliquent sur le bouton

    document.querySelector(".bataille").innerHTML="";

    appelCarteHazard()


        console.log("Je commence la partie")
        if(carte1>carte2){               
            console.log("j1 a gagné");
            joueur1+=2;
        const winner = document.createElement("h2");
        winner.innerText = "J1 a gagné";
        appelCarte.appendChild(winner);
        console.log(`affichage gagnant${winner} avec`+joueur1+"cartes");
        console.log("J2"+joueur2+"cartes");
        }
        else if (carte1<carte2){                                           
            console.log("j2 a gagné")
            joueur2+=2;
        const winner2= document.createElement("h2");
        winner2.innerText= "J2 a gagné";
        appelCarte.appendChild(winner2);
        console.log(`affichage gagnant${winner2} avec`+joueur2+"cartes");
        console.log("J2 "+joueur1+"cartes");
        }
        else{
            ifBataille();
        }
        document.querySelector(".cartes").innerHTML= '';

    let nbCartes1 = document.createElement("h2");      //creation h2 nb de cartes j1
    nbCartes1.innerText = `Joueur1: ${joueur1}`;
    console.log(joueur1);

    let nbCartes2 = document.createElement("h2");     //creation h2 nb de carte j2
    nbCartes2.innerText = `Joueur2: ${joueur2}`;
    console.log(joueur2);

    const appelNbCartes = document.querySelector(".cartes");  //affichage
    appelNbCartes.appendChild (nbCartes1);
    appelNbCartes.appendChild (nbCartes2);

        console.log("J1, il te reste "+joueur1+" carte(s)");
        console.log("J2, il te reste "+joueur2+" carte(s)");

        if (joueur1<=0){
            console.log("joueur1 perdu");
        }
        else if (joueur2<=0){
            console.log("joueur2 perdu");
        }
        //else sa continu de joué


    
})




