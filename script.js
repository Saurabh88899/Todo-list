const list = document.getElementById('list')
const input = document.getElementById('input')
const btnAdd = document.getElementById('btnAdd')

//adding list

function add() {
  const task = input.value.trim();

  if (task != '') {
    // Create a list item
    const li = document.createElement('li');
    li.innerHTML = `${task} <button class="delete-btn">Delete</button>`;
    list.appendChild(li)
    show();
  } else {
    alert("Enter Task First")
  }
  input.value = ''
}

//delete button
list.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete-btn')) {
    let del = e.target.parentElement;
    del.remove();
    localStorage.clear();
    show();
  }
})

//save in localStorage
function show() {
  let a = localStorage.setItem("data",
    list.innerHTML)
  console.log(a)
}
//getting back from localStorage
function save() {
  list.innerHTML = localStorage.getItem("data")
}
save();