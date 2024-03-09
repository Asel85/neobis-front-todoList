// add task

let form = document.querySelector(".category__button");
//console.log(form)
form.addEventListener("click", addItem);

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
   editBtn.appendChild(document.createTextNode("Edit"));
   newElementButtons.appendChild(editBtn);
   let deleteBtn = document.createElement("button");
   deleteBtn.className = "items__button-delete";
   deleteBtn.appendChild(document.createTextNode("Delete"));
   deleteBtn.dataset.action = "delete";
   newElementButtons.appendChild(deleteBtn);
   newElement.appendChild(newElementButtons);
   
   let itemsList = document.querySelector(".todo-list");
   console.log(itemsList);
   itemsList.appendChild(newElement);
   newItemInput.value = "";
}

//<div class="todo__items items">
//<div class="items__content">
 // <div class="items__radio"></div>
 // <div class="items__text">Complete task1</div>
//</div>
//<div class="items__buttons">
 // <button class="items__button-edit" type="button">Edit</button>
 // <button class="items__button-delete" type="button">Delete</button>
//</div>  
//</div>