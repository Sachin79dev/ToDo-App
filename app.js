let inp = document.querySelector('#task');
let addBtn = document.querySelector('#add');
let taskList = document.querySelector("#taskBox");


let editId = null;

let id = 0;



let addTodo = addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let task = inp.value

    if (task.trim() !== task) {
        return;
    }


    if (editId) {
        editId.textContent = inp.value;
        editId = null;
        inp.value = '';
        return;
    }



    // let ids = document.querySelector('.ids');

    // ids.setAttribute('id', id)

    id++

    taskList.innerHTML += `
            <div class="li" id="${id}">
                <p class="ids">${task}</p>
                <div class="d-flex g-2">
                    <button class="btn btn-primary edit_task">Edit</button>
                    <button class="btn btn-danger delete_task">Delete</button>
                </div>
            </div>`
    inp.value = ''

    let del = document.querySelectorAll('.delete_task')

    del.forEach((btn) => {
        btn.addEventListener('click', () => {
            btn.closest('.li').remove()
        })
    })


    let edit = document.querySelectorAll('.edit_task');

    edit.forEach((upt) => {
        upt.addEventListener('click', () => {
            let taskItem = upt.closest('.li');
            let taskText = taskItem.querySelector('.ids');

            inp.value = taskText.textContent;

            editId = taskText;

            console.log(editId);
            
        })
    })

})
