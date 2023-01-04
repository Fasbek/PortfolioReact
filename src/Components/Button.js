import { useContext } from "react";
import { themeContext } from "./Context";

function Button({msj}) {

    const theme = useContext(themeContext);

    const handleClick = (msj) => {
        // let icon = Icon.name;
        console.log(msj);
        theme.dispatch({type: msj});
    }

    return ( 
        <button type="button" onClick={()=>{handleClick(msj)}} className={"button--card"}>
            {/* Más */}{msj.substring(0,3)==="Mas" ? "más" : "volver"}
        </button>
     );
}

export default Button;