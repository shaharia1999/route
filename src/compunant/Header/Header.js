import React from 'react';
import "./Header.css"
import { Link, useMatch, useResolvedPath } from 'react-router-dom';


const Header = () => {
    function CustomLink({ children, to, ...props }) {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });
      
        return (
          <div>
            <Link
              style={{ color:match?'pink':'white', textDecoration: match ? 'none': "none" }}
              to={to}
              {...props}
            >
              {children}
            </Link>
           
          </div>
        );
      }
    return (
      
            <nav className='navber'>
                <ul >
                   <li><CustomLink to="/">Home</CustomLink></li>
                   <li><CustomLink to="/about">About</CustomLink></li>
                   <li><CustomLink to="/friends">Friends</CustomLink></li>
                   <li><CustomLink to="/page">PaGE</CustomLink></li>
               
                    
                </ul>

            </nav>
            
      
    );
};

export default Header;