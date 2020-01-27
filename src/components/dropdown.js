import React from 'react';
import {Link} from 'react-router-dom';

function Drop() {
    const tstyle= {
        color:"white",
        textDecoration:"none",
        justifyContent:"center"
        
    };
    return (
        <div className="dropdown">
            <span>Categories</span>
            <div className="dropdown-content" >
                <Link to="" style={tstyle}><p>UI/UX</p></Link>
                <Link to="" style={tstyle}><p>Web Development</p></Link>
                <Link to="" style={tstyle}><p>Python</p></Link>
                <Link to="" style={tstyle}><p>AI</p></Link>
                <Link to="" style={tstyle}><p>Blockchain Technology</p></Link>
                <Link to="" style={tstyle}><p>Cloud Computing</p></Link>
            </div>
        </div>
    )

}


export default Drop;