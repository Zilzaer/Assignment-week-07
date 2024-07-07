import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const MovableGif = ({ gifUrl, areaWidth, areaHeight, step }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const handleKeyDown = (e) => {
      setPosition((prevPosition) => {
        let newTop = prevPosition.top;
        let newLeft = prevPosition.left;

        switch (e.key) {
          case 'ArrowUp':
            newTop = Math.max(prevPosition.top - step, 0);
            break;
          case 'ArrowDown':
            newTop = Math.min(prevPosition.top + step, areaHeight - gifHeight);
            break;
          case 'ArrowLeft':
            newLeft = Math.max(prevPosition.left - step, 0);
            break;
          case 'ArrowRight':
            newLeft = Math.min(prevPosition.left + step, areaWidth - gifWidth);
            break;
          default:
            break;
        }

        return { top: newTop, left: newLeft };
      });
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [areaWidth, areaHeight, step]); // Updated dependencies

  const gifHeight = 100; // Adjust this to your GIF's actual height
  const gifWidth = 100; // Adjust this to your GIF's actual width

  return (
    <div
      style={{
        position: 'relative',
        width: areaWidth,
        height: areaHeight,
        border: '1px solid black',
        overflow: 'hidden',
      }}
    >
      <img
        src={gifUrl}
        alt="movable gif"
        style={{
          position: 'absolute',
          top: position.top,
          left: position.left,
          height: gifHeight,
          width: gifWidth,
        }}
      />
    </div>
  );
};

MovableGif.propTypes = {
  gifUrl: PropTypes.string.isRequired,
  areaWidth: PropTypes.number.isRequired,
  areaHeight: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
};


export default MovableGif;