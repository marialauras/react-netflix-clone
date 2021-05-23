import React from 'react';
import './styles.css';

function Header(props){
    return(
        <header id="header_cp" className={props.background ? "header_background" : ''}>
            <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-1-1.png" alt="logo"/>
            <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="user"/>
        </header>
    )
}

export default Header;