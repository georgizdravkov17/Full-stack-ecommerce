import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const Header = () => {

   const navigate = useNavigate(); 

  return (
    <header>
        <div className="logo">
            <Link to="/">
                <h1>Site</h1>
            </Link>
        </div>

        <nav className="nav">
            <ul className="list">
                <li className="item"><Link to="/">Home</Link></li>
                <li className="item"><Link to="/products">Products</Link></li>
                <li className="item"><Link to="/users">Users</Link></li>
            </ul>
        </nav>

        <div className="buttons">
            <Button variant="primary" className="btn" onClick={() => { navigate("/register") }}>Sign up</Button>
            <Button variant="primary" className="btn" onClick={() => { navigate("/login") }}>Sign in</Button>
            <Button variant="primary" className="btn" onClick={() => { navigate("/shopping-card") }}>Shopping Card</Button>
        </div>
    </header>
  )
}

export default Header