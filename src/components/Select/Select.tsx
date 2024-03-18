import './Select.scss';
import options from '../../data/options.json';
import { useState } from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { Option } from '../../types/Options';
import { useLocalStorage } from '../../helpers/useLocalStorage';

export const Select = () => {
  const [selectedOption, setSelectedOption] = useLocalStorage(options.difficultyLevels[0], 'difficulty');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: Option) => {
    setSelectedOption(value);
    setIsOpen(false);

    setTimeout(() => {
      navigate('/game');
    }, 750)
  };

  return (
    <div className="select__wrapper">
      <div
        className={classNames('select', {
          'select--open': isOpen,
        })}
        onClick={toggleDropdown}
      >
        <div className="select--selected">{selectedOption.level} - {selectedOption.description}</div>
        <div className="select--open__icon">&#9660;</div>
      </div>
      {isOpen && (
        <div className="select__options options">
          {options.difficultyLevels.map((option) => (
            <div
              key={option.id}
              className={classNames('options__element', {
                'options__element--selected': option.id === selectedOption.id,
              })}
              onClick={() => handleOptionClick(option)}
            >
              {option.level} - {option.description}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}