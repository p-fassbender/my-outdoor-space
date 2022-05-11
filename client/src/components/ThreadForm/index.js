import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_THREAD } from '../../utils/mutations';
import { QUERY_GENRES, QUERY_ME, QUERY_THREAD, QUERY_THREADS, QUERY_TOPICS, QUERY_USER } from '../../utils/queries';

const ThreadForm = ({ topic }) => {
    const [formState, setFormState] = useState({ threadTitle: '', threadContent: '' });
    const [characterCount, setCharacterCount] = useState(0);

    const [addThread, { error }] = useMutation(ADD_THREAD,
        {
            refetchQueries:[
                QUERY_GENRES,
                QUERY_TOPICS,
                QUERY_THREADS,
                QUERY_ME,
                QUERY_USER,
                QUERY_THREAD
            ]
        });

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (event.target.value.length <= 200) {
            setFormState({
                ...formState,
                [name]: value,
            });
            setCharacterCount(event.target.value.length);
        }
    };

    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            // add thread to database
            await addThread({
                variables: { title: formState.threadTitle, content: formState.threadContent, topic: topic }
            });

            // clear form value
            setFormState('');
            setCharacterCount(0);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div>
            <h2 className='card-header text-center'>Start a new Thread</h2>
            <p className={`ms-3 mt-1 mb-1 ${characterCount === 200 ? 'text-error' : ''}`}>
                Character Count: {characterCount}/200
                {error && <span className="ml-2">     Something went wrong...</span>}
            </p>
            <form
                className="mx-3 flex-row justify-center justify-space-between-md align-stretch"
                onSubmit={handleFormSubmit}>
                <div>
                    <textarea
                        placeholder="New thread title here."
                        name='threadTitle'
                        value={formState.threadTitle}
                        className="form-input col-12"
                        onChange={handleChange}
                    ></textarea>

                    <textarea rows='10'
                        placeholder="Add content to thread."
                        name='threadContent'
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