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
                    <h1 className="featured_name">{props.item.original_name}</h1>
                    <div className="featured_info">
                        <p>{props.item.vote_average} pontos</p>
                        <p>{first_date.getFullYear()}</p>
                        <p>{props.item.number_of_seasons} temporada{props.item.number_of_seasons !== 1 ? 's' : ''}</p>
                    </div>
                    <p className="featured_description">{props.item.overview}</p>
                    <div className="featured_buttons">
                        <button> ▶ Assistir </button>
                        <button> + Minha Lista </button>
                    </div>
                    <p className="featured_genres"><b>Gêneros:</b> {genres.join(', ')}</p>
                </div>
            </div>
        </section>
    )
}

export default FeaturedMovie;