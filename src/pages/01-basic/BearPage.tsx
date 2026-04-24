import { WhiteCard } from '../../components';
import { useBearStore } from '../../stores';
import { BlackBear } from './cards/blackBearCard';

export const BearPage = () => {
  const polarBears = useBearStore(state => state.polarBears);
  const pandaBears = useBearStore(state => state.pandaBears);
  const increasePolarBears = useBearStore(state => state.increasePolarBears);
  const increasePandaBears = useBearStore(state => state.increasePandaBears);
  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">

        <BlackBear />

        <WhiteCard centered>
          <h2>Osos Polares</h2>

          <div className="flex flex-col md:flex-row">
            <button onClick={() => increasePolarBears(1)}> +1</button>
            <span className="text-3xl mx-2 lg:mx-10"> {polarBears} </span>
            <button onClick={() => increasePolarBears(-1)}  >-1</button>

          </div>

        </WhiteCard>

        <WhiteCard centered>
          <h2>Osos Pandas</h2>

          <div className="flex flex-col md:flex-row">
            <button onClick={() => increasePandaBears(1)}> +1</button>
            <span className="text-3xl mx-2 lg:mx-10"> {pandaBears} </span>
            <button onClick={() => increasePandaBears(-1)}>-1</button>
          </div>

        </WhiteCard>




      </div>

    </>
  );


};

