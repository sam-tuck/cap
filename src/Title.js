import React, {useState} from 'react';
 import {Link} from 'react-router-dom';
 import {useAuth} from './context/auth'

function Title() {

  const { login } = useAuth();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    
    login({ username, password });
  }
  return (
    <div>              
        <header>
            <h1>Throw Down</h1>
            <h2>Get your game on!</h2>
            </header>
    
    <Link to="/user/page" className='open'>Game Finder</Link>
    <Link to="/user/post" className='open'>Post</Link>
    <Link to="/signup" className='open'>Create new account</Link>

    <form action="post" className="open">
            <input type="text" name="Username" 
            id="Username" placeholder="Username" 
            value={username} onChange={(e) => setUsername(e.target.value)} required/>

            <input type="password" name="Pasword" 
            id="Password" placeholder="Password" 
            value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <br></br>
            <input type="submit" value="Submit" onClick={handleSubmit}/>
    </form>  
    
    </div>
  )
}

export default Title