import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";

function NowPlaying () {
    // Membuat state movies
    const [movies, setMovies] = useState ([]);

    useEffect(() => {
        getNowPlaying();
    }, []);
  
    async function getNowPlaying(){
            // Fetch data dari axios
            const response = await axios(ENDPOINTS.NOWPLAYING);
        
            // Simpan data ke state movie
            setMovies(response.data.results);
       
    }
    return (
        <>
            <Hero/>
            <Movies title="Now Playing" movies={movies}/>
        </>

    );
}


export default NowPlaying;