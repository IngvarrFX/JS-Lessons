import React, {useState} from "react";
import API from "./API";
import "./lesson_3";

type MovieDescriptionType = {
    Poster: string
    Title: string
    Type: string
    Year: string
    imdbID: string
}


const Lesson3 = () => {
    const [searchName, setSearchName] = useState("");
    const [serachResult, setSerachResult] = useState("");
    const [searchNameByType, setSearchNameByType] = useState("");
    const [serachResultByType, setSerachResultByType] = useState("");
    const [poster, setPoster] = useState("")
    const [posters, setPosters] = useState<Array<MovieDescriptionType>>([])


    const searchFilm = () => {
        API.searchFilmsByTitle(searchName)
            .then((response) => {
                setSerachResult(JSON.stringify(response.data))
                setPoster(response.data.Poster)
            })
    };

    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : "";
        API.searchFilmsByType(searchNameByType, type)
            .then((response) => {
                setSerachResultByType(JSON.stringify(response.data))
                setPosters(response.data.Search)
            })
    }

    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                <div>
                    {serachResult}
                    <img src={poster} alt=""/>
                </div>
            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                <input type="text" value={searchNameByType}
                       onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t="movie">Movie</button>
                <button onClick={searchByType} data-t="series">Series</button>
                <div>
                    {serachResultByType}
                    {posters.map(poster => {
                        return(
                            <img src={poster.Poster} alt=""/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
export default Lesson3;