/* eslint-disable no-unreachable */
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";

function TopRated () {
    // Membuat state movies
    const [movies, setMovies] = useState ([]);

    useEffect(() => {
        getTopRated();
    }, []);
  
    async function getTopRated(){
            // Fetch data dari axios
            const response = await axios(ENDPOINTS.TOPRATED);
        
            // Simpan data ke state movie
            setMovies(response.data.results);
       
    }
    return (
        <>
            <Hero/>
            <Movies title="Top Rated" movies={movies}/>
        </>

    );

    return (
        <>
       
            <h2>TopRated</h2>
        </>

    );
}

export default TopRated;