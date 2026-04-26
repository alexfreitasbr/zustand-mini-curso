import { StateStorage } from 'zustand/middleware';
import { createJSONStorage} from 'zustand/middleware';


const fireBaseURL  = "https://zustand-storage-dc169-default-rtdb.firebaseio.com/zusteand"

const storageApi: StateStorage ={
    getItem: async function (name: string): Promise<string | null>  {
        try {
            const data = await fetch (`${fireBaseURL}/${name}.json`).then(res => res.json());
            return JSON.stringify(data);
        } catch(error){
            console.error('Error fetching data from Firebase:', error);
            throw error;
        }

    },
    setItem: async function (name: string, value: string): Promise<void> {
        const data = await fetch (`${fireBaseURL}/${name}.json`,{
            method: 'PUT', 
            body: value})
            .then(res => res.json());
            console.log('Data saved to Firebase:', data);
            return;
    },
    removeItem: function (name: string): void {
        sessionStorage.removeItem(name);
    }
}

export const fireBaseStorage = createJSONStorage(()=> storageApi);