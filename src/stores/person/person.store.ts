import { create, StateCreator} from 'zustand'

import { devtools, persist } from 'zustand/middleware'
import { fireBaseStorage } from '../storages/fireBase.storage';


interface PersonState {
    firstName: string,
    lastName: string,
}

interface Actions {

    setFirstName: (firstName: string) => void;
    setLastName: (lastName: string) => void;
}

const storeAPI: StateCreator<PersonState & Actions, [["zustand/persist", unknown], ["zustand/devtools", never]]> = (set) => ({

        firstName:"",
        lastName:"",

        setFirstName: (firstName: string) => set(({ firstName }),false,'setFirstName'),
        setLastName: (lastName: string) => set(({ lastName }),false,'setLastName'),   

})






export const usePersonStore = create<PersonState & Actions>()(
    persist(
        devtools(storeAPI),
        {name: 'person-storage',storage: fireBaseStorage}
    )
);