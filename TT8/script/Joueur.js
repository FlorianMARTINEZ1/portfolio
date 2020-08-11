// Class Joueur
class Joueur {
  constructor(pseudo) {
    this.pseudo = pseudo;
    this.carteJoue = [];
    this.score = 5;

  }

  test() {
    console.log(this.pseudo);
  }

  getScore() {
    return this.score;
  }

  getName() {
    return this.pseudo;
  }

  ajouter(carte) {
    this.carteJoue.push(carte);
    this.score++;
  }

  setIndex() {}

  /**
   * Vérifie dans la liste de nom de carte du joueur si le nom de la carte donnée en paramètre
   * est dans cette liste.
   */
  possede(carte) {
    for (var i = 0; i < this.carteJoue.length; i++) {
      if (this.carteJoue[i] === carte) return true;
    }
    return false;
  }

  /**
   * Récupère le nom de la carte donnée en paramètre depuis la liste du joueur,
   * la supprime et la retourne.
   */
  retrieveCard(carte) {
    for (var i = 0; i < this.carteJoue.length; i++) {
      if (this.carteJoue[i] === carte) {
        let a = this.carteJoue[i];
        this.score--;
        this.carteJoue.splice(i, 1);
        return a;
      }
    }
  }

  afficher() {
    for (const carte of this.carteJoue) {
      console.log(carte);
    }
  }


  toString() {
    return `${this.pseudo}`;
  }
}

// FIN CLASS JOUEUR