const todoApp = document.querySelector('.todoapp')

generateTodo(todoApp);


function generateTodo(element) {
    const input = element.querySelector('.new-todo');
    const ul = element.querySelector('.todo-list');
    const counter = element.querySelector('.todo-count strong');
    const filters = element.querySelector('.filters');
    counter.addEventListener('updatecount', (e) => {
        e.currentTarget.innerHTML = e.detail;
    });
    ul.addEventListener('click', (e) => {
        const el = e.target;
        const isRemove = el.classList.contains('destroy');
        const isComplete = el.classList.contains('toggle');
        if (!isRemove && !isComplete) {
            return;
        }
        const li = el.closest('li');
        if (isRemove) {
            ul.removeChild(li);
            dispatch(counter, 'updatecount');
            return;
        }
        li.classList.add('complete');
    });
    input.addEventListener('keydown', (event) => {
        const {code, target} = event;
        if (code !== 'Enter' || !target.value) {
            return;
        }
        ul.insertAdjacentHTML('beforeend',
            `<li class="todo">
                <div class="view"><input type="checkbox" class="toggle"> <label>${target.value}</label>
                    <button class="destroy"></button>
                </div>
                <input type="text" class="edit"></li>`);
        target.value = '';
        dispatch(counter, 'updatecount')
    });
    filters.addEventListener('click', (event) => {
        const list = document.querySelectorAll('.todo-list li');
        for (let li of list) {
            switch (event.target.className) {
                case 'all' : {
                    li.removeAttribute('hidden');
                    break;
                }
                case 'active' : {
                    if (li.classList.contains('complete')) {
                        li.setAttribute('hidden', true);
                        break
                    }
                    li.removeAttribute('hidden');
                    break;
                }
                case 'completed' : {
                    if (li.classList.contains('complete')) {
                        li.removeAttribute('hidden');
                        break
                    }
                    li.setAttribute('hidden', true);
                    break;
                }
            }
        }
        dispatch(counter, 'updatecount');
    })
}


function dispatch(el, eventName) {
    const list = [...document.querySelectorAll('.todo-list li')]
        .filter((li) => !li.hasAttribute('hidden'));
    const e = new CustomEvent(eventName, {detail: list.length});
    el.dispatchEvent(e);
}
