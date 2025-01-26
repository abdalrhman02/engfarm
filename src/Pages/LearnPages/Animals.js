import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

function Animals() {
    const AnimalsWords = [
        {"id":1, "img":"https://img.icons8.com/?size=100&id=20903&format=png&color=000000", "audio":"/Audio/dog.mp3", "enW":"Dog", "arW":"كلب" , "enSen":"The dog is playing outside"},
        {"id":2,"img":"https://img.icons8.com/?size=100&id=ZGYXhUYK9ciX&format=png&color=000000", "audio":"/Audio/cat.mp3", "enW":"Cat", "arW":"قطة" , "enSen":"The cat is sleeping on the couch"},
        {"id":3, "img":"https://img.icons8.com/?size=100&id=36840&format=png&color=000000", "audio":"/Audio/parrot.mp3", "enW":"Parrot", "arW":"ببغاء" , "enSen":"The parrot can talk"},
        {"id":4, "img":"https://img.icons8.com/?size=100&id=qlYqIMUdIBvt&format=png&color=000000", "audio":"/Audio/bear.mp3", "enW":"Bear", "arW":"دب" , "enSen":"he bear is sleeping in the cave"},
        {"id":5, "img":"https://img.icons8.com/?size=100&id=NtLw1N1CHb4g&format=png&color=000000", "audio":"/Audio/lion.mp3", "enW":"Lion", "arW":"اسد" , "enSen":"The lion roars loudly"},
        {"id":6, "img":"https://img.icons8.com/?size=100&id=SD6u6oqzzyfZ&format=png&color=000000", "audio":"/Audio/shark.mp3", "enW":"Shark", "arW":"قرش" , "enSen":"The shark swims in the ocean"},
        {"id":7, "img":"https://img.icons8.com/?size=100&id=16043&format=png&color=000000", "audio":"/Audio/dolphin.mp3", "enW":"Dolphin", "arW":"دولفين" , "enSen":"The dolphin jumps out of the water"},
        {"id":8, "img":"https://img.icons8.com/?size=100&id=18549&format=png&color=000000 ", "audio":"/Audio/tiger.mp3", "enW":"Tiger", "arW":"نمر" , "enSen":"The tiger is walking through the jungle"},
        {"id":9, "img":"https://img.icons8.com/?size=100&id=IjJlyWuJyy7A&format=png&color=000000", "audio":"/Audio/koala.mp3", "enW":"Koala", "arW":"كوالا" , "enSen":"The koala is sleeping in the tree"},
        {"id":10, "img":"https://img.icons8.com/?size=100&id=JGDDmNLqJi9e&format=png&color=000000", "audio":"/Audio/fox.mp3", "enW":"Fox", "arW":"ثعلب" , "enSen":"The fox runs fast through the forest"},
        {"id":11, "img":"https://img.icons8.com/?size=100&id=bUKN9UgJWlPm&format=png&color=000000", "audio":"/Audio/giraffe.mp3", "enW":"Giraffe", "arW":"زرافة" , "enSen":"The giraffe eats leaves from tall trees"},
        {"id":12, "img":"https://img.icons8.com/?size=100&id=16019&format=png&color=000000", "audio":"/Audio/chicken.mp3", "enW":"Chicken", "arW":"دجاجة" , "enSen":"The chicken is laying eggs"},
        {"id":13, "img":"https://img.icons8.com/?size=100&id=XCVgh1Ys7TWt&format=png&color=000000", "audio":"/Audio/horse.mp3", "enW":"Horse", "arW":"حصان" , "enSen":"The horse is running in the field"},
        {"id":14, "img":"https://img.icons8.com/?size=100&id=18912&format=png&color=000000", "audio":"/Audio/frog.mp3", "enW":"Frog", "arW":"ضفدع" , "enSen":"The frog jumped into the pond"},
        {"id":15, "img":"https://img.icons8.com/?size=100&id=58715&format=png&color=000000", "audio":"/Audio/butterfly.mp3", "enW":"Butterfly", "arW":"فراشة" , "enSen":"The butterfly flew around the flowers"},
        {"id":16, "img":"https://img.icons8.com/?size=100&id=r6qRtS3cEK-X&format=png&color=000000", "audio":"/Audio/snake.mp3", "enW":"Snake", "arW":"افعى" , "enSen":"The snake is on the ground"}
    ]


    const [currentIndex, setCurrentIndex] = useState(0);
    const [notification, setNotification] = useState("");
    const [showTestWindow, setShowTestWindow] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [correctAnswer, setCorrectAnswer] = useState("");

    const memorizeWords = useRef();
    const testWindow = useRef();
    let chooseCard = useRef();

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === AnimalsWords.length - 1 ? 0 : prevIndex + 1
        );
    };
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? AnimalsWords.length - 1 : prevIndex - 1
        );
    };

    const getRandomIndexes = () => {
        const indexes = [];
        while (indexes.length < 3) {
            const randomIndex = Math.floor(Math.random() * AnimalsWords.length);
            if (!indexes.includes(randomIndex)) indexes.push(randomIndex);
        }
        return indexes;
    };

    const getRandomIndex = () => Math.floor(Math.random() * AnimalsWords.length);
    
    let firstRandomCard = getRandomIndex();
    let secondRandomCard = getRandomIndex();
    let thirdRandomCard = getRandomIndex();

    const startTest = () => {
        const [first, second, third] = getRandomIndexes();
        setCurrentQuestion({ first, second, third });
        setCorrectAnswer(AnimalsWords[first].arW);
        setShowTestWindow(true);
        if (memorizeWords.current && testWindow.current) {
            memorizeWords.current.style.display = "none";
            testWindow.current.style.display = "flex";
        }
    };

    const handleCardClick = (chosenWord) => {
        const isCorrect = chosenWord === correctAnswer;
        setNotification(isCorrect ? "إجابة صحيحة!" : "إجابة خاطئة، حاول مرة أخرى");

        setTimeout(() => {
            const [first, second, third] = getRandomIndexes();
            setCurrentQuestion({ first, second, third });
            setCorrectAnswer(AnimalsWords[first].arW);
            setNotification("");
        }, 3000);
    };

    return (
        <div className="learn-page">
            <Header />

            <div className="memorize-words" ref={memorizeWords}>
                <h2 className="title">تعلم الكلمات و احفظها جيدا</h2>

                <div className="words-slider">
                    <button onClick={prevSlide} className="right-arrow arrow">
                        <img src={require("../../Images/Icons/arrow.png")} alt="Right arrow" />
                    </button>
                    <div className="word-card">
                        <img src={AnimalsWords[currentIndex].img} alt="Animal" />
                        <h2 className="en-w">{AnimalsWords[currentIndex].enW}</h2>
                        <h3 className="ar-w">{AnimalsWords[currentIndex].arW}</h3>
                        <p className="sentence">{AnimalsWords[currentIndex].enSen}</p>
                    </div>
                    <button onClick={nextSlide} className="left-arrow arrow">
                        <img src={require("../../Images/Icons/arrow.png")} alt="Left arrow" />
                    </button>
                </div>

                <div className="start-test" onClick={startTest}>
                    <Link to={""}>
                        <button className="btn">ابدا الاختبار الان</button>
                    </Link>
                </div>
            </div>

            {notification && (
                <div className="notification">
                    {notification}
                </div>
            )}

            {showTestWindow && (
                <div className="test" ref={testWindow}>
                    <div className="question">
                        <h1>
                            ماذا تعني كلمة - <b>{AnimalsWords[firstRandomCard].arW}</b>
                        </h1>
                    </div>

                    <div className="choose-card" ref={chooseCard}>
                        {[firstRandomCard, secondRandomCard, thirdRandomCard].map((cardIndex, i) => (
                            <div className="word-card" key={i} onClick={handleCardClick} >
                                <img src={AnimalsWords[cardIndex].img} alt="Animal" />
                                <h2 className="en-w">{AnimalsWords[cardIndex].enW}</h2>
                                <h3 className="ar-w">{AnimalsWords[cardIndex].arW}</h3>
                                <p className="sentence">{AnimalsWords[cardIndex].enSen}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}

export default Animals;
