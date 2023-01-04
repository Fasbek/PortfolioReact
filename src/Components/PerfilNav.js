import { useContext, useEffect, useState } from 'react';
import { themeContext } from './Context';
import styles from './PerfilNav.module.css'

function PerfilNav({Icons}) {

    const theme = useContext(themeContext);
    const [label, setLabel] = useState("User");

    // const visible = theme.state.visible;

    const handleClick = (Icon) => {
        let icon = Icon.name;
        setLabel(icon);
        console.log(icon);
        theme.dispatch({type: icon});
    }

    // useEffect(()=>{
        
    // },[label]);

    return (
        <> 
            <div className={styles.wrappercontainer}>
                {Icons.map((Icon) => 
                    <div onClick={()=>{handleClick(Icon)}} className={label === Icon.name ? styles.iconwrappernm : styles.iconwrapper} style={label === Icon.name ? {width: "12rem"} : {width: "3rem"}} >
                        <Icon.object className={styles.icon} 
                            size="2.5rem" color="white" 
                            /> 
                        {label === Icon.name && <span style={{paddingLeft: "1rem", color: "white", fontSize: "1.5rem"}}>{Icon.name}</span>} 
                    </div>
                    )}
            </div>
            
        </>
        
     );
}

export default PerfilNav;