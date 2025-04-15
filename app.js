// const tableau = [1,2,3,4,5,6];

// // doubler tout les nombres du tableau
//  let doubleTableau = tableau.map(nombre => nombre * 2);
// console.log(doubleTableau);
// // EXO #2
//     // filtrer un tableau pour ne garder que les nombres pairs
//     // filtrer un tableau pour ne garder que les nombres impairs

// let pairTableau = tableau.filter(number => number % 2 === 0)

// console.log(pairTableau);
// let impairTableau = tableau.filter(number => number % 2 !== 0)
// console.log(impairTableau);
// // EXO #3
//     // transformer le tableau en une valeur simple, statique en recuperant la valeur max
// const maxTableau = Math.max(...tableau);
// console.log(maxTableau);

//     // transformer le tableau en une valeur simple, statique en recuperant la valeur min
// const minTableau = Math.min(...tableau)
// console.log(minTableau);

// // EXO #4
//     // faire un addition de tout les elements du tableau
// let addTableau = tableau.reduce((accumulator, currentValue) => accumulator + currentValue,0);
// console.log(addTableau);


//     // faire une multiplication de tout les elements du 
//     // tableau
//     let multiTableau = tableau.reduce((accumulator, currentValue) => accumulator * currentValue,1);
// console.log(multiTableau);

// // EXO #5
//     // trouver si un tableau contient un element impair
// function tableauImpair(tableau) {
// 	if(tableau.some(number => number % 2 !== 0)) {
// 		console.log("tableau contient un element impair ");
		
// 	}
// 	else console.log("contient aucun element impair");
	
// 	}
// tableauImpair(tableau);


// // EXO #3
//     // transformer le tableau en une valeur simple, statique en recuperant la valeur max

// let max = 0
// for (let i = 0; i < tableau.length; i++)  {
	
	
// 	if (tableau[i] > max){
// 		max = tableau[i];
		
// 	 }
	
// }
// console.log(max)

// let min = 0
// for (let i = 0; i < tableau.length; i++)  {
	
	
// 	if (tableau[i] < min){
// 		min = tableau[i];
		
// 	 }
	
// }
// console.log(min)

// let addition = 0
// for (let i = 0; i < tableau.length; i++)  {
// 	addition += tableau[i] ;
	
	
// }
// console.log(addition)



// let multiplication = 1
// for (let i = 0; i < tableau.length; i++)  {
// 	multiplication *= tableau[i] ;
	
	
// }
// console.log(multiplication)