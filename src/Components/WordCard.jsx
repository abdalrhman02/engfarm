
const WordCard = ({ word }) => {
    return (
        <div className='word-card'>
            <img src={word.img} alt={word.enW} />
            <h2 className='en-w'>{word.enW}</h2>
            <p className='ar-w'>{word.arW}</p>
            <p className='sentence'>{word.enSen}</p>
        </div>
    );
};

export default WordCard;