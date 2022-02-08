import React from 'react';
import {Link} from '@reach/router';



const NavBar = (props) => {

    

    return(
        <div className="nav-bar-flex">
            <span className="span-style">
                <Link className="link-style" to="/projects/box"><h2>Box Generator</h2></Link>
            </span>
            
            <span className="span-style">
                <Link className="link-style" to="/projects/tab"><h2>Tabs</h2></Link>
            </span>
            <span className="link-style">
                <Link className="link-style" to="projects/list"><h2>Todo List</h2></Link>
            </span>
        </div>
    )
}

export default NavBar;