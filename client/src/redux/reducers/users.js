import { produce } from 'immer';
import axios from 'axios'

const intialState =
{
    usersList:
        [
            // { id: '222', firstName: 'tamar', lastName: 'levi', email: '2345r@gmail.com' },
            // { id: '12234567', firstName: 'רחל', lastName: 'כהן', email: '2345r@gmail.com' },
            // { id: '234567', firstName: 'שפרה', lastName: 'לוי', email: 'rety6@gmail.com' },
            // { id: '999567', firstName: 'טובה', lastName: 'לוין', email: 'tova44@gmail.com' },
            // { id: '122345678', firstName: 'יעל', lastName: 'אברהם', email: 'ya000@gmail.com' },
        ],
    activeUser: 3,
}

export default produce((state, action) => {
    switch (action.type) {
        case 'ADD_USER': { state.usersList.push(action.payLoad) }
            break;

        case 'REMOVE_USER':
            {             
                const index = state.usersList.findIndex(x => x.id == action.payLoad);            
                    if (index !== -1) {
                        state.usersList.splice(index, 1)
                        alert("שמך הוסר בהצלחה")
                    }
                    else
                        alert("שמך לא נמצא במערכת")
            }
            break;

        case 'UPDATE_USER': { state.usersList.find(x => x.id == action.payLoad.id).name = action.payLoad.name }
            break;

        case 'UPDATE_ACTIVE_USER': {
            state.activeUser = action.payLoad
        }
            break;
        case 'GET_ALL_USERS_LIST':
            { state.usersList = action.payLoad }
            break;
    }
}, intialState)
