import { Button } from '../../components/Button/Button';
import { ScoreBoard } from '../../components/ScoreBoard/ScoreBoard';
import './HomePage.scss';

export const HomePage = () => {
  return (
    <section className="home">
      <h1 className='home__greeting'>Welcome to the game!</h1>

      <ScoreBoard />

      <Button />
    </section>
  );
}