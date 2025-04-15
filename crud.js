
let buttonTache = document.querySelector("#ajouterTache");
let listTache = document.querySelector("#listeTaches");
let list = []



function createTache(tache) {
	let containerTache = document.createElement("div")
	let titleTache = document.createElement("h3");
	let buttonDelete = document.createElement("button")
	let buttonModify = document.createElement("button")
	
	containerTache.dataset.id = tache.id;
	titleTache.textContent = tache.nameTache;
	buttonModify.textContent = "Modify"
	buttonDelete.textContent = "Delete"

	containerTache.classList.add("liste-taches__container")
	buttonModify.classList.add("taches-modify")
	buttonDelete.classList.add("taches-delete")

	buttonDelete.addEventListener("click", deleteTache)

	containerTache.append(titleTache,buttonModify,buttonDelete);

	return containerTache
}
function addTache(){
	let tache = document.querySelector("#saisieTache");
	let cardTache = {
		id: list.length +1,
		nameTache: tache.value
	}
	console.log(cardTache);
	
	list.push(cardTache);
	const newTache = createTache(cardTache)
	listTache.appendChild(newTache)
}
buttonTache.addEventListener("click",()=> {
	addTache()
	console.log(list);
	
	
})

function deleteTache(e) {
	const btn = e.target
	const div = btn.closest(".liste-taches__container")
	div.remove()
}

function modify() {
	let input = document.creat("input")
	input.classList.add("modify")

}


