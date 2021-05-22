import reactDom from "react-dom";
import React, {useEffect, useState} from 'react';
import api from "./services";
import MovieRow from './components/MovieRow'
import FeaturedMovie from './components/FeaturedMovie'
import './App.css'

function App() {

    //Variavél que irá armazenar a lista de filmes
    //Ela é iniciada com array vazio
    const [movie_list, set_movie_list] = useState([]);
    //Variavél que irá armazenar o filme em destaque
    //Ela é iniciada com vazio
    const [featureData, setFeatureData] = useState(null);

    async function load_all(){
        //Pegando lista total de filmes
        let list = await api.get_home_list();
        set_movie_list(list);

        //Pegando o filme em destaque
        let originals = list.filter(i=>i.slug === 'originals');
        let randomMovie = Math.floor(Math.random() * (originals[0].items.results.length - 1) );
        let movie = originals[0].items.results[randomMovie];
        let movieInfo = await api.get_movie_info(movie.id,'tv');
        setFeatureData(movieInfo);
        console.log(featureData);
    }

    //Ao carregar a página a função é acionada
    useEffect(()=>{
        load_all();
    },[]);

  return (
    <div id="page">
        {featureData != null &&
            <FeaturedMovie item ={featureData}/>
        }
        <section className="lists">
            {movie_list.map((item, key)=>(
              <MovieRow key={key} title={item.title} list={item.items}/>
            ))}
        </section>
    </div>
  );
}

export default App;
