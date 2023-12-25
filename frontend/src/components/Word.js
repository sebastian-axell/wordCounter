

const Word = ({
    word,
    count
}) => {

    return (
        <div className="flex justify-end pl-3 bg-yellow-50 rounded-lg h-8 max-h-8 text-black">
            <div className="max-w-34 w-10/12 break-words pt-1 pr-1 overflow-hidden hover:overflow-y-scroll">{word}</div>
            <div className="w-2/12 flex justify-center border-l border-black my-auto">{count}</div>
        </div>
    )
}

export default Word;