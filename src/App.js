import reactDom from "react-dom";
import React, {useEffect, useState} from 'react';
import api from "./services";
import Header from './components/Header'
import MovieRow from './components/MovieRow'
import FeaturedMovie from './components/FeaturedMovie'
import './App.css'

function App() {

    //Variavél que irá armazenar a lista de filmes
    //Ela é iniciada com array vazio
    const [movie_list, set_movie_list] = useState([]);
    
    //Variavél que irá armazenar o filme em destaque
    //Ela é iniciada com vazio
    const [feature_data, set_feature_data] = useState(null);

    //Variavél que irá armazenar a posição do header
    //Ela é iniciada com vazio
    const [header_background, set_header_background] = useState(false);

    async function load_all(){
        //Pegando lista total de filmes
        let list = await api.get_home_list();
        set_movie_list(list);

        //Pegando o filme em destaque
        let originals = list.filter(i=>i.slug === 'originals');
        let random_movie = Math.floor(Math.random() * (originals[0].items.results.length - 1) );
        let movie = originals[0].items.results[random_movie];
        let movie_info = await api.get_movie_info(movie.id,'tv');
        set_feature_data(movie_info);
    }

    function scroll_listener(){
        if(window.scrollY > 10){
            set_header_background(true);
        }else{
            set_header_background(false);
        }
    }

    //Ao carregar a página a função é acionada
    useEffect(()=>{
        load_all();
        scroll_listener();
        window.addEventListener('scroll', scroll_listener);

        return () =>{
          window.removeEventListener('scroll', scroll_listener);
        }
      }, []);

  return (
    <>
   <Header background={header_background}/>
    <main>
        {feature_data != null && <FeaturedMovie item={feature_data}/>}
        <section className="lists">
            {movie_list.map((item, key)=>(
              <MovieRow key={key} title={item.title} list={item.items}/>
            ))}
        </section>
    </main>
    </>
  );
}

export default App;
