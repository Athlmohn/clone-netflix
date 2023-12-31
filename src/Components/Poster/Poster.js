import React,{useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import './Poster.css'
import {imageUrl,API_KEY} from '../../Constants/constants'
import axios from '../../axios'
function Poster(props) {
  const [movies,setMovies]=useState([])
  const [urlId,seturlId] =useState('')
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    })
  },)
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,

    },
  };
   
const handleMovie=(id)=>{
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
         if(response.data.results.length!==0){
          seturlId(response.data.results[0])
         }else{
          console.log('Array Empty');
         } 
    })
}
  return (
   
      <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((movie)=>
          
          <img onClick={()=>handleMovie(movie.id)} className={props.isSmall ? 'smallposter' : 'poster'} src={`${imageUrl+movie.backdrop_path}`} alt='Poster'/>
            
        )}
      </div>
    { urlId &&  <Youtube opts={opts}  videoId={urlId.key}  /> }
    </div>
  )
}

export default Poster
