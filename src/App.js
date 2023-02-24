import logo from './logo.svg';
import './App.css';
// import { Canvas } from '@react-three/fiber';
import CanvasThree from './Components/CanvasThree'
import { Canvas, extend } from '@react-three/fiber';
import { useContext, useEffect, useRef, useState } from 'react';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import { Html } from '@react-three/drei';
import Typewriter from 'typewriter-effect';
import '../node_modules/swiper/swiper-bundle.min.css';
import { OrbitControls } from  'three/examples/jsm/controls/OrbitControls';
import ContactMe from './Components/ContactMe';
import { themeContext } from './Components/Context';

extend({OrbitControls})


function App() {

  // const [ contar, setContar ] = useState(0);

  const [ nav, setNav ] = useState({
    mostrarNav: false, 
    aboutme: false,
    projects: false,
    contactme: false,
  });

  const theme = useContext(themeContext);
  // const buttonRef = useRef(); 
  // const [ contar, setContar ] = useState(0);
  const typeWriterRef = useRef(); 


  const tecnology = ["React", "Angular", "Java", "Node js","Three js", "Hibernate"];
  let indexTecnology = 0;

  useEffect(() =>{
      // buttonRef.current.style.backgroundColor = 'papayawhip';
      // buttonRef.current.style.borderRadius = '25%';
      console.log('TypeWriter: ', typeWriterRef.current);
      // console.log(buttonRef.current.style);
      
      const typewriter = document.getElementById("typewriterid");
      let tecnologyLength = tecnology.length;
      let indexTecnology = 0;
      let arrayCaracteres;
      function tecnologyWrite(){
        arrayCaracteres = tecnology[indexTecnology].split('');
        // console.log(arrayCaracteres);
        typewriter.innerHTML = "";
  
        let rootElement = document.documentElement;
        let step = arrayCaracteres.length + 1;
        rootElement.style.setProperty('--step', step);

        let count = 0;
        let escribir = setInterval(() => {
            typewriter.innerHTML += arrayCaracteres[count];          
            count++;
            if(count === arrayCaracteres.length+1){
              if(indexTecnology === tecnologyLength-1){
                indexTecnology = 0;
              }else{
                indexTecnology++;
              }
              tecnologyWrite();
              clearInterval(escribir);
            }
        }, 300);
      }
      tecnologyWrite();
  },[]);

  const handleClick = (text) => {
    let state = {
      aboutme: false,
      projects: false,
      contactme: false,
    };
    if(text === "hamburguesa"){
      nav.mostrarNav === false ? setNav({...nav, ...state, mostrarNav: true}) : setNav({...nav, ...state, mostrarNav: false});
      nav.mostrarNav === true && theme.dispatch({type: "User"});
    }
    if(text === "aboutme"){
      nav.aboutme === false ? setNav({...nav, ...state, aboutme: true}) : setNav({...nav, ...state, aboutme: false});
      // console.log(nav);
    }
    if(text === "projects"){
      nav.projects === false ? setNav({...nav, ...state, projects: true}) : setNav({...nav, ...state, projects: false});
      // console.log(nav);
    }
    if(text === "contactme"){
      nav.contactme === false ? setNav({...nav, contactme: true}) : setNav({...nav, contactme: false});
      // console.log(nav);
    }
      // setContar(contar + 1);
      // console.log('en click');
  };

  return (
    <div className="main">
              {/* <Typewriter ref={typeWriterRef}
          onInit={typewriter => {
            typewriter
              .typeString('こんにちは！')
              .pauseFor(2000)
              .deleteAll()
              .typeString('¡Buenas tardes!')
              .start();
          }}
        /> */}
      <div className='canvas'>
        {/* <div style={{display: "flex"}}> */}
          {nav.mostrarNav === true ? 
          <>
            <div className="whiteGradient"></div>
            <div className="blueGradientdown"></div>
            <div className="greenGradient"></div>
            <div className="lamptop">
              <span className="led"></span>
              <span className="led"></span>
              <div className="led"></div>
              <div className="led"></div>
            </div>
            <div className="navbar">
              <div className="link" onClick={()=>handleClick("aboutme")}>About Me</div>
              <div className="link" onClick={()=>handleClick("projects")}>Projects</div>
              <div className="link" onClick={()=>handleClick("contactme")}>Contact Me</div>
            </div>
            <div className="lampbottom">
              <span className="led"></span>
              <span className="led"></span>
              <div className="led"></div>
              <div className="led"></div>
            </div>
            <div className="blueGradientup"></div>
          </>
          : null}
          <button className={nav.mostrarNav === true ? "hamburguesaPush" : "hamburguesa"} onClick={()=>{handleClick("hamburguesa")}}>☰</button>
          {nav.aboutme && <div className='experiencediv'><Experience /></div>}
          {nav.projects && <div className='experiencediv'><Projects /></div>}
          {nav.contactme && <div className='experiencediv'><ContactMe /></div>}
        <Canvas>
          <CanvasThree />
          {/* <orbitControls args={[camera, gl.domElement]} enableZoom={true}/> */}
          {/* <Html
                position={[-10, 1, 0]}
                wrapperClass="hero-text"
            >Flavio Angulo</Html> */}
        </Canvas>
        <span className="hero-name">Flavio Angulo</span>
        <span className="cargo">Software Developer</span>
        <span className="maquina-escribir cargo" id="typewriterid">""</span>


      </div>
      {/* <Experience /> */}
      <Projects />
      <div className="experience">
        Hola
      </div>
    </div>
  );
}

export default App;
