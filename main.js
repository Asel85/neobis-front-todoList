
let form = document.querySelector(".category__button");
let itemsList = document.querySelector(".todo-list");

form.addEventListener("click", addItem);
itemsList.addEventListener("click", removeItem);
itemsList.addEventListener("click", doneTask);
itemsList.addEventListener("click", editTask);

// add task
function addItem(e){
    e.preventDefault();
   // console.log("Fired!!!");
   let newItemInput = document.querySelector(".form-todo__add-text");
   //console.log(newItemInput);
   let newItemText = newItemInput.value;
   //console.log(newItemText);

   let newElement = document.createElement("div");
   newElement.className = "items";
   let newElementContent = document.createElement("div");
   newElementContent.className = "items__content";
   newElement.appendChild(newElementContent);
   let newElementRadio = document.createElement("div");
   newElementRadio.className="items__radio";
   newElementRadio.dataset.action = "done"
   newElementContent.appendChild(newElementRadio);
   let newElementText = document.createElement("div");
   newElementText.className = "items__text";
   let newTextNode = document.createTextNode(newItemText);
   newElementText.appendChild(newTextNode);
   newElementContent.appendChild(newElementText);
   let newElementButtons = document.createElement("div");
   newElementButtons.className = "items__buttons";
   let editBtn = document.createElement("button");
   editBtn.className = "items__button-edit";
   editBtn.dataset.action = "edit";
   editBtn.appendChild(document.createTextNode("Edit"));
   newElementButtons.appendChild(editBtn);
   let deleteBtn = document.createElement("button");
   deleteBtn.className = "items__button-delete";
   deleteBtn.appendChild(document.createTextNode("Delete"));
   deleteBtn.dataset.action = "delete";
   newElementButtons.appendChild(deleteBtn);
   newElement.appendChild(newElementButtons);
   
  // let itemsList = document.querySelector(".todo-list");
   console.log(itemsList);
   itemsList.appendChild(newElement);
   newItemInput.value = "";
   newItemInput.focus();
}

// delete task
function removeItem(e){
    
    if(e.target.hasAttribute("data-action")&&
    e.target.getAttribute("data-action") == "delete"){

    
    if(confirm("Remove task?")){
        e.target.closest(".items").remove();
    }
}
}

// done task
function doneTask(e){
    if(e.target.dataset.action === "done"){
        let parentNode = e.target.closest(".items__content");
        let taskTitle = parentNode.querySelector(".items__text");
        taskTitle.classList.toggle("items-text_done");
        let taskChecked = parentNode.querySelector(".items__radio");
        taskChecked.classList.toggle("items__radio_checked");
    }
}

// edit task

function editTask(e){

    if(e.target.hasAttribute("data-action")&&
    e.target.getAttribute("data-action") == "edit") {
      let parentNode =  e.target.closest(".items");
      let taskText = parentNode.querySelector(".items__text");
      
      
    }   
}