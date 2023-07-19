import PropTypes from 'prop-types';
import React, { useState, useEffect, useRef } from 'react';
import Spinner from './Spinner';
import './styles.css';
import SuggestionsList from './SuggestionsList';

export default function TypeaheadInput({ onPick, onSearch, suggestions, showSpinner }) {
  const timer = useRef(null);
  const[term, setTerm] = useState('');
  const[focused, setFocused] = useState(false);
  const[showSuggestions, setShowSuggestions] = useState(false);
  const[cursor, setCursor] = useState(null)

  const ref = useRef()

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  useEffect(() => {
    clearTimeout(timer.current);
    if(focused) {
      timer.current = setTimeout(() => {
        onSearch(term)
      }, 250);
      setShowSuggestions(true)
    } 
  }, [term, focused])

  const handleChange = e => {
    setTerm(e.target.value)
  }

  const handleBlur = (e) => {
    if (!e || !cursor || cursor === -1) {
      setFocused(false)
      setShowSuggestions(false)
      ref.current.blur();
    }
  }

  const handleFocus = () => {
    setFocused(true)
    setShowSuggestions(true)
  }

  return (
    <div className="TypeaheadInput">
      <input type="text" ref={ref} value={term} onBlur={handleBlur} onFocus={handleFocus} onChange={handleChange} />
      
      <Spinner show={showSpinner} />
        
      {showSuggestions && (
        <SuggestionsList
          onPick={onPick}
          cursor={cursor}
          setCursor={setCursor}
          setShowSuggestions={setShowSuggestions}
          handleBlur={handleBlur}
          setTerm={setTerm}
          suggestions={suggestions}
        />
      )}
    </div>
  );
}

TypeaheadInput.propTypes = {
  onPick: PropTypes.func.isRequired,
};