import { useState } from "react";
import styles from './ContactMe.module.css';

function ContactMe() {
    
    const [search, setSearch] = useState("");

    return ( 
        <div className={styles.container}>
            <form >
                <input type="text" name="search" autoComplete="off" onChange={ev=> setSearch(ev.target.value)}></input>
                <button  type="submit">Buscar</button>
                <p>Resultados para: {search}</p>
            </form>
        </div> );
}

export default ContactMe;