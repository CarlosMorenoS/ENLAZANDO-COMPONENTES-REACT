import React from 'react';
import {Link} from 'react-router-dom';
 
function NotFound() {
    return (
        <div>
            <h2>404 Not Found | La pagina a la que intenta acceder no existe!</h2>
            <br/>
            <Link to='/'><h2>Home</h2></Link>
        </div>
    );
}

export default NotFound;