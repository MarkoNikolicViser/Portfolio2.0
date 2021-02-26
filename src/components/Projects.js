import React,{useRef,useEffect} from 'react'
import FitPrirucnik from '../images/fitprirucnik.jpg'
import Movi3 from '../images/movi3.jpg'


const Projects=({dark})=>{
    const DarkProjects=useRef(null)
    const cardsRef=useRef(null)
    const cardRef=useRef(null)
    const cardRef2=useRef(null)
    const cardRef3=useRef(null)

useEffect(() => {
    if(dark){
        DarkProjects.current.style.backgroundColor="#222831";
        cardsRef.current.style.backgroundColor="#222831";
        cardRef.current.style.backgroundColor="#eeeeee";
        cardRef2.current.style.backgroundColor="#eeeeee";
        cardRef3.current.style.backgroundColor="#eeeeee";
        DarkProjects.current.style.color="#eeeeee";

    }
    else{
        cardsRef.current.style.backgroundColor="#eeeeee";
         DarkProjects.current.style.backgroundColor="#eeeeee";
         DarkProjects.current.style.color="#222831";
    }
}, [dark])

const Fit=()=>{
    window.open('https://github.com/MarkoNikolicViser/Fit');
}
const FitLive=()=>{
window.open('https://fitprirucnik.netlify.app');
}
const Movi3Live=()=>{
    window.open('https://movi3.netlify.app');
}
const Movi3Git=()=>{
    window.open('https://github.com/MarkoNikolicViser/MovieApp')
}

    return(
        <div className="projects">
             <div className="x">
            <div className="krug"></div>
            </div>
            <h1 ref={DarkProjects}>Projects</h1>
            <div ref={cardsRef} className="projects-cards">
                <div ref={cardRef} className="card">
                    <img src={FitPrirucnik} alt=""/>
                    <h3>Fit prirucnik</h3>
                    <div className="used-tech">
                        <h5>HTML5</h5>
                        <h5>CSS3</h5>
                        <h5>React</h5>
                        <h5>REST</h5>
                    </div>
<p>Fit Prirucnik is a web application where users can track their calorie intake, and also there is a recipe option where they can search for meal ingredients, the data is stored in local storage,and its resets after 24 hours every day.</p>             
       <div className="btns">
                        <div className="btn-1" onClick={FitLive}>View live</div>
                        <div className="btn-1" onClick={Fit}>View code</div>
                    </div>
                 </div>
                    {/* /////////////////////////////// */}
                    <div ref={cardRef2} className="card">
                    <img src={Movi3} alt=""/>
                    <h3>Movi3</h3>
                    <div className="used-tech">
                        <h5>HTML5</h5>
                        <h5>CSS3</h5>
                        <h5>React</h5>
                        <h5>REST</h5>
                    </div>
<p>Movi3 is a web application where users can search for a specific movie or a tv show, and get a response in form of a list and link to the IMDB page of every title that contains searched frase.</p>
                    <div className="btns">
                        <div className="btn-1" onClick={Movi3Live}>View live</div>
                        <div className="btn-1" onClick={Movi3Git}>View code</div>
                    </div>
                    </div>
                     {/* /////////////////////////////// */}
                    <div ref={cardRef3} className="card">
                    <img src="" alt=""/>
                    <h3>Fit prirucnik</h3>
                    <div className="used-tech">
                        <h5>HTML5</h5>
                        <h5>CSS3</h5>
                        <h5>React</h5>
                        <h5>REST</h5>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, officia porro vero mollitia voluptatum, magnam distinctio totam atque similique, perspiciatis numquam dolorem perferendis. Magnam animi corrupti dolore porro tenetur atque.</p>
                    <div className="btns">
                        <div className="btn-1">View live</div>
                        <div className="btn-1">View code</div>
                    </div>
                    </div>
            </div>
        </div>
    )
}
export default Projects;