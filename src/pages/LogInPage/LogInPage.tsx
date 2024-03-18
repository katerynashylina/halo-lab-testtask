import { Select } from "../../components/Select/Select";
import { useLocalStorage } from "../../helpers/useLocalStorage";
import './LogInPage.scss';

export const LogInPage = () => {
  const [playerName, setPlayerName] = useLocalStorage('', 'player-name');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value);
  };

  return (
    <section className="login">
      <label className="login__label">
        Enter your name:
        <input
          type="text"
          className="login__input"
          value={playerName}
          onChange={handleInputChange}
          placeholder="Username"
        />
      </label>

      <Select />
    </section>
  );
}