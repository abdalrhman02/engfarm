import Words from '../Data/cards.json';

// Components
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Learn() {
    return (
        <div className="learn">
            <Header />

            <div className='content'>
                <div className='words-list'>
                    <div className='box not-learned'>
                        <h2>80</h2>
                        <p>كلمات لم تتعلمها بعد</p>
                    </div>

                    <div className='box learned'>
                        <h2>13</h2>
                        <p>كلمات تعلمتها</p>
                    </div>

                    <div className='box learning'>
                        <h2>7</h2>
                        <p>كلمات اتدرب عليها</p>
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </div>
    )
}

export default Learn;