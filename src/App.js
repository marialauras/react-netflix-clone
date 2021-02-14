import reactDom from "react-dom";
import React, {useEffect, useState} from 'react';
import get_home_list from "./services";
import MovieRow from './components/MovieRow'
import './App.css'

function App() {

    //Variavél que irá armazenar a lista de filmes
    //Ela é iniciada com array vazio
    const [movie_list, set_movie_list] = useState([]);

    async function load_all(){
        //Pegando lista total de filmes
        let list = await get_home_list();
        set_movie_list(list);
    }

    //Ao carregar a página a função é acionada
    useEffect(()=>{
        load_all();
    });

  return (
    <div className="page">
        <section className="lists">
            {movie_list.map((item, key)=>(
              <MovieRow key={key} title={item.title} list={item.items}/>
            ))}
             
        </section>
    </div>
  );
}

export default App;
