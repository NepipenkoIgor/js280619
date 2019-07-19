const todoApp = document.querySelector('.todoapp')

generateTodo(todoApp);


function generateTodo(element) {
    const input = element.querySelector('.new-todo');
    const ul = element.querySelector('.todo-list');
    ul.addEventListener('click', (e) => {
        const el = e.target;
        const isRemove = el.classList.contains('destroy');
        const isComplete = el.classList.contains('toggle');
        if (!isRemove || !isComplete) {
            return;
        }
        const li = el.closest('li');
        if (isRemove) {
            ul.removeChild(li)
            return;
        }
        li.classList.add('complete');
    });
    input.addEventListener('keydown', (event) => {
        const {code, target} = event;
        if (code !== 'Enter') {
            return;
        }
        ul.insertAdjacentHTML('beforeend',
            `<li class="todo">
                <div class="view"><input type="checkbox" class="toggle"> <label>${target.value}</label>
                    <button class="destroy"></button>
                </div>
                <input type="text" class="edit"></li>`);
        target.value = '';
    });
}
