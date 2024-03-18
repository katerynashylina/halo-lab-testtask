import { useNavigate } from 'react-router-dom';
import './PopUp.scss';

type Props = {
  title: string,
  info: string,
  button: string,
}

export const PopUp: React.FC<Props> = ({ title, info, button }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/')
  };

  return (
    <div className="popup">
      <h1 className='popup__title'>{title}</h1>
      <p className='popup__info'>{info}</p>

      <button
        className='popup__button'
        onClick={handleButtonClick}
      >
        {button}
      </button>
    </div>
  );
}