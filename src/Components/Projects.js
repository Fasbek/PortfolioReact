import styles from './Projects.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import infoFile from './img/static/Carpeta-documentos.png'
import img1 from './img/Projects/1.jpg'; 
import img2 from './img/Projects/2.jpg'; 
import img3 from './img/Projects/3.jpg'; 
import img4 from './img/Projects/4.jpg'; 
import img5 from './img/Projects/5.jpg'; 
import img6 from './img/Projects/6.jpg'; 
import { useState } from 'react';
import { handler } from 'tailwindcss-neumorphism';

function Projects() {

    const projectsDesc = "En estos proyectos muestro algunas de mis habilidades como desarrollador Fullstack. Todos hacen peticiones a un servidor con arquitectura de microservicios. Haz click en alguno para mostrar la descripción.";

    const [projects, setProjects] = useState({
        objects: [
            {   
                id: 1,
                image: img1,
                tecnologies: "React, javascript, tailwind, css, node, npm and three.js",
            },
            {
                id: 2,
                image: img2,
                tecnologies: "Angular, Typescript, PrimeNg, css, node and npm",
            },
            {
                id: 3,
                image: img3,
                tecnologies: "3, Angular, Typescript, PrimeNg, css, node and npm",
            }
        ],
    })

    const [techs, setTechs] = useState(projectsDesc);

    // let techs = "Hey";
    let ids = 0;

    const handleClick = (id) => {
        let objFilter = projects.objects.filter(object=>object.id == id);
        setTechs(objFilter[0].tecnologies);
        ids = id;
        console.log(techs);
    }
    
    return ( 
    <div className={styles.box}>
        <div className={styles.container}>

                <span>Projects</span>
                
                <Swiper
                    spaceBetween={1}
                    slidesPerView={2}
                    grabCursor={true}

                    className={styles.containerSlider}
                    >
                    {/* <SwiperSlide>
                        <img src={projects.objects[0].image} alt="img"/>
                        {projects.objects[0].image}
                    </SwiperSlide>     */}
                    {projects.objects.map((object)=>
                        <SwiperSlide onClick={()=>handleClick(object.id)}>
                            <img src={object.image} alt="img"/>
                        </SwiperSlide>
                    )}       

                </Swiper>
                <div className={styles.description}>{techs}</div>
        </div> 
    </div>);
}

export default Projects;