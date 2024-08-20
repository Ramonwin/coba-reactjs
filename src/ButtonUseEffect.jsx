import { useEffect, useState } from "react"

function ButtonUseEffect(){
    const [countLike, setCountLike] = useState(0)
    const [countDisLike, setCountDisLike] = useState(0)
    useEffect(()=>{
        console.log(`Wooowww ${countLike} | Dislike ${countDisLike}`);
    });

  return (
    <>
    <button onClick={()=>setCountLike(countLike +1)}>{countLike} Like 👍 useEffect</button>
    <button onClick={()=>setCountDisLike(countDisLike +1)}>{countDisLike} Dislike 👎  useEffect</button>
    </>
  )
}

export default ButtonUseEffect