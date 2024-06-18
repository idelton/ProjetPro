// 1
/*Écrire cette fonction en fonction flechées
function add(a, b) {
  return a + b;
} */
const add = (a,b) => a+ b;
console.log(add(3,3))

//exo2
/*function greet(name) {
  return 'Hello, ' + name + '!';
} */
const greet= (name) => "hello" + name + "!" ;
console.log(greet(' paul'));

/*exercice 3
1) Écrivez une fonction fléchée qui prend un tableau
  de noms et retourne un tableau de salutations pour
  chaque nom. Par exemple, ['Alice', 'Bob'] devrait
  retourner ['Hello, Alice!', 'Hello, Bob!'].*/
const noms = ['idelton','arthur'];
const bonjour = noms.map((nomss) => `hello ${nomss}`) 
console.log(bonjour)

//Ecrire une fonction qui renvoie les nombre paire 
const scores = [85, 92, 73, 98, 80];
const eventScore = scores.filter(num => num % 2 ===0)
console.log(eventScore)

//Ecrire une fonction qui supprimer les doublont
const guestList = ["Alice", "Bob", "Charlie", "Alice","Bob",];
const supprimerDoublont = [... new Set(guestList)]
console.log(supprimerDoublont)

//conditions abreger if/else
const age = 11;
const resultat = age >=18 ? "tu peut passer " : "tu n'as pas l'age qu'il faut"
console.log(resultat)




