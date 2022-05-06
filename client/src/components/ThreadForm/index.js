import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_THREAD } from '../../utils/mutations';
import { QUERY_THREADS } from '../../utils/queries';


const ThreadForm = () => {

  const [formState, setFormState] = useState({threadTitle: '', threadContent: ''});
  const [characterCount, setCharacterCount] = useState(0);
  const [addThread, { error }] = useMutation(ADD_THREAD, {
    update(cache, { data: { addThread } }) {

        const { threads } = cache.readQuery({ query: QUERY_THREADS });
        cache.writeQuery({
          query: QUERY_THREADS,
          data: { threads: [addThread, ...threads] },
        });
      }
  });
    

  const handleChange = event => {
    if (event.target.value.length <= 100) {
      setFormState(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      // add thread to database
      await addThread({
        variables: { threadTitle: formState.threadTitle, threadContent: formState.threadContent }
      });

      // clear form value
      setFormState('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h2 className='card-header text-center'>Start a new Thread</h2>
      <p className={`ms-3 mt-1 mb-1 ${characterCount === 100 ? 'text-error' : ''}`}>
        Character Count: 0/100
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="mx-3 flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}>
        <div>
          <textarea
            placeholder="New thread title here."
            value={formState.threadTitle}
            className="form-input col-12"
            onChange={handleChange}
          ></textarea>
          
          <textarea rows='10'
            placeholder="Add content to thread."
            value={formState.threadContent}
            className="form-input col-12"
            onChange={handleChange}
          ></textarea>
        </div>  
        <button className="btn col-12" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};


export default ThreadForm;