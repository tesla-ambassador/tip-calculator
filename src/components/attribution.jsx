import React from 'react';

function Attribution(props) {
    return (
        <footer>
            <span>Please double click for the custom input <br /></span>
            <span>A chellenge by <a a href="https://www.frontendmentor.io?ref=challenge" target={props.target} >frontend mentor. </a>Coded by <a href="https://www.frontendmentor.io/profile/tesla-ambassador" target={props.target} >Tesla Ambassador</a></span>
        </footer>
    );
}

export default Attribution;