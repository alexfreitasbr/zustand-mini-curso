import { create, StateCreator} from 'zustand'
import type { Task, TaskStatus} from '../../interfaces';


interface TaskState{
    tasks: Record<string, Task>

    getTaskStatus: (status:TaskStatus) => Task[]
}

const storyApi: StateCreator<TaskState> = (set,get) => ({
    tasks:{
        'ABC-123': {id:'ABC-123', title:'Task 1', status:'open'},
        'DEF-456': {id:'DEF-456', title:'Task 2', status:'in progress'},
        'GHI-789': {id:'GHI-789', title:'Task 3', status:'done'},
        'JKL-012': {id:'JKL-012', title:'Task 4', status:'open'},
    },

     getTaskStatus:(status:TaskStatus) => {
        const tasks = Object.values(get().tasks);
        return tasks.filter(task => task.status === status);
     },
})

export const useTaskStore = create<TaskState>()(storyApi);

// import { create, StateCreator} from 'zustand'

// import { devtools, persist } from 'zustand/middleware'
// import { fireBaseStorage } from '../storages/fireBase.storage';


// interface PersonState {
//     firstName: string,
//     lastName: string,
// }

// interface Actions {

//     setFirstName: (firstName: string) => void;
//     setLastName: (lastName: string) => void;
// }

// const storeAPI: StateCreator<PersonState & Actions, [["zustand/persist", unknown], ["zustand/devtools", never]]> = (set) => ({

//         firstName:"",
//         lastName:"",

//         setFirstName: (firstName: string) => set(({ firstName }),false,'setFirstName'),
//         setLastName: (lastName: string) => set(({ lastName }),false,'setLastName'),   

// })

