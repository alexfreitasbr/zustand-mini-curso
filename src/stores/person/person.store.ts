import { create, StateCreator} from 'zustand'

import { persist } from 'zustand/middleware'
import { customSessionStorage } from './storages/session-storage.storage.ts';

// interface Person {
//     id: number,
//     firstName: string,
//     lastName: string,
// }


interface PersonState {
    firstName: string,
    lastName: string,
}

interface Actions {

    setFirstName: (firstName: string) => void;
    setLastName: (lastName: string) => void;
}

const storeAPI: StateCreator<PersonState & Actions> = (set) => ({

        firstName:"",
        lastName:"",

        setFirstName: (firstName: string) => set(state =>({ firstName })),
        setLastName: (lastName: string) => set(state =>({ lastName })),   

})



// const localStorage: StateStorage ={
//     getItem: function (name: string): string | null | Promise<string | null> {  
//         throw new Error('Function not implemented.');
//     },
//     setItem: function (name: string, value: string): unknown {
//         throw new Error('Function not implemented.');
//     },
//     removeItem: function (name: string): unknown {
//         throw new Error('Function not implemented.');
//     }
// }


export const usePersonStore = create<PersonState & Actions>()(
    persist(storeAPI, {name: 'person-storage',storage: customSessionStorage})
);