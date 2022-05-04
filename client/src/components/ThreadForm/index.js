import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_THREAD } from '../../utils/mutations';

const ThreadForm = () => {

  const [threadTitle, setThreadTitle] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [addThread, { error }] = useMutation(ADD_THREAD);

  const handleChange = event => {
    if (event.target.value.length <= 200) {
      setThreadTitle(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      // add thread to database
      await addThread({
        variables: { threadTitle }
      });

      // clear form value
      setThreadTitle('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h1>Threads</h1>
      <p className={`m-0 ${characterCount === 200 ? 'text-error' : ''}`}>
        Character Count: 0/200
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}>
        <textarea
          placeholder="Add a new thread!"
          value={threadTitle}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></textarea>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};


export default ThreadForm;