
function sayHello() {
    const name = document.getElementById('nameInput').value;
    document.getElementById('greeting').innerHTML = `Assalomu alaykum, <strong>${name}</strong>`;
}
function changeColor(id) {
    const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById(id).style.background = randomColor;
}

document.getElementById('block1').onclick = () => changeColor('block1');
document.getElementById('block2').onclick = () => changeColor('block2');
document.getElementById('block3').onclick = () => changeColor('block3');
function addTodo() {
    const input = document.getElementById('todoInput');
    const todoText = input.value;
    if (todoText.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = todoText;
        li.onclick = function() {
            li.style.textDecoration = 'line-through';
        };
        document.getElementById('todoList').appendChild(li);
        input.value = "";
    }
}
