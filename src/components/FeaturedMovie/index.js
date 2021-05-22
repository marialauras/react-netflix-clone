import React from 'react';
import './styles.css';

const URL = 'https://image.tmdb.org/t/p/original';


function FeaturedMovie(props){
    let first_date = new Date( props.item.first_air_date);
    let genres = [];
    for( let i in props.item.genres){
        genres.push( props.item.genres[i].name);
    }
    return(
        <section id="featured_movie_cp"
            style={{
                backgroundImage:`url(${URL}${props.item.backdrop_path})`
            }}
        >
            <div className="vertical">
                <div className="horizontal">
                    <h3>{props.item.original_name}</h3>
                    <div className="info">
                        <p className="featured_points">{props.item.vote_average} pontos</p>
                        <p className="featured_year">{first_date.getFullYear()}</p>
                        <p className="featured_seasons">{props.item.number_of_seasons} temporada{props.item.number_of_seasons !== 1 ? 's' : ''}</p>
                    </div>
                    <p className="description">{props.item.overview}</p>
                    <div className="buttons">
                        <button> ▶ Assistir</button>
                        <button>+ Minha Lista</button>
                    </div>
                    <div className="featured_genres"><b>Gêneros:</b> {genres.join(', ')}</div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedMovie;