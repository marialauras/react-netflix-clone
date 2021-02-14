import React from 'react';
import './styles.css';

const URL = 'https://image.tmdb.org/t/p/w300/';

function MovieRow(props){
    return(
        <div id="movie_row_cp">
            <h2>{props.title}</h2>
            <div className="list_area"> 
                <div className="list">
                    {props.list.results != undefined && props.list.results.length > 0 && props.list.results.map((item,key)=>(
                        <div key={key} className="item">
                            <img src={URL+item.poster_path} alt={item.original_title}/>
                        </div>
                      ))}
                </div>
            </div>
        </div>
    )
}

export default MovieRow;