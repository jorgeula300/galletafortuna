import phrases from "./utils/phrases.json"
import arrImages from "./utils/arrImages.json"
import calcularArr from "./utils/calcularArr"
import { useState } from "react"
import PhraseCard from "./components/PhraseCard"
import Button from "./components/Button"

function App() {
  const fraseInicial = calcularArr(phrases)
  const imagenRandom = calcularArr(arrImages)
  const [phraseRandon, setPhraseRandon] = useState(fraseInicial)
  const [imageSelected, setImageSelected] = useState(imagenRandom)
  const objStyle = {
    backgroundImage: `url(/fondo${imageSelected}.png)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    height: "100vh"
  }
  return (<div style={objStyle} className=" w-full h-[100vh] flex flex-col justify-center items-center text-white">

   
      <h1 className=" w-[50%] lg:w-[30%] text-center stroke text-2xl sm:text-3xl absolute top-[10%]  font-bold">
        GALLETAS DE LA FORTUNA
      </h1>

      <Button setPhraseRandon={setPhraseRandon} setImageSelected={setImageSelected} />
      <PhraseCard phraseRandon={phraseRandon} />
   
    


  </div>

  )

}

export default App
