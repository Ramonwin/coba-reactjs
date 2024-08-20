import { useState } from "react";

function Button(){
    const [counter,setCounter] = useState(0);

    let newCounter = 0;
    function clickHandler(){
        newCounter = counter + 1;
        console.log(`saya di klik ${newCounter} kali`);
        setCounter(newCounter)
    }

    function clickHandlerParam(nama){
        console.log(`Saya diklik oleh ${nama}`);

    }
    

    return(
        <>
        <button onClick={clickHandler}>Klik Saya 🧮 {counter} kali </button>
        <button onClick={()=>clickHandlerParam('Ramon')}>Klik Saya 2 🧮 </button>
        </>
    )
}

export default Button