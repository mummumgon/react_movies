
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link , useParams } from 'react-router-dom';
function Movie({id, medCoverImg, title, rating , genres, summary}){
  const x = useParams();
  useEffect(()=>{},[x]);
    return <li style={{width:`25%`,}}>
        <img src={medCoverImg} alt={`${title}이미지`}/>
          <h2>
            {(x.id === null || x.id === undefined) ? <Link to={`/movie/${id}`}>{title}({rating})</Link> : <span to={`/movie/${id}`}>{title}({rating})</span> }
            
          </h2>
          <ul className='col left'>
            {/* genres && genres.map genres가 존재하면 만들어라! error남 TypeError: Cannot read properties of undefined (reading 'map')*/}
            {genres && genres.map((g,idx) => <li key={g+idx} style={{ display :'inline-block', margin:"0 10px 0 0"}}><strong>{g}</strong></li>)}
          </ul>
          <p>{summary.length < 255 ? `${summary}` : `${summary.slice(0,255)}...`}</p><hr/>
    </li>
}

Movie.porpType={
  id:PropTypes.number.isRequired,
  medCoverImg :PropTypes.string.isRequired,
  title :PropTypes.string.isRequired,
  rating :PropTypes.string.isRequired,
  genres :PropTypes.string.isRequired,
  summary :PropTypes.string.isRequired,
}

export default Movie;