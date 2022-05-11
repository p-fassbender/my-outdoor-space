import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_REPLY } from '../../utils/mutations';
import { QUERY_GENRES, QUERY_ME, QUERY_THREAD, QUERY_THREADS, QUERY_TOPICS, QUERY_USER } from '../../utils/queries';

const ReplyForm = ({thread}) => {
    const [formState, setFormState] = useState({content: ''});
    const [characterCount, setCharacterCount] = useState(0);
    const [addReply, { error }] = useMutation(ADD_REPLY,
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

    const handleChange = event => {
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
            await addReply({
                variables: { content: formState.content, thread: thread }
            });
            setFormState('');
            setCharacterCount(0);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <p className="m-0">
                Character Count: {characterCount}/200
                {error && <span className="ml-2">Something went wrong...</span>}
            </p>
            <div>
                
            <form className="m-3 flex-column justify-content-center"
                onSubmit={handleFormSubmit}
            >
                <div>
                <textarea
                    placeholder="Leave a reply to this thread..."
                    name='content'
                    value={formState.content}
                    className="form-input col-12"
                    onChange={handleChange}
                ></textarea></div>

                <button className="btn btn-primary" type="submit">
                    Submit
                </button>
            </form>
            </div>
        </div>

    );
};

export default ReplyForm;