import { create } from 'zustand'


interface Bears {
    id: number,
    name: string,
}


interface BearState {
    blackBears: number;
    polarBears: number;
    pandaBears: number;

    increaseBlackBears: (by: number) => void;
    increasePolarBears: (by: number) => void;
    increasePandaBears: (by: number) => void;

    bears: Bears[];
    addBear: () => void;
    clearBears: () => void;

    getTotalBears: {
        totalBears: number;
    }

}




export const useBearStore = create<BearState>()((set, get) => ({
    blackBears: 16,
    polarBears: 5,
    pandaBears: 1,

    increaseBlackBears: (by: number) => set((state) => ({ blackBears: state.blackBears + by })),
    increasePolarBears: (by: number) => set((state) => ({ polarBears: state.polarBears + by })),
    increasePandaBears: (by: number) => set((state) => ({ pandaBears: state.pandaBears + by })),
    removeAllBears: () => set({ blackBears: 0, polarBears: 0, pandaBears: 0 }),


    bears:[{id:1,name:"#1 oso"}],
    addBear: () => set((state) => ({ 
        // bears: [...state.bears, bear] 
        bears: [...state.bears, {id:state.bears.length + 1, name:`#${state.bears.length + 1} oso`}] 
    })),
    clearBears: () => set({ bears: [] }),
    
    getTotalBears:{
        get totalBears() {
         return  get().blackBears + get().polarBears + get().pandaBears
        }
    }

}));