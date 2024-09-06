import { useMemo, useState } from "react"
import Button from "./Button"
import ButtonUseEffect from "./ButtonUseEffect"
import Header from "./Header"
import MenuResto from "./MenuResto"
import Mood from "./Mood"
import ChildComponent from "./ChildComponent"

function App(){
  const [likeCounter, setLikeCounter] = useState(0)
  const [likeSubscriberCounter, setLikeSubscriberCounter] = useState(0)

  function pesanLike(){
    console.log(`Pesan Like Rendered`);
    return (likeCounter<10 ? 'Like kurang dari 10' : 'Mantabzz lebih dari 10');
  }

  const displayPesanLike = useMemo(()=>pesanLike(),[]);

  return (
    // fragment <></> atau <div></div>
    <div> 
      <Header/>
      <MenuResto/>
      <Mood hari = "Senin" mood = "😒" />
      <Mood hari = "Jumat" mood = "🙂" />

      <Button/>
      <ButtonUseEffect/>

      <p>
        <button onClick={()=> setLikeCounter(likeCounter + 1)}>{likeCounter}Like UseMemo 👍 </button> {displayPesanLike}
      </p>
      <p>
        <button onClick={()=> setLikeSubscriberCounter(likeSubscriberCounter +1)}> {likeSubscriberCounter} Subscriber 🎥 </button>
      </p>

      <ChildComponent/>
    </div>
  )
}

export default App