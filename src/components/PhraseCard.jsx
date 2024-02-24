const PhraseCard = ({phraseRandon}) => {
    const {phrase,author} = phraseRandon
    return (<div className=" bg-white rounded-lg  shadow-lg px-4
 flex flex-col justify-center items-center overflow-hidden  gap-1  text-center font-bold text-2xl font-mono text-black w-[300px] md:w-[50vw] lg:w-[50vw] h-[20vh]" >
        <p className=" text-sm lg:text-md"> {phrase}</p>
        <span className=" text-xs font-bold lg:text-lg">{author}</span>
    </div>
    );
}

export default PhraseCard;