// Components
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home">
            <Header />

            <div className='hero'>
                <div className='text'>
                    <h2>تعلم الانجليزية معنا اصبح <b>سهل</b> و <b>ممتع</b>!</h2>
                    <p>هل انت مبتدئ؟ نحن نساعدك في حفظ الكلمات الانجليزية بابسط الطرق و باسرع وقت!</p>
                    <Link to={'/Learn'}><button className='btn'>ابدا الان</button></Link>
                </div>

                <div className='image'>
                    <img src={require('../Images/hero-img.png')} />
                </div>
            </div>

            <div className='how-to-learn'>
                <div className='title'>
                    <h2>كيف ساتعلم الانجليزية مع ENGFARM ؟</h2>
                </div>

                <div className='steps'>
                    <div className='step'>
                        <div className='text'>
                            <h3>1. كل يوم 3-4 كلمات جديدة</h3>
                            <p>نساعدك من خلال بطاقات المفردات على حفظ 3-4 كلمات جديدة كل يوم مع طريقة استخدامها في جملة لتسهيل الفهم و الحفظ.</p>
                        </div>

                        <div className='img'>
                            <img src={require('../Images/step1.png')} className='img-step1' />
                        </div>
                    </div>

                    <div className='step'>
                        <div className='img'>
                            <img src={require('../Images/step2.png')} className='img-step2' />
                        </div>

                        <div className='text'>
                            <h3>2. اختبارات لتثبيت الحفظ</h3>
                            <p>الحفظ وحده ليس كافيا , نجري لك اختبارات بكلمات عشوائية للتأكد من حفظك لها , و يتم تجميع النقاط من خلال الاختبارات.</p>
                        </div>
                    </div>

                    <div className='step'>
                        <div className='text'>
                            <h3>3. تطوير البيئة الافتراضية الخاصة بك</h3>
                            <p>عند تطورك في اللغة الانجليزية و تجميعك للنقاط تستطيع من خلالها تطوير مزرعتك الخاصة في التطبيق!</p>
                        </div>

                        <div className='img'>
                            <img src={require('../Images/step1.png')} className='img-step3' />
                        </div>
                    </div>
                </div>

                <Link to={'/Learn'}><button className='btn'>ابدا الان</button></Link>
            </div>

            <Footer />
        </div>
    )
}

export default Home;