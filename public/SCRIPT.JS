const input = document.getElementById('box');
const todo = document.getElementById('todo');

document.getElementById('add').addEventListener('click', function addtask() {
  if (input.value === '') {
    alert("YOU MUST WRITE SOMETHING!");
  } else {
    let li = document.createElement('li');
    li.innerHTML = input.value;
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    todo.appendChild(li);
  }
  input.value = '';
  savedata();
});

todo.addEventListener('click', function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle('checked');
    savedata();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    savedata();
  }
});

function savedata() {
  localStorage.setItem("data", todo.innerHTML);
}

function show() {
  const data = localStorage.getItem("data");
  if (data) {
    todo.innerHTML = data;
  }
}

show();
