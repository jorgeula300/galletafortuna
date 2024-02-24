import phrases from "../utils/phrases.json"
import arrImages from "../utils/arrImages.json"
import calcularArr from "../utils/calcularArr"

const Button = ({ setPhraseRandon, setImageSelected }) => {

    const handlePhrase = () => {
        const phrase = calcularArr(phrases)
        console.log(phrase)
        setPhraseRandon(phrase)
        const backgroundImage = calcularArr(arrImages)
        setImageSelected(backgroundImage)
    }

    return (<button className="bg-[#FEA646] absolute top-[27%] border border-[#9A4546] text-[#9A4546] text-xs lg:text-base rounded-xl px-5 py-2  z-20 " onClick={handlePhrase}>Probar mi suerte</button>);
}

export default Button;