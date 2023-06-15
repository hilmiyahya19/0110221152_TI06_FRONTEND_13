import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";

function Popular () {
    // Membuat state movies
    const [movies, setMovies] = useState ([]);

    useEffect(() => {
        getPopularMovies();
    }, []);
  
    async function getPopularMovies(){
            // Fetch data dari axios
            const response = await axios(ENDPOINTS.POPULAR);
        
            // Simpan data ke state movie
            setMovies(response.data.results);
       
    }

    console.log(movies);
    return (
        <>
            <Hero/>
            <Movies title="Popular Movies" />
        </>

    );
}

export default Popular;