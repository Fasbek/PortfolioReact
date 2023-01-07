import styles from './Experience.module.css';
import FileCheck from '@iconscout/react-unicons/icons/uil-file-check';
import Listul from '@iconscout/react-unicons/icons/uil-list-ul';
import User from '@iconscout/react-unicons/icons/uil-user';
import UserArrows from '@iconscout/react-unicons/icons/uil-user-arrows';
import { useContext, useState } from 'react';
import SkillSet from './SkillSet';
import AboutMe from './AboutMe';
import PerfilNav from './PerfilNav';
import { themeContext } from './Context';
import infoFile from './img/static/Carpeta-documentos.png'
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
// import Insta from '@iconscout/react-unicons/icons/uil-';

function Experience() {

    const theme = useContext(themeContext);
    const visible = theme.state.visible;

    const perfilIcons = [
        {   name: "User",
            object: User}, 
        {   name: "FileCheck",
            object: FileCheck},
    ];

    return ( 
        <section className={visible ==="fileCheck" ? styles.containerScreen : styles.container}>
            <div className={styles.whiteGradient}></div>
            <div className={styles.greenGradient}></div>
            <div className={styles.left}>
                <div>
                    <span>About </span>
                    <span>Me</span>
                </div>
                <PerfilNav Icons={perfilIcons} className={styles.perfilnav}/>
                
                {/* <img className="w-20" src={infoFile} /> */}
                
                {/* <div className={styles.wrappercontainer}>
                    <div className={styles.iconwrapper}>
                        <User className={styles.icon} size="3rem" color="white" onClick={()=>{setShow({user: true, fileCheck: false})}} />
                    </div>
                    <div className={styles.iconwrapper}>
                        <FileCheck className={styles.icon} size="3rem" color="white" onClick={()=>{setShow({user: false, fileCheck: true})}}/>
                    </div>
                    {visible}
                    {visible == "user" ? "User" : "NoUser"}
                    {visible == "fileCheck" ? "FileCheck" : "NoFile" }
                </div> */}
            </div>
            <div className={styles.right}>
                {/* <span>Habilidades</span> */}
                <div className={styles.pinkGradient}></div>
                {/* <div className={styles.containerright}> */}
                    {visible === "fileCheck" && <SkillSet />}
                    {visible === "user" && <AboutMe />}
                    {/* <Swiper>
                        <SwiperSlide><div style={{background: "red"}}>Hola</div></SwiperSlide>
                        <SwiperSlide><div style={{background: "green"}}>Hola</div></SwiperSlide>
                        <SwiperSlide><div style={{background: "blue"}}>Hola</div></SwiperSlide>
                    </Swiper> */}
                {/* </div> */}
            </div>
        </section>
     );
}

export default Experience;