var allCards = new Array(); // tous les cartes du deck choisie
var tabCartes = [10]; // tableaux des 10 cartes

var mithra = new Card(67, "Mithra", 8, 5, 8, 3, "bleue");
var eiffel = new Card(30, "Eiffel", 2, 6, 7, 3, "bleue");
var taurux = new Card(100, "Taurux", 9, 2, 9, 5, "bleue");
var tomberrySr = new Card(103, "Tomberry Sr", 4, 7, 4, 6, "bleue");
var protesis = new Card(84, "Protesis", 6, 6, 7, 2, "bleue");

var hera = new Card(47, "Hera", 3, 1, 7, 2, "rouge");
var ondine = new Card(75, "Ondine", 8, 6, 2, 9, "rouge");
var berseker = new Card(16, "Berseker", 4, 7, 2, 4, "rouge");
var cid = new Card(24, "Cid", 7, 3, 7, 10, "rouge");
var orbital = new Card(76, "Orbital", 4, 9, 10, 4, "rouge");

allCards.push(mithra);
allCards.push(eiffel);
allCards.push(taurux);
allCards.push(tomberrySr);
allCards.push(protesis);
allCards.push(hera);
allCards.push(ondine);
allCards.push(berseker);
allCards.push(cid);
allCards.push(orbital);

for (let i = 0; i < tabCartes.length; i++) {
    tabCartes[i] = allCards[i];

}

function findCard(carteJoue) { // permet de retrouver une carte

    for (var i = 0; i < allCards.length; i++) {
        if (allCards[i].donneID() === Number(carteJoue)) {
            return allCards[i];
        }
    }
}