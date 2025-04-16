
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
	titleTache.classList.add("titre-tache")

	buttonDelete.addEventListener("click", deleteTache)
	buttonModify.addEventListener("click", modify)
	containerTache.append(titleTache,buttonModify,buttonDelete);

	return containerTache
}
function addTache(){
	let tache = document.querySelector("#saisieTache");
	let cardTache = {
		id: list.length +1,
		nameTache: tache.value
	}
	
	
	list.push(cardTache);
	const newTache = createTache(cardTache)
	listTache.appendChild(newTache)
}
buttonTache.addEventListener("click",()=> {
	addTache()
	
	
	
})

function deleteTache(e) {
	const btn = e.target
	const div = btn.closest(".liste-taches__container")
	div.remove()
	
	
}

function modify(e) {
	let input = document.createElement("input")
	input.classList.add("input-title")
	let btnModify = e.target
	console.log(btnModify);
	
	let container = btnModify.closest('.liste-taches__container');
	console.log(container);
	
	let titre = container.querySelector('.titre-tache');
	console.log(input.value);
	console.log(titre);
	console.log(titre.textContent);
	
	
	
	input.value = titre.textContent;


	let btnSave = document.createElement("button")
	btnSave.classList.add("btn-save");
	btnSave.textContent = "Save"
	
	btnSave.addEventListener("click", save
	)
	btnModify.replaceWith(btnSave)
	
	titre.replaceWith(input);
	
	

}

function save(e){
	const btnSave = e.target
	
	let container = btnSave.closest(".liste-taches__container")
	let input = container.querySelector(".input-title")
	
	let newTitle = document.createElement("h3")
	newTitle.classList.add("titre-tache")
	newTitle.textContent = input.value


	input.replaceWith(newTitle)

	let btnModify = document.createElement("button")

	btnModify.textContent = "Modify"
	

	btnModify.addEventListener("click", modify)
	btnSave.replaceWith(btnModify)
	
	

	
	
}