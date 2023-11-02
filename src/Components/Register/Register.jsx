import React, { useContext, useEffect, useState } from 'react';
import './Register.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FirebaseContext } from '../../Store/firebaseContext';
import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';

function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [shake, setShake] = useState(false);
    const [loading, setLoading] = useState(false);
    const { firebase } = useContext(FirebaseContext);
    const navigate = useNavigate('')

    const registerUser = async (e) => {
        e.preventDefault();
        setLoading(true)

        if (!name || !email || !password || !confirmPassword) {
            toast.error('Please fill all data');
            setShake(true);
            setLoading(false);
            return;
        }

        const nameRegex = /^[A-Z][a-zA-Z]{4,29}$/;
        if (!name.match(nameRegex)) {
            toast.error('Name should start with a capital letter and be between 5 to 30 characters long (only alphabets).');
            setShake(true);
            setLoading(false);
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.match(emailRegex)) {
            toast.error('Please enter a valid email address.');
            setShake(true);
            setLoading(false);
            return;
        }

        if (password.length < 6 || !/\d{6}/.test(password)) {
            toast.error('Password should be at least 6 characters long and contain 6 numbers.');
            setShake(true);
            setLoading(false);
            return;
        }
        if (password !== confirmPassword) {
            toast.error('Password do not match');
            setShake(true);
            setLoading(false);
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
            result.user.updateProfile({ displayName: name }).then(() => {
                firebase.firestore().collection('relu_users').add({
                    id: result.user.uid,
                    Name: name,
                    Email: email
                }).then(() => {
                    navigate('/')
                }).catch((error) => {
                    setShake(true)
                    setLoading(false);
                    toast.error(error.message)
                })
            })
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
            <div className='reg-bag'>
                <div className={`reg-box col-md-3 ${shake ? 'shake' : ''}`} >
                    <form onSubmit={registerUser} onAnimationEnd={endAnimation} className='reg-form' >
                        <h1 className='reg-title'>Register</h1>
                        <input className='reg-input' value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
                        <input className='reg-input' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email Address" />
                        <input className='reg-input' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                        <input className='reg-input' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" />
                        <button className='reg-button' type="submit">Register</button>
                    </form>
                    <a href="/" className='text-decoration-none text-white p-3' >already a user?</a>
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

export default Register