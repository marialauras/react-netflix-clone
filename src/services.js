//A chave disponibilizada pela API
const API_KEY = 'your_key';

//A parte da URL que sempre irá se repetir
const API_BASE = 'https://api.themoviedb.org/3'; 

//Função que concatena a requisição enviada para a API
const basicFecth = async (url_endpoint) => {
    const request = await fetch(`${API_BASE}${url_endpoint}`);
    const json = request.json();
    return( json );
}

        async function get_home_list(){
            return[
                {
                    slug: 'originals',
                    title: "Originais do Netflix",
                    items: await basicFecth(`/discover/tv/?with_network=213&language=pt-BR&api_key=${API_KEY}`)
                },
                {
                    slug: 'trending',
                    title: "Recomendados para Você",
                    items: await basicFecth(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
                },
                {
                    slug: 'toprated',
                    title: "Em Alta",
                    items: await basicFecth(`/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`)
                },
                {
                    slug: 'action',
                    title: 'Ação',
                    items: await basicFecth(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
                },
                {
                    slug: 'adventure',
                    title: "Aventura",
                    items: await basicFecth(`/discover/movie?with_genres= 12&language=pt-BR&api_key=${API_KEY}`)
                },
                {
                    slug: 'comedy',
                    title: "Comédia",
                    items: await basicFecth(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
                },
                {
                    slug: 'romance',
                    title: "Romance",
                    items: await basicFecth(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
                },
                {
                    slug: 'documentary',
                    title : "Documentários",
                    items : await basicFecth(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
                },
            ];
        }

        async function get_movie_info( movie_id, type){
            let info = await basicFecth('/'+ type+'/'+ movie_id +'?language=pt-BR&api_key='+API_KEY);
            return info;
        }
    

export default {get_home_list, get_movie_info};




