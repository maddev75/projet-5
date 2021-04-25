let btnStart        = document.querySelector('#start');
let theme           = document.querySelector("#theme");
let nombreCitation  = document.querySelector('#nb-citation');
let fin             = document.querySelector('#end');
let themeTravail    = document.querySelector('#travail');
let themeArgent     = document.querySelector('#argent');
let divMesCitations = document.querySelector('#mes-citations');
let nbCitation      = 0;

let citationBeguin = ['"Qui aime', '"Qui désire', '"Qui apprécie', '"Qui raffole'];
let citationMiddle = ['le travail', 'travailler', 'sa carrière', 'son boulot'];
let citationEnd    = [`trouve toujours a s'occupper!"`, `a trouvé le meilleur moyen de ne pas s'ennuyer!"`,
                     'préserve son bien être!"', 'exagérément coure à sa perte!"'];

let citationDebut  = ['"Qui aime', '"Qui adore', '"Qui apprécie', '"Qui chéri', '"Qui désire'];
let citationMilieu = ["l'argent", 'le fric', 'le cash', 'le pognon','le flouz'];
let citationFin    = [`c'est tout simplement normal mais gare à toi de ne pas y succomber!"`, 
                      `a compris le bizness!"`, `coure à sa perte!"`, 
                      `oui et alors faut bien manger!"`, `l'emportera pas avec lui dans sa tombe!"`];

const citationTravail = new Blabla(
    citationBeguin, citationMiddle, citationEnd
);
const citationArgent = new Blabla(
    citationDebut, citationMilieu, citationFin
);
nombreCitation.addEventListener('change',(e)=> {
    nbCitation = e.target.value;
    console.log(nbCitation)
})
btnStart.addEventListener('click', ()=> {
    divMesCitations.innerHTML = "";
    let resultCitation = "";
    if(themeTravail.selected) {
        for (let i = 0; i < nbCitation; i++) {
        resultCitation = citationTravail.generateCitation();
        }
    }
    if (themeArgent.selected) {
        for (let i = 0; i < nbCitation; i++) {
        resultCitation = citationArgent.generateCitation();
        }
    }
})
fin.addEventListener('click',(e)=> {
    divMesCitations.innerHTML = "";
    document.getElementById("theme").value = 'le-theme';
    document.getElementById("nb-citation").value = 'nbcitation';
})




    
  

     



        

        


 
 