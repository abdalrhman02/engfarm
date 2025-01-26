import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Components
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import WordCard from '../Components/WordCard';


function Learn() {
    return (
        <div className="learn-test">
            <Header />

            <div className='content'>
                <div className='vir-env'>
                    <div className='content'>

                    </div>
                </div>

                <div className='words-types'>
                    <Link to={""}>
                        <div className='type'>
                            <img src={require('../Images/Icons/adj.png')} />
                            <div className='text'>
                                <h2>الصفات</h2>
                                <p>تعلم الصفات كلها من هنا</p>
                            </div>
                        </div>
                    </Link>

                    <Link to={""}>
                        <div className='type'>
                            <img src={require('../Images/Icons/verb.png')} />
                            <div className='text'>
                                <h2>الافعال</h2>
                                <p>تعلم اهم الافعال</p>
                            </div>
                        </div>
                    </Link>

                    <Link to={""}>
                        <div className='type'>
                            <img src={require('../Images/Icons/colors.png')} />
                            <div className='text'>
                                <h2>الالوان</h2>
                                <p>ستتعلم كل الالوان من هنا</p>
                            </div>
                        </div>
                    </Link>

                    <Link to={""}>
                        <div className='type'>
                            <img src={require('../Images/Icons/jobs.png')} />
                            <div className='text'>
                                <h2>الوظائف</h2>
                                <p>ما هو عملك باللغة الانجليزية؟</p>
                            </div>
                        </div>
                    </Link>


                    <Link to={""}>
                        <div className='type'>
                            <img src={require('../Images/Icons/family.png')} />
                            <div className='text'>
                                <h2>العائلة</h2>
                                <p>تعلم اسماء افراد عائلتك بالانجليزية</p>
                            </div>
                        </div>
                    </Link>

                    <Link to={"/Animals"}>
                        <div className='type'>
                            <img src={require('../Images/Icons/animal.png')} />
                            <div className='text'>
                                <h2>الحيوانات</h2>
                                <p>تعلم اسماء الحيوانات</p>
                            </div>
                        </div>
                    </Link>

                    <Link to={""}>
                        <div className='type'>
                            <img src={require('../Images/Icons/places.png')} />
                            <div className='text'>
                                <h2>الاماكن</h2>
                                <p>ما هو اسم هذا المكان؟</p>
                            </div>
                        </div>
                    </Link>

                    <Link to={""}>
                        <div className='type'>
                            <img src={require('../Images/Icons/tools.png')} />
                            <div className='text'>
                                <h2>الادوات</h2>
                                <p>اسماء الادوات المهمة</p>
                            </div>
                        </div>
                    </Link>

                    <Link to={""}>
                        <div className='type'>
                            <img src={require('../Images/Icons/fruit.png')} />
                            <div className='text'>
                                <h2>خضروات و فواكه</h2>
                                <p>ما هي الفاكهة المفضلة لديك</p>
                            </div>
                        </div>
                    </Link>

                    <Link to={""}>
                        <div className='type'>
                            <img src={require('../Images/Icons/devices.png')} />
                            <div className='text'>
                                <h2>الاجهزة</h2>
                                <p>اسماء الاجهزة الالكترونية</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Learn;