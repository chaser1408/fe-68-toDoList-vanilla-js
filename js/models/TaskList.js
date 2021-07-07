function TaskList() {
    this.arr = [];
};

TaskList.prototype.addTask = function (task) {
    this.arr.push(task);
};

TaskList.prototype.taskFind = function (id) {
    return this.arr.findIndex(function (task) {
        return Number(id) === Number(task.id);
    })
};

TaskList.prototype.deleteTask = function (id) {
    var findID = this.taskFind(id);
    if (findID !== -1) {
        this.arr.splice(findID, 1);
    }
};

TaskList.prototype.changeStatus = function (id) {
    var changeTask = this.arr.find(task => Number(task.id) === Number(id));
    changeTask.status = !changeTask.status;
};