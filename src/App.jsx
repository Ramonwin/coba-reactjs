import Header from "./Header"
import MenuResto from "./MenuResto"
import Mood from "./Mood"

function App(){
  return (
    <div>
      <Header/>
      <MenuResto/>
      <Mood hari = "Senin" mood = "😠 " />
      <Mood hari = "Jumat" mood = "🙂" />
    </div>
  )
}

export default App