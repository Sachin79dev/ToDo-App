let inp = document.querySelector('#task');
let addBtn = document.querySelector('#add');
let taskList = document.querySelector("#taskBox");
let edit = document.querySelector('#edit_task');



addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let task = inp.value

    if (task.trim() !== task) {
        return;
    }


    taskList.innerHTML += `
            <div class="li">
                <p>${task}</p>
                <div class="d-flex g-2">
                    <button class="btn btn-primary" id="edit_task">Edit</button>
                    <button class="btn btn-danger" id="delete_task">Delete</button>
                </div>
            </div>`

    inp.value = ''

})