import profileImg from './img/Perfil/perfilImg.jpg'
import styles from './AboutMe.module.css'; 

function AboutMe() {
    return ( 
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img className={styles.img} src={profileImg} /> 
            </div>
            <span>
                Estudiante de la carrera profesional de física, con conocimientos en matemática y estadística para potenciar los conocimientos adquiridos en desarrollo de aplicaciones 
                web y de escritorio. Además, cuento con experiencia en el desarrollo Backend, Frontend y 
                manejo de Bases de Datos.
            </span>
            <div className={styles.whiteGradient}></div>
        </div>
    );
}

export default AboutMe;