import { create, StateCreator} from 'zustand'
import type { Task, TaskStatus} from '../../interfaces';
import { devtools } from 'zustand/middleware';


interface TaskState{
    tasks: Record<string, Task>

    draggingTaskId?: string;
    draggingOverId?: string;

    getTaskStatus: (status:TaskStatus) => Task[]

    setDraggingTaskId: (taskId:string) => void

    setDraggingOverId: (title:string) => void


    moveItem: () => void
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

     draggingTaskId: undefined,

     setDraggingTaskId:(taskId:string) => {
        set({ draggingTaskId: taskId });
     },

    setDraggingOverId:(title:string) => {
        set({ draggingOverId: title });
    },

    moveItem:() => {

        if(!get().draggingTaskId || !get().draggingOverId) return;
        const taskId = get().draggingTaskId;
        const draggingOverId:TaskStatus = get().draggingOverId as TaskStatus;

        if(!taskId || !draggingOverId) return;

            const task = get().tasks[taskId ];
            task.status = draggingOverId as TaskStatus;
            
            const newTasks = {
                ...get().tasks,
                [taskId]: {
                ...get().tasks[taskId ],
                          status: draggingOverId as TaskStatus,
                 },
            }
            set({tasks: newTasks})  

            set({ draggingTaskId: undefined });
            set({ draggingOverId: undefined });
    }

})

export const useTaskStore = create<TaskState>()(
    devtools(
        storyApi, { name: 'Task Store' }
    )
);