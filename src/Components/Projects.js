import styles from './Projects.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import infoFile from './img/static/Carpeta-documentos.png'
import img1 from './img/Projects/1.jpg'; 
import img2 from './img/Projects/2.jpg'; 
import img3 from './img/Projects/3.jpg'; 
import img4 from './img/Projects/4.jpg'; 
import img5 from './img/Projects/5.jpg'; 
import img6 from './img/Projects/6.jpg'; 

function Projects() {
    
    return ( 
    <div className={styles.box}>
        <div className={styles.container}>

                <span>Projects</span>

                <Swiper
                    spaceBetween={1}
                    slidesPerView={3}
                    grabCursor={true}
                    className={styles.containerSlider}
                    >
                    <SwiperSlide>
                        <img src={img1} alt="img"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="img"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="img"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="img"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} alt="img"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img6} alt="img"/>
                    </SwiperSlide>
                </Swiper>

        </div> 
    </div>);
}

export default Projects;