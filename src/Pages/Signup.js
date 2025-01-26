import { useState } from 'react';
import {auth} from '../firebaseconfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

function Signup() {

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const signup = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err){
            console.error(err)
        }
    }

    return (
        <div className="signup">
            <div className='signupForm'>
                
                <div className='left'>
                    <h1>مرحبا بك</h1>
                    <img src={require('../Images/full-bird.png')} />
                </div>

                <div className='right'>
                    <div className='title'>
                        <h2>انشاء حساب</h2>
                        <p>مرحبا بك في موقع EngFarm لتعليم اللغة الانجليزية</p>
                    </div>

                    <form>
                        <div className='inp'>
                            <label>الاسم</label>
                            <input type='text' onChange={(e) => setUsername(e.target.value)} />
                        </div>

                        <div className='inp'>
                            <label>الايميل</label>
                            <input type='email' onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className='inp'>
                            <label>الرقم السري</label>
                            <input type='password' onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <p>هل لديك حساب بالفعل؟ <Link to={'/Login'}>تسجيل الدخول</Link></p>

                        <button className='btn' onClick={signup}>انشاء حساب</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;