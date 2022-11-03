import React from 'react';
import {Link} from 'react-router-dom';
import { useAuth } from "./context/auth"
import axios from 'axios';
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
// import {faLeftLong, faRightLong} from "@fortawesome/fontawesome-svg-core/import.macro"
import {useSetting} from "./context/setting"
import Gamedeets from './pageSections/gamedeets';
import Gamereq from './pageSections/gamereq';
import Dropdown from './pageSections/dropdown';
// import {Photo} from "./pageSections/photo";



 function Page() {
    const { handleLogout } = useAuth();
    

    const {gametype, system, ruleset, systype, gamesinfo, setGamesinfo, setPlayer } = useSetting();


    function handleEvent(e) {
        e.preventDefault();
   
        axios.post("http://localhost:4000/user/refine", {
           gametype,
           system,
           ruleset,
           systype,
           idgames: (gamesinfo.idgames + 1),
        }).then((Response) => {
            const gg = Response.data[0],
                  pi = Response.data[1];           
            setGamesinfo(gg);
            // console.log(gg, 1);
            // console.log(pi, 2)
            setPlayer(pi)
        });
    }

    

    function idUp() {
        axios.post("http://localhost:4000/user/gamedeetsup", {
            idgames: (gamesinfo.idgames + 1),
        }).then((Response) => {
            const gg = Response.data[0],
                  pi = Response.data[1];           
            setGamesinfo(gg);
            // console.log(gg, 1);
            // console.log(pi, 2)
            setPlayer(pi)
    });
    }
    
    function idDown() {
        axios.post("http://localhost:4000/user/gamedeetsdown", {
        idgames: (gamesinfo.idgames - 1),
    }).then((Response) => {
        const gg = Response.data[0],
            pi = Response.data[1];           
        setGamesinfo(gg);
        console.log(gg, 1);
        console.log(pi, 2)
        setPlayer(pi)
    });
    }
    
    return (
    <div>
        <header>
        <h1>Throw down</h1>
        <h2>Get your game on!</h2>
        <ul id="nav"> 
            <li className='nav'><Link to="/" onClick={handleLogout}>Logout</Link></li>        
            <li className='nav'><Link to="/user/page">Game Finder</Link></li>  
            <li className='nav'><Link to="/user/post">Post</Link></li>     
        </ul>
    </header>
    <div className='flex'>
        <span className='content'>
            <form>
                <Dropdown/>
                <button id="submit" type="submit" onClick={handleEvent}>Refine Search</button>
            </form>
        </span>
        <button className="navBtn" id="left" disabled={gamesinfo.idgames === 1} onClick={idDown}></button>
        <span className='content'>
             <Gamedeets/>
        </span>
        <button className="navBtn" id="right" onClick={idUp}></button>
        <span className='content'>
            <Gamereq/>        
        </span>
        </div>
       
    </div>
    
    )
 }

 export default  Page;