import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie/DetailMovie";
import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function Detail() {
    const {id} = useParams();
    const [movies, setMovies] = useState ([]);

    //jalankan useEffect
    useEffect(() => {
        getRecommendationMovies();
    },[id]);


   //membuat fungsi
   async function getRecommendationMovies(){

    const response = await axios(ENDPOINTS.RECOM(id)); 

    //set data movies ke state movies
    setMovies(response.data.results);
   }


    return(
        <div>
            <DetailMovie/>
            <Movies title="Recommendations Movie" movies={movies}/>
        </div>
    );
}

export default Detail;