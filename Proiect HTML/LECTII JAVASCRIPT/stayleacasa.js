let listNameInput = document.getElementById("list_name_input");
let mainSection = document.getElementById("main_section");
listNameInput.addEventListener("click", RemoveInvalidInputStyle);
function AddList() {
  let listName = listNameInput.value;

  if (listNameInput.value !== "") {
    let listContainer = document.createElement("div");
    let listTitle = document.createElement("h2");
    let removeListButton = document.createElement("button");
    removeListButton.textContent = "Remove list";

    let itemInput = document.createElement("input");
    itemInput.setAttribute("id", "item_input");
    
    let addItemButton = document.createElement("button");
    addItemButton.textContent = "Add item";

    listTitle.innerText = listName;
    listContainer.appendChild(listTitle);
    listContainer.appendChild(removeListButton);
    listContainer.appendChild(itemInput);
    listContainer.appendChild(addItemButton);

    listContainer.classList.add("list_container");
    listTitle.classList.add("list_title");
    removeListButton.classList.add("remove_list_button");
    itemInput.classList.add("item_input");
    addItemButton.classList.add("add_item_button");

    mainSection.appendChild(listContainer);

    removeListButton.addEventListener("click", RemoveList);
    addItemButton.addEventListener("click", AddItemList);
  } else {
    listNameInput.style.border = "2px solid red";
    listNameInput.placeholder = "Choose a name";
  }
}

function AddItemList(e) {
  let listContainer = e.target.parentElement;
  let listItemInput = listContainer.querySelector("#item_input");
  let listItemInputValue = listItemInput.value;

  if (listItemInputValue !== "") {
    let itemsList = document.createElement("ul");
    let deleteItemButton = document.createElement("button");
    deleteItemButton.textContent = "X";
    deleteItemButton.classList.add("delete_item_button");

    let listItem = document.createElement("li");
    listItem.innerText = listItemInputValue;
    listItem.classList.add("list_item");

    itemsList.appendChild(listItem);
    itemsList.appendChild(deleteItemButton);
    listContainer.appendChild(itemsList);

    deleteItemButton.addEventListener("click", RemoveItemList);
  } else {
    listItemInput.style.border = "2px solid red";
    listItemInput.placeholder = "Choose a name";
  }
}

function RemoveList(e) {
  let listContainer = e.target.parentElement;
  mainSection.removeChild(listContainer);
}


function RemoveInvalidInputStyle() {
  listNameInput.style.border = "2px solid #72c2e9";
  listNameInput.placeholder = " ";
  listNameInput.value = "";
}