export function addTask(newTask) {
    return { type: 'ADD_TASK', payLoad: newTask };
}
export function addTaskType(newTaskType) {
    return { type: 'ADD_TASK_TYPE', payLoad: newTaskType };
}
export function deleteTask(newTask)
{
    return {type:'DELETE_TASK',payLoad:newTask};
}

export function addUser(newUser) {
    return { type: 'ADD_USER', payLoad: newUser };
}

export function removeUser(newUser) {
    return { type: 'REMOVE_USER', payLoad: newUser };
}

export function updateUser(newUser) {
    return { type: 'UPDATE_USER', payLoad: newUser };
}

export function updateActiveUser(newUser) {
    return { type: 'UPDATE_ACTIVE_USER', payLoad: newUser };
}
export function getTaskList(tasksList){
    return{type:'GET_TASK_LIST',payLoad:tasksList}
}
export function getAllUsersList(usersList){
    return{type:'GET_ALL_USERS_LIST',payLoad:usersList}
}
export function getTaskTypeList(taskType){
    return{type:'GET_TASK_TYPE_LIST',payLoad:taskType}
}
