import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";

function DetailView(props) {
    const params = useParams()
    const [movie, setMovie] = useState(null)


    useEffect(()=>{
        getMovieData(params.id).then((response)=>{setMovie(response)}).catch((e)=>e)
    },[])

    async function getMovieData(id) {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c0a78ffb347190a25af7bfb7f935167a`)

        if (response.status !== 200) {
            throw new Error("Something is no yes")
        }
        const data = await response.json()
        return data
    }

    return (
        <div>
            {movie ?(
              <div>

                  <h2>{movie.title}</h2>
                  <p>{movie.overview}</p>
                  {movie.production_companies.map((company)=>(

                      <img key={company.id} style={{width: "100px", float: "left" }} src={`https://image.tmdb.org/t/p/original/${company.logo_path}`}
                           alt={`Logo of ${company.name}.`}/>

                  ))}
                    <Link to="/">Go to homepage</Link>
              </div>
            ):(
                <h2>Loading...</h2>
            )}

        </div>
    );
}

export default DetailView;
