import React, { useState, useContext, useEffect } from 'react';
import { FirebaseContext } from '../../Store/firebaseContext';
import './Login.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactLoading from 'react-loading';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [shake, setShake] = useState(false);
    const [loading, setLoading] = useState(false);
    const { firebase } = useContext(FirebaseContext);
    const navigate = useNavigate('');

    const userLogin = async (e) => {
        e.preventDefault();
        setLoading(true)
        firebase.auth().signInWithEmailAndPassword(email, password).then((userData) => {
            const user = userData.user;
            localStorage.setItem('userId', user.uid);
            navigate('/home')
        }).catch((error) => {
            setShake(true)
            setLoading(false)
            toast.error(error.message);
        })
    }

    function endAnimation() {
        setShake(false)
    }

    useEffect(() => {
        if (shake) {
            setTimeout(endAnimation, 1000);
        }
    }, [shake]);

    return (
        <>
            <ToastContainer />
            <div className='login-bag'>
                <div className={`login-box col-md-3 ${shake ? 'shake' : ''}`} >
                    <form onSubmit={userLogin} className='login-form' onAnimationEnd={endAnimation} >
                        <h1 className='login-title'>Login</h1>
                        <input className='login-input' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email Address" />
                        <input className='login-input' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                        <button className='login-button' type="submit">Login</button>
                    </form>
                    <a href="/register" className='text-decoration-none text-white' >not a user?</a>
                </div>
                {loading && <>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", zIndex: '11' }}>
                        <div style={{ width: "100px", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(180deg, #B1B1A5 100%, #286DE0 100%)", borderRadius: "15px", zIndex: "11" }}>
                            <ReactLoading height={50} width={50} />
                        </div>
                    </div>
                </>}
            </div>
        </>

    )
}

export default Login