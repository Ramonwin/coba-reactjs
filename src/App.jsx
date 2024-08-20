import Button from "./Button"
import Header from "./Header"
import MenuResto from "./MenuResto"
import Mood from "./Mood"

function App(){
  return (
    // fragment <></> atau <div></div>
    <div> 
      <Header/>
      <MenuResto/>
      <Mood hari = "Senin" mood = "😠 " />
      <Mood hari = "Jumat" mood = "🙂" />

      <Button/>
    </div>
  )
}

export default App