import {useState , useEffect } from 'react';
import { useParams } from "react-router-dom";
import Movie from '../components/Movie'
function Detail(){
    const {id} = useParams();
    const [loading, setloading] = useState(true);
    const [selectMovis , setSelectMovie] = useState([]);
    const getMovies = async() => {
        const json = await(await fetch(`https:yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setSelectMovie(json.data.movie);
        setloading(false);
    };
    useEffect(() => {
        getMovies();
      },[]);
    return <div>
        {loading ? 'LOADING..' :
        <Movie id={selectMovis.id} medCoverImg={selectMovis.medium_cover_image} title={selectMovis.title} rating={selectMovis.rating} genres ={selectMovis.genres} summary={selectMovis.description_intro}/>
    }
    </div>
}

export default Detail;
// const x = useParams();
//console.log(x); => 이런형식 {id: '42604'}