import styles from './SkillSet.module.css';
import { ReactComponent as HtmlIcon} from './img/skills/html.svg';
import { ReactComponent as CssIcon} from './img/skills/css-svgrepo-com.svg';
import { ReactComponent as JsIcon} from './img/skills/js-svgrepo-com.svg';
import { ReactComponent as NodeIcon} from './img/skills/nodejs-svgrepo-com.svg';
import { ReactComponent as NpmIcon} from './img/skills/npm-icon-svgrepo-com.svg';
import { ReactComponent as BashIcon} from './img/skills/bash.svg';
import { ReactComponent as GitIcon} from './img/skills/git-svgrepo-com.svg';
import { ReactComponent as AngularIcon} from './img/skills/angular-svgrepo-com.svg';
import { ReactComponent as TailwindIcon} from './img/skills/tailwind-svgrepo-com.svg';
import { ReactComponent as JavaIcon} from './img/skills/java-svgrepo-com.svg';
import { ReactComponent as SpringIcon} from './img/skills/spring-icon-svgrepo-com.svg';
import { ReactComponent as HibernateIcon} from './img/skills/hibernate-svgrepo-com.svg';
import { ReactComponent as PrimeNgIcon} from './img/skills/_presskit_primeng-logo.svg';
import { ReactComponent as ThreejsIcon} from './img/skills/threejs-1.svg';
import Button from './Button';
import { themeContext } from './Context';
import { useContext } from 'react';

function SkillSet() {

    // const skillsetIcons = [HtmlIcon, CssIcon, JsIcon, TailwindIcon, PrimeNgIcon, 
    //     AngularIcon, NodeIcon, NpmIcon, GitIcon, JavaIcon, SpringIcon,
    //     HibernateIcon];
    
    const theme = useContext(themeContext);
    console.log(theme);
    const cardFlipFront = theme.state.cardflipFront;
    const cardFlipBack = theme.state.cardflipBack;
    const cardFlipOther = theme.state.cardflipOther;
    const visible = theme.state.visible;
    // console.log(cardFlip);
    console.log(visible)

    // const perfilIcons = [
    //     {   name: "User",
    //         object: User}, 
    //     {   name: "FileCheck",
    //         object: FileCheck},
    // ];

    // const handleClick= ()=>{
    //     console.log(cardFlipFront);
    //     console.log(cardFlipBack);
    // }

    const frontEndIcons = [HtmlIcon, CssIcon, JsIcon, ThreejsIcon, TailwindIcon, PrimeNgIcon, 
        AngularIcon, NodeIcon, NpmIcon];

    const backEndIcons = [NodeIcon, NpmIcon, JavaIcon, SpringIcon,
        HibernateIcon];
    
    const otherIcons = [GitIcon]; 
    return ( 
        <div className="prueba">
        <div className={styles.cards}> 
            
            <div className={cardFlipFront === "volver" ? styles.girar : styles.card} style={{left: 80}}> 
                <div className={styles.cardFront}>
                    <span>FrontEnd</span>
                    <div className={styles.iconWrapper}>{frontEndIcons.map((Icon)=><Icon style={{top: "0"}} className={styles.icon}></Icon>)}
                    </div>
                    <Button msj={"MasFront"}/> 
                </div>
                <div className={styles.cardBack}>
                    <span>FrontEnd</span>
                    <ul>
                        <li>Sitios Responsive</li>
                        <li>Conexión con API</li>
                        <li>Tiempo de carga bajo</li>
                    </ul>
                    <Button msj={"VolverFront"}/> 
                </div>
            </div>
            <div className={cardFlipBack === "volver" ? styles.girar : styles.card} style={{top: 80, left: 380}}>
                <div className={styles.cardFront}>
                    <span>BackEnd</span>
                    <div className={styles.iconWrapper}>{backEndIcons.map((Icon)=><Icon className={styles.icon}></Icon>)}
                    </div>
                    <Button msj={"MasBack"}/> 
                </div>
                <div className={styles.cardBack}>
                    <span>BackEnd</span>Hola
                    <Button msj={"VolverBack"}/> 
                </div>
            </div>
            <div className={cardFlipOther === "volver" ? styles.girar : styles.card} style={{top: 250, left: 200}}>
                <div className={styles.cardFront}>
                    <span>Other Tecnologies</span>
                    <div className={styles.iconWrapper}>{otherIcons.map((Icon)=><Icon className={styles.icon}></Icon>)}
                    </div>
                    <Button msj={"MasOther"}/> 
                </div>
                <div className={styles.cardBack}>
                    <span>Other Tecnologies</span>Hola
                    <Button msj={"VolverOther"}/> 
                </div>
            </div>
            </div>
            {/* <button onClick={() => handleClick()}>click</button> */}
            {/* {skillsetIcons.map((Icon)=><Icon className={styles.icon}></Icon>)} */}
            {/* <Icon className={styles.icon}></Icon> */}
        </div>
     );
}

export default SkillSet;