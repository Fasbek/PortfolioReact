import logo from './logo.svg';
import './App.css';
// import { Canvas } from '@react-three/fiber';
import CanvasThree from './Components/CanvasThree'
import { Canvas, extend } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import { Html } from '@react-three/drei';
import Typewriter from 'typewriter-effect';
import '../node_modules/swiper/swiper-bundle.min.css';
import { OrbitControls } from  'three/examples/jsm/controls/OrbitControls';

extend({OrbitControls})


function App() {

  const [ contar, setContar ] = useState(0);
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
      
      

      

      // setInterval()

      

  },[]);

  const handleClick = () => {
      setContar(contar + 1);
      console.log('en click');
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
        {/* <button className="button" ref={buttonRef} onClick={handleClick}>{contar}</button> */}

        {/* <span className='write' id="typewriterid">{tecnology}</span> */}

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
      <Experience />
      <Projects />
      <div className="experience">
        Hola
      </div>
    </div>
  );
}

export default App;
