var querySec = function (id1) {
    return document.querySelector(id1);
};

var getEle = function (id2) {
    return document.getElementById(id2);
};

var taskList = new TaskList();

getLocalStorage(taskList);

renderTask(taskList);

getEle('addItem').addEventListener('click', () => {
    var taskName = getEle('newTask').value;

    var checkTaskName = taskList.arr.find(task => String(task.name) === String(taskName));

    if (!taskName) {
        alert('Please input your Task!!');
    }
    else if (checkTaskName) {
        alert("Plese don't repeat your Task again!!");
    }
    else {
        var newTask = new Task(taskName);

        taskList.addTask(newTask);

        alert("Add new task success!!");

        setLocalStorage(taskList);

        renderTask(taskList);

        getEle('newTask').value = '';
    }
});

function deleteTask(id) {
    getLocalStorage(taskList);
    taskList.deleteTask(id);
    setLocalStorage(taskList);
    renderTask(taskList);
    alert('Delete task success!!');
};

function changeTask(id) {
    getLocalStorage(taskList);
    taskList.changeStatus(id);
    setLocalStorage(taskList);
    renderTask(taskList);
    alert('Change task status success!!');
};

// var renderTask = function (taskList) {
function renderTask(taskList) {
    getLocalStorage(taskList);
    let taskListTodo = taskList.arr.filter(task => task.status === false);
    let taskListDone = taskList.arr.filter(task => task.status === true);
    renderTaskTodo(taskListTodo);
    renderTaskDone(taskListDone);
};

// var renderTaskTodo = function (taskList) {
function renderTaskTodo(taskList) {
    let content = generateTaskList(taskList);
    getEle('todo').innerHTML = content;
};

// var renderTaskDone = function (taskList) {
function renderTaskDone(taskList) {
    let content = generateTaskList(taskList);
    getEle('complete').innerHTML = content;
};

// var generateTaskList = function (taskList) {
function generateTaskList(taskList) {
    var content = '';

    taskList.forEach(function (task, index) {
        content += `
                <li>
                    <span id="nameToDo" >${task.name}</span>
                    <div class="buttons">
                        <button id="idToDo" class="remove" onclick="deleteTask('${task.id}')">
                            <i class="fa fa-trash-alt "></i>
                        </button>

                        <button id="statusToDo" class="complete" onclick="changeTask('${task.id}')">
                            <i class="far fa-check-circle"></i>
                        </button>
                    </div>
                </li>
            `;
    });
    return content;
}

function getLocalStorage(taskList) {
    if (localStorage.getItem("TL")) {
        taskList.arr = JSON.parse(localStorage.getItem("TL"));
    }
    return taskList;
};

function setLocalStorage(taskList) {
    localStorage.setItem("TL", JSON.stringify(taskList.arr));
};




// getLocalStorage();



// const $q = function (v) {
//     return document.querySelector(v);
// };

// let taskList = [];
// if (localStorage.getItem("listItemLocal")) {
//     taskList = JSON.parse(localStorage.getItem("listItemLocal"));
// }

// renderTask();
// $q('#addItem').addEventListener('click', () => {
//     let taskName = $q('#newTask').value;
//     let newTask = new Task(taskName);
//     taskList.push(newTask);
//     localStorage.setItem("listItemLocal", JSON.stringify(taskList));
//     renderTask()
// })

// function renderTask() {
//     if (localStorage.getItem("listItemLocal")) {
//         taskList = JSON.parse(localStorage.getItem("listItemLocal"));
//     }
//     let taskListDone = taskList.filter(item => item.status === true);
//     let taskListTodo = taskList.filter(item => item.status === false);
//     renderTaskDone(taskListDone);
//     renderTaskTodo(taskListTodo);
// };

// function renderTaskTodo(arr) {
//     let content = createListTask(arr);
//     $q('#todo').innerHTML = content;
// }

// function renderTaskDone(arr) {
//     let content = createListTask(arr);
//     $q('#complete').innerHTML = content;
// }

// function checkTask(id) {
//     let changeItem = taskList.find(item => Number(item.id) === Number(id));
//     changeItem.status = !changeItem.status;
//     localStorage.setItem("listItemLocal", JSON.stringify(taskList));
//     renderTask();
// };

// function createListTask(arr) {
//     let content = ``;
//     arr.forEach(item => {
//         content += `<li>
//             <span id="nameToDo" >${item.name}</span>
//             <div class="buttons">
//                 <button class="remove" onclick="deleteTask('${item.id}')">
//                     <i class="fa fa-trash-alt "></i>
//                 </button>
//                 <button class="complete" onclick="checkTask('${item.id}')">
//                     <i class="far fa-check-circle"></i>
//                 </button>
//             </div>
//         </li>`
//     })
//     return content;
// }

// function deleteTask(id) {
//     let newTaskList = taskList.filter(item => Number(item.id) !== Number(id));
//     localStorage.setItem("listItemLocal", JSON.stringify(newTaskList));
//     renderTask();
// }
