import {Link} from "react-router-dom";
import React, {useState} from "react";



export function Search() {
    const [value, setValue] = useState("")
    const [movies, setMovies] = useState([])


    async function getMovieData(query) {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=c0a78ffb347190a25af7bfb7f935167a&language=en-US&query=${query}&page=1&include_adult=false`)

        if (response.status !== 200) {
            throw new Error("Something is no yes")
        }
        const data = await response.json()
        return data.results
    }

    function handleSearch(event) {
        setValue(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        getMovieData(value).then((data) => setMovies(data))

    }

    return (
        <div>

            <form action="" onSubmit={handleSubmit}>

                <label htmlFor="search">
                    Search:
                </label>
                <input type="text" id="search" value={value} onChange={handleSearch}/>
                <button>search</button>

            </form>

            {movies.map((movie) => (
                <div key={movie.id} style={{
                    border: '1px solid lightcoral',
                    borderRadius: '4px',
                    padding: '10px',
                    margin: '10px'
                }}>
                    <h2><Link to={`/movie/${movie.id}`}>{movie.title}</Link></h2>

                    {movie.poster_path ? (
                        <img style={{width: '100%'}} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                             alt={`poster of ${movie.title}`}/>
                    ) : (
                        <h2>Sth went wrong</h2>
                    )}

                </div>

            ))}
        </div>
    )
}

