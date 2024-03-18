import { useEffect, useState } from 'react';
import './Drone.scss';

export const Drone = () => {
  const [horizontalSpeed, setHorizontalSpeed] = useState(0);
  const [verticalSpeed, setVerticalSpeed] = useState(15);

  const maxSpeed = 100;
  const acceleration = 0.5;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          setHorizontalSpeed(Math.max(horizontalSpeed - acceleration, -maxSpeed));
          break;
        case 'ArrowRight':
          setHorizontalSpeed(Math.min(horizontalSpeed + acceleration, maxSpeed));
          break;
        case 'ArrowUp':
          setVerticalSpeed(Math.min(verticalSpeed + acceleration, maxSpeed));
          break;
        case 'ArrowDown':
          setVerticalSpeed(Math.max(verticalSpeed - acceleration, -maxSpeed));
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [horizontalSpeed, verticalSpeed]);

  return (
    <div className="drone" style={{
      transform: `translate(${horizontalSpeed}px) rotate(180deg)`,
      animationDuration: `${verticalSpeed}s`,
    }}></div>
    
  );
};