// import { PopUp } from "../../components/PopUp/PopUp";
import { getDataFromLocalStorage } from '../../helpers/getLocalStorage';
import './GamePage.scss';
import options from '../../data/options.json';
import { playGame } from '../../helpers/fetchCaveData';
import { useEffect, useState } from 'react';
import { Drone } from '../../components/Drone/Drone';
import { Cave } from '../../components/Cave/Cave';
import { useAppDispatch } from '../../app/hooks';
import { setCaveData } from '../../features/caveData';
import { GameField } from '../../components/GameField/GameField';
import { Loader } from '../../components/Loader/Loader';

export const GamePage = () => {
  const selectedOption = getDataFromLocalStorage('difficulty', options.difficultyLevels[0]);
  const playerName = getDataFromLocalStorage('player-name', '');
  const dispatch = useAppDispatch();

  const [caveData, setCaveData] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const data = await playGame(playerName, selectedOption.level);
        setCaveData(data);
      } catch (error) {
        console.error('Error while playing the game:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <section className="game">
      {/* <Drone /> */}
      <Cave caveData={caveData} />
      {/* <PopUp
        title="Congratulations!"
        info="You successfully reached the end of a cave"
        button="Super!"
      /> */}

      {/* <PopUp
        title="Oops!"
        info="The drone has been destroyed"
        button="Okay"
      /> */}
    </section>
  );
}