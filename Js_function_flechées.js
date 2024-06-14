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





