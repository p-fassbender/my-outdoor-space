import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_REPLY } from '../../utils/mutations';
import { QUERY_GENRES, QUERY_ME, QUERY_THREAD, QUERY_THREADS, QUERY_TOPICS, QUERY_USER } from '../../utils/queries';

<<<<<<< HEAD
const ReplyForm = ({thread}) => {
    const [formState, setFormState] = useState({content: ''});
=======
const ReplyForm = ({ threadId }) => {

    const [content, setContent] = useState('');
>>>>>>> 44a4b1d36cb6f312f5ea860100b07efc467f0e50
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
<<<<<<< HEAD
                variables: { content: formState.content, thread: thread }
=======
                variable: { content, threadId }
>>>>>>> 44a4b1d36cb6f312f5ea860100b07efc467f0e50
            });
            setFormState('');
            setCharacterCount(0);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className='m-4'>
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
<<<<<<< HEAD
                    placeholder="Leave a reply to this thread..."
                    name='content'
                    value={formState.content}
                    className="form-input col-12"
=======
                    placeholder="Reply to this thread."
                    value={content}
                    className="form-input col-12 col-md-9"
>>>>>>> 44a4b1d36cb6f312f5ea860100b07efc467f0e50
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