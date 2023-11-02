import React from 'react';
import './LeftBar.scss';
import { useNavigate } from 'react-router-dom';


function LeftBar() {

    const navigate = useNavigate('')
    const logout = async (e) => {
        e.preventDefault();
        localStorage.removeItem('userId');
        navigate('/')
    }

    return (
        <div className="col-md-3 left-bar">
            <div className='left-first-box' >
                <div className='d-flex justify-content-center '>
                    <p className='left-bar-title'>LOGO</p>
                </div>
            </div>
            <div className='left-second-box'>
                <div className='left-inner'>
                    <br />
                    <div className='left-data'>
                        <p><i class="fas fa-home" style={{ marginRight: '0.8em' }}></i>   Home</p>
                    </div>
                    <div className='left-data'>
                        <p style={{ color: '#8D8D8D' }}><i class="fas fa-bell" style={{ marginRight: '0.8em' }}></i> Notification</p>
                    </div>
                    <div className='left-data'>
                        <p style={{ color: '#8D8D8D' }}><i className="fas fa-heart" style={{ marginRight: '0.8em' }}></i> Shop</p>
                    </div>
                    <div className='left-data'>
                        <p style={{ color: '#8D8D8D' }}><i class="fas fa-envelope" style={{ marginRight: '0.8em' }}></i> Conversation</p>
                    </div>
                    <div className='left-data'>
                        <p style={{ color: '#8D8D8D' }}><i class="fas fa-wallet" style={{ marginRight: '0.8em' }}></i> Wallet</p>
                    </div>
                    <div className='left-data'>
                        <p style={{ color: '#8D8D8D' }}><i className="fas fa-star" style={{ marginRight: '0.8em' }}></i> Subscription</p>
                    </div>
                    <div className='left-data'>
                        <p style={{ color: '#8D8D8D' }}><i class="fas fa-user" style={{ marginRight: '0.8em' }}></i> My Profile</p>
                    </div>
                    <div className='left-data'>
                        <p style={{ color: '#8D8D8D' }}><i className="fas fa-cog" style={{ marginRight: '0.8em' }}></i> Settings</p>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className='left-data' onClick={logout}>
                        <p style={{ color: '#88C2BB' }}><i className="fas fa-sign-out-alt" style={{ marginRight: '0.8em' }}></i> Logout</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftBar