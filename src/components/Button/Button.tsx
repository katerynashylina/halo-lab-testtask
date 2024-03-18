import { useNavigate } from 'react-router-dom';
import './Button.scss';

export const Button = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/choose')
  };

  return (
    <button
      className="button"
      onClick={handleButtonClick}
    >
      Start
    </button>
  );
}