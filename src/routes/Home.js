import {useState , useEffect } from 'react';
import Movie from '../components/Movie';
import Detail from './Detail';
function Home(){
  const [loading, setloading] = useState(true);
  const [movies, setMoibes] = useState([]);
  //api받아오기
  const getMovies = async () => {
    const json = await(await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.9&sort_by=year')).json();
    setMoibes(json.data.movies);
    setloading(false);
  };
  useEffect(() => {
    getMovies();
  },[]);
  
  return<div>
    <h1>{loading ? 'LOADING...' : `MOVIES!!(${movies.length})`}</h1>
    { loading ? null : <ul style={{
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      flexWrap: 'wrap'
    }}>
      {movies.map((item) => 
      //<Movie key={item.id} 적으면 movie,js에 key값이 들어가짐
        <Movie key={item.id} id={item.id} medCoverImg={item.medium_cover_image} title={item.title} rating={item.rating} genres ={item.genres} summary={item.summary}/>
        )}
        
    </ul> } 
  </div>
}

export default Home;
