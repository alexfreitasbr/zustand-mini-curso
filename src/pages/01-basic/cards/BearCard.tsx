import { useBearStore } from '../../../stores';
import { WhiteCard } from '../../../components';
import { useShallow } from 'zustand/react/shallow';

type BlackBearProps = {
    name: "Osos Negros" | "Osos Polares" | "Osos Pandas";
};

export const BearCard = ({name}:BlackBearProps) => {
  const blackBears = useBearStore(useShallow(state => state.blackBears));
  const polarBears = useBearStore(useShallow(state => state.polarBears));
  const pandaBears = useBearStore(useShallow(state => state.pandaBears));
  const increaseBlackBears = useBearStore(useShallow(state => state.increaseBlackBears));
  const increasePolarBears = useBearStore(useShallow(state => state.increasePolarBears));
  const increasePandaBears = useBearStore(useShallow(state => state.increasePandaBears));

  const handleIncrease = (value:number)=>{
        switch (name) {
            case "Osos Negros":
                increaseBlackBears(value)
            break
            case "Osos Polares":
                increasePolarBears(value);
            break
            case "Osos Pandas":
                increasePandaBears(value);
            break
        }
  }

  const bearCount = (): number => {

            switch (name) {
            case "Osos Negros":
                return blackBears
            break
            case "Osos Polares":
                return polarBears;
            break
            case "Osos Pandas":
                return pandaBears;
            break
    }
  }

    return <WhiteCard centered>
      <h2>{name}</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => handleIncrease(1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {bearCount()} </span>
        <button onClick={() => handleIncrease(-1)}>-1</button>
      </div>

    </WhiteCard>;
  }