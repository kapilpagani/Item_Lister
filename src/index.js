import "./styles.css";
var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

// form submit event
form.addEventListener("submit", addForm);

// delete Event
itemList.addEventListener("click", removeItem);

// filter Event
filter.addEventListener("keyup", filterItem);

function addForm(e) {
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById("item").value;

  // create new Li element
  var li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(newItem));

  // create Button element
  var button = document.createElement("button");
  button.className = "btn btn-danger btn-sm float-right delete";
  button.appendChild(document.createTextNode("X"));

  li.appendChild(button);

  itemList.appendChild(li);

  document.getElementById("item").value = "";
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItem(e) {
  var text = document.getElementById("filter").value;

  var items = document.getElementsByTagName("li");

  Array.from(items).forEach(item => {
    if (item.textContent.toLowerCase().indexOf(text) !== -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
