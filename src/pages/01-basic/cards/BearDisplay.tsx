import { WhiteCard } from '../../../components';
import { useBearStore } from '../../../stores';
import { useShallow } from 'zustand/shallow';


export const BearDisplay = () => {
   const bears = useBearStore(state => state.bears);  
   const addBear = useBearStore(useShallow(state => state.addBear));
   const clearBears = useBearStore(useShallow(state => state.clearBears));
  return (

    <WhiteCard centered>
      <h2>Osos</h2>
      <ul>
        {bears.map((bear) => (
          <li key={bear.id}>{bear.name}</li>
        ))}
      </ul>
      <button onClick={() => addBear()}>
        Agregar Oso
      </button>
      <button onClick={clearBears}>
        Limpiar Osos
      </button>
    </WhiteCard>
  )
}