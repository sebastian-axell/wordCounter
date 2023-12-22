

const Word = ({
    word,
    count
}) => {

    return (
        <div className="flex justify-end mb-5 bg-yellow-50 rounded-lg text-black">
            <div className="max-w-34 mx-auto w-1/2 break-words">{word}</div>
            <div className="w-1/2">{count}</div>
        </div>
    )
}

export default Word;