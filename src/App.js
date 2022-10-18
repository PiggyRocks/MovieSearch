import {useEffect,useState} from 'react';
import'./App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard'

//315951a1
const API_URL="http://www.omdbapi.com?apikey=315951a1";

const movie1={
    
        "Title": "The Amazing Spiderman T4 Premiere Special",
        "Year": "2012",
        "imdbID": "tt2233044",
        "Type": "movie",
        "Poster": "N/A"
    

}


const App=()=>{

    const [movies,setMovies] =useState([]);
const [searchTerm ,setSearchTerm] =useState('');

const searchMovie = async (title)=>{
const response = await fetch(`${API_URL}&s=${title}`);
const data = await response.json();
//console.log(data.Search);
setMovies(data.Search);
}
 useEffect(()=>
 {
    searchMovie('Spiderman');
 },[]);  
 return (
 
 <div className="app">
<h1>Movie App</h1>
<div className='search'>
<input type="text"
      placeholder="Search for movies"
      value={searchTerm}
      onChange={(e)=>setSearchTerm(e.target.value)}
/>
<img 
src={SearchIcon}
alt="search"
onClick={()=>{
searchMovie(searchTerm)
}
                  }
/>

</div>

{
movies?.length >0 
? (<div className='container'>
    {movies.map((movie)=>(
 <MovieCard movie={movie} />
))}

</div>
) : (
     <div>
        <h2>No movies found</h2>
     </div>
)
 
}
</div>
 ) ;
}



export default App;