function Button(){

    function clickHandler(){
        console.log('saya di klik');
    }

    function clickHandlerParam(nama){
        console.log(`Saya diklik oleh ${nama}`);

    }
    

    return(
        <>
        <button onClick={clickHandler}>Klik Saya 🧮 </button>
        <button onClick={()=>clickHandlerParam('Ramon')}>Klik Saya 2 🧮 </button>
        </>
    )
}

export default Button