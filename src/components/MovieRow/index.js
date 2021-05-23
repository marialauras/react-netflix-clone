import React, { useState } from 'react';
import './styles.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const URL = 'https://image.tmdb.org/t/p/w300/';

function MovieRow(props){
    const [scroll_x, set_scroll_x] = useState(-400);
    function handle_arrow_back(){
        let x = scroll_x + Math.round( window.innerWidth/8);
        if( x > 0) x = 0
        set_scroll_x(x); 

    }
    function handle_arrow_forward(){
        let x = scroll_x - Math.round( window.innerWidth/8);
        let list_w = props.list.results.length * 150;
        if( (window.innerWidth - list_w) > x ) x = (window.innerWidth - list_w) - 60;
        set_scroll_x(x); 
        
    }
    return(
        <div id="movie_row_cp">
            
            <h2>{props.title}</h2>
            
            <div className="arrow_back" onClick={handle_arrow_back}>
                <ArrowBackIosIcon style={{fontSize: 40}}/>
            </div>
            <div className="arrow_forward" onClick={handle_arrow_forward}>
                <ArrowForwardIosIcon style={{fontSize: 40}}/>
            </div>

            <div className="list_area"> 
                <div className="list"  style={{ marginLeft: scroll_x, width: props.list.results.length * 150}}>
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