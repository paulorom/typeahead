import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { suggestionShape } from '../../prop-types';

const SuggestionsList = React.forwardRef(({ onPick, cursor, setCursor, suggestions, setTerm, handleBlur }, ref) => {
  if (suggestions.length === 0) {
    return null;
  }

  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setCursor(-1)
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown);
  })

  useEffect(() => {
    if (selected) {
      onPick(selected)
   //   SubmitTerm(selected.name)
      handleBlur(null)
      setTerm('')
    }
  }, [selected]);

  const setKeyCode = (keyCode) => {
    if (suggestions.length && keyCode) {
      switch (keyCode) {
        case 38:
          if (suggestions.length) {
            setCursor(prevState => (prevState > 0 ? prevState - 1 : suggestions.length - 1));
          }
          break;
        case 40:
          if (suggestions.length) {
            setCursor(prevState => prevState < suggestions.length - 1 ? prevState + 1 : 0);
          }
          break;
        case 13:
          setSelected(suggestions[cursor])
          break;
        default:
          break;
      }
    }
  };

  const handleKeyDown = (e) => {
    setKeyCode(e.keyCode)
  }

  const onSuggestionHover = i => {
    setCursor(i)
  }

  const onSuggestionListLeave = () => {
    setCursor(null)
  }

  return (
    <ul tabIndex="-1" onMouseLeave={() => onSuggestionListLeave()}>
      {suggestions.map((item, i) => (
        <li
          key={item.name}
          className={clsx({ highlight: cursor === i })}
          onClick={() => setSelected(item)}
          onMouseEnter={() => onSuggestionHover(i)}
        >
          <span className="name">{item.name}</span>
          <span className="times">{item.times}</span>
        </li>
      ))}
    </ul>
  );
});

SuggestionsList.propTypes = {
  suggestions: PropTypes.arrayOf(suggestionShape).isRequired,
  cursor: PropTypes.number,
};

SuggestionsList.defaultProps = {
  cursor: undefined,
};

export default SuggestionsList;