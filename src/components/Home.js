import React,{useEffect,useRef} from 'react'
import lik from '../images/lik.svg'

const Home=({dark})=>{

const HomeRef=useRef(null);
const Krug3Ref=useRef(null);


useEffect(() => {
    if(dark===true){
    HomeRef.current.style.backgroundColor="#222831";
    HomeRef.current.style.color="#eeeeee";
    Krug3Ref.current.style.backgroundColor="#eeeeee"
    }
    else{
        HomeRef.current.style.backgroundColor="#eeeeee";
        HomeRef.current.style.color="#222831";
        Krug3Ref.current.style.backgroundColor="#gray"  
    }
}, [dark])

    return(
        <div className="home" ref={HomeRef}>
            <h1>I'm Marko</h1>
            <h3>a front end web developer</h3>
            <img className="lik" src={lik} alt=""/>
            <div className="x">
            <div className="krug"></div>
            <div ref={Krug3Ref} className="krug3"></div>
        </div>
        <div className="x">
            <div className="krug2"></div>
        </div>
        </div>

    )
}
export default Home;
