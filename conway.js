// Etape 1

function decoupeChaine(chaine) {
  let resultat = chaine[0];

  for (let i = 1; i < chaine.length; i++) {
    if (chaine[i] !== chaine[i - 1]) {
      resultat += " ";
    }
    resultat += chaine[i];
  }

  return resultat;
}

console.log(decoupeChaine("ab")); // "a b"
console.log(decoupeChaine("aabbca")); // "aa bb c a"

// Etape 2

function decritChaine(chaine) {
  if (chaine.length === 0) return "";

  let resultat = "";
  let compteur = 1;

  for (let i = 1; i < chaine.length; i++) {
    if (chaine[i] === chaine[i - 1]) {
      compteur++;
    } else {
      resultat += compteur + chaine[i - 1];
      compteur = 1;
    }
  }

  resultat += compteur + chaine[chaine.length - 1];

  return resultat;
}

// Etape 3

function suiteConway(carac, n) {
  let suite = [carac];

  for (let i = 1; i < n; i++) {
    suite.push(decritChaine(suite[i - 1]));
  }

  return suite.join("\n");
}

console.log(suiteConway("a", 3));
console.log(suiteConway("1", 3));
