// Seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const canceleditBtn = document.querySelector("#cancel-edit-btn");
const searchInput = document.querySelector("#search-input");
const eraseBtn = document.querySelector("#erase-button");
const filterBtn = document.querySelector("#filter-select");

let oldInputValue;

// funções
    const saveTodo = (text) => {
        const todo = document.createElement('div');
        todo.classList.add('todo');

        const todoTitle = document.createElement('h3');
        todoTitle.innerText = text;
        todo.appendChild(todoTitle);

        //botões feito
        const doneBtn = document.createElement('button');
        doneBtn.classList.add('finish-todo');
        doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
        todo.appendChild(doneBtn);

        //botões edição
        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-todo');
        editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
        todo.appendChild(editBtn);

        //botões deletar
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('remove-todo');
        deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        todo.appendChild(deleteBtn);


        //lista
        todoList.appendChild(todo);

        todoInput.value = "";
        todoInput.focus();

        };
        
    const  toggleForms = () => {
        editForm.classList.toggle('hide');
        todoForm.classList.toggle('hide');
        todoList.classList.toggle('hide');
    };

    const updateTodo = (text) => {
        const todos = document.querySelectorAll('todo')

        todos.forEach((todos) => {
            let todoTitle = todo.querySelector('h3')

            if(todoTitle.innerText === oldInputValue) 
        })
    }


// eventos
    todoForm.addEventListener("submit", (e) => {
        e.preventDefault(); // ao enviar ele n recarrega a página

        const inputValue = todoInput.value;

        if(inputValue) {
            //save todo
            saveTodo(inputValue)
        }
    });

    // pegar todos os eventos de clicar

    //feito
    document.addEventListener('click', (e) => {
        const targetEl = e.target;
        const parentEl = targetEl.closest('div');
        let todoTitle;

    //titulo
        if(parentEl && parentEl.querySelector('h3')){
            todoTitle = parentEl.querySelector('h3').innerText;
        }


        if(targetEl.classList.contains('finish-todo')) {
            parentEl.classList.toggle('done');
        }

    //remover
        if(targetEl.classList.contains('remove-todo')) {
            parentEl.remove();
        }

    //edição
        if(targetEl.classList.contains('edit-todo')) {
            toggleForms();
        editInput.value = todoTitle; //muda o valor (edição)
        oldInputValue.value = todoTitle; //salva na memória
        }

    });

    cancelEditBtn.addEventListener('click', (e) => {
    e.preventDefault();

    toggleForms();
    });

    editForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const editInputValue = editInput.value;

        if(editInputValue) {
            //atualizar
            updateTodo(editInputValue);
        }

        toggleForms();

    });
