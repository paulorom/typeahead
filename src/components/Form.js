import React, { useCallback, useState, useEffect } from 'react';
import ChosenSuggestions from './ChosenSuggestions';
import TypeaheadInput from './TypeaheadInput';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://diykd2rwv0.execute-api.us-east-1.amazonaws.com"
})

export default function Form() {
  const [chosen, setChosen] = useState([]);
  const [suggested, setSuggested] = useState([]);
  const [query, setQuery] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false)

  const onPick = useCallback(
    (picked) => {
      axiosInstance.post(`/typeahead`, { name: picked.name })
      setChosen(prevChosen => [...prevChosen, picked])
    },[],
  );

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      setShowSpinner(true)
      try {
        await axiosInstance.get(`/typeahead/${query}`, { signal }).then(function (response) {
          setSuggested(response.data)
          setShowSpinner(false)
        })
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('Request aborted');
        } else {
          setShowSpinner(false)
        }
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [query]);

  const onSearch = (term) => {
    setQuery(term)
  };

  return (
    <div>
      <TypeaheadInput showSpinner={showSpinner} suggestions={suggested} onSearch={onSearch} onPick={onPick} />
      <ChosenSuggestions suggestions={chosen} />
    </div>
  );
}
