import { WhiteCard } from '../../components';
import { BearCard } from './cards/BearCard';
import { useBearStore } from '../../stores';
import { useShallow } from 'zustand/shallow';
import { BearDisplay } from './cards/BearDisplay';

export const BearPage = () => {

   
  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <BearCard name="Osos Negros" />
        <BearCard name="Osos Polares" />
        <BearCard name="Osos Pandas" />
      </div>
      
      <BearDisplay />
      
      </>
    );


};

