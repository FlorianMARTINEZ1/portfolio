function allowDrop(ev) {
    ev.preventDefault();

}


var choixjoueur = getRandomInt(2); //choix du premier joueuer a jouer
var g2 = new Game("j1", "j2", choixjoueur);
// permet de simuler une partie comme on a pas
//récuperer la game dans le fonction initialisation.

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


//Test initialisation partie (Entrer deux pseudo + affichage plateau)
function initialisation() {
    var joueurUn = document.getElementById('joueur1').value;
    var joueurDeux = document.getElementById('joueur2').value;

    document.getElementById('un').innerHTML = joueurUn;
    document.getElementById('deux').innerHTML = joueurDeux;
    document.getElementById('score-un').innerHTML = 5;
    document.getElementById('score-deux').innerHTML = 5;

}


function drag(ev) {
    ev.dataTransfer.setData('text', ev.target.draggable);
    var data = ev.dataTransfer.getData('text');
    if (data == "true") {
        ev.dataTransfer.setData('text', ev.target.id);
    } else {
        ev.preventDefault()
        throw new Error("pas bien de tricher");
    }

}

function drop(ev) {
    ev.preventDefault();
    console.log(g2.currentPlayer);
    var data = ev.dataTransfer.getData('text');
    var img = ev.target.appendChild(document.getElementById(data));
    ev.target.removeAttribute('ondrop');
    ev.target.removeAttribute('ondragover');
    img.setAttribute('pointer-events', 'none');
    img.setAttribute('draggable', 'false');
    img.removeAttribute('ondragstart');
    img.removeAttribute('id');
    g2.confrontation(img.className, ev.target.classList[1]);
    g2.setTurn();
    document.getElementById('score-un').innerHTML = g2.listPlayer[0].score;
    document.getElementById('score-deux').innerHTML = g2.listPlayer[1].score;
    g2.endGame();

}