class Task {
    constructor(_name) {
        this.name = _name;
    }
    id = Math.random();
    status = false;
}

// function Task(_id, _taskName, _status) {
//     this.id = _id;
//     this.taskName = _taskName;
//     this.status = _status;
// }

// Task.prototype.changeColor=()=>{
//     console.log("xxx");
// }

// const task = new Task("xx");
// const task2= new Task("xx");
// // task.changeColor();
// console.log(task.changeColor === task2.changeColor);

// class Task {
//     constructor(_name) {
//         this.name = _name;
//     }
//     id = Date.now();
//     status = false;
// }