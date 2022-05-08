import React from 'react'
import TopicList from '../TopicList';

const GenreList = ({ genres }) => {

    return (
        <div className="card m-4">
            {genres.map(genre => (
                <ul key={genre._id}>
                    <h2 className="card-header text-center">{genre.title}</h2>
                    <TopicList genre={genre}/>
                </ul>
            ))}
        </div>

    )
}

export default GenreList;