import { produce } from "immer";
import axios from 'axios'

const intialState = {

    taskType:
        [
            { taskTypeId: '1', taskTypeName: 'באג' },
            { taskTypeId: '2', taskTypeName: 'מחיקה' },
            { taskTypeId: '3', taskTypeName: 'ליצור דף חדש' },
            { taskTypeId: '4', taskTypeName: 'ההעתקה' }
        ],

    tasksList:
        [
            //     { taskId: '10', taskTypeId: '1', taskName: 'שגיאה בכמות המלאי', taskDescription: 'נתן להזמין מוצר שלא קיים במלאי', UserTaskId: '222' },
            //     { taskId: '11', taskTypeId: '2', taskName: 'שגיאת יתרה', taskDescription: 'יש צורך לימחוק יתרה זו', UserTaskId: '1' },
            //     { taskId: '12', taskTypeId: '3', taskName: 'יצירת דף שקיים', taskDescription: 'נסיון ליצור דף כפול', UserTaskId: '222' },

        ]
}

export default produce((state, action) => {
    switch (action.type) {
        case 'ADD_TASK':

            {
                state.tasksList.push(action.payLoad)

            }
            break;
        case 'ADD_TASK_TYPE': { state.taskType.push(action.payLoad) }
            break;
        case 'DELETE_TASK':
            const index = state.tasksList.findIndex(x => x.taskId == action.payLoad.taskId);
            const task = Number(state.tasksList[index].taskId)
            try {
                axios.delete(`http://localhost:5000/task/${task}`)
            }
            catch {
                console.log("error");
            }
            finally {
                state.tasksList.splice(index, 1);
            }
            break;
        case 'GET_TASK_LIST':
            {
                state.tasksList = action.payLoad;
            }
            break;
        case 'GET_TASK_TYPE_LIST':
            {
                state.taskType = action.payLoad;
            }
            break;

    }
}, intialState)