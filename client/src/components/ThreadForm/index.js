import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_THREAD } from '../../utils/mutations';
import { QUERY_THREADS } from '../../utils/queries';

const ThreadForm = ({ topic }) => {
    const [formState, setFormState] = useState({ threadTitle: '', threadContent: '' });
    const [characterCount, setCharacterCount] = useState(0);

    const [addThread, { error }] = useMutation(ADD_THREAD,
        {
            update(cache, { data: { addThread } }) {
                try {
                    const { threads } = cache.readQuery({ query: QUERY_THREADS, variables: {topic:topic}});
                    cache.writeQuery({
                        query: QUERY_THREADS,
                        data: { threads: [addThread, ...threads] },
                        variables: { topic: topic }
                    });
                } catch (e) {
                    console.log(error)
                }
            }
        });

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (event.target.value.length <= 100) {
            setFormState({
                ...formState,
                [name]: value,
            });
            setCharacterCount(event.target.value.length);
        }
        console.log(formState)
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
            <p className={`ms-3 mt-1 mb-1 ${characterCount === 100 ? 'text-error' : ''}`}>
                Character Count: {characterCount}/100
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