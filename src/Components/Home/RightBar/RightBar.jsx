import React from 'react'
import './RightBar.scss'

function RightBar() {
    return (
        <div className="col-md-3 right-bar">
            <div className='right-first-box' >
                <div className='d-flex justify-content-center '>
                    <p className='right-bar-title text-white'>Become a Seller</p>
                </div>
            </div>
            <div className='right-second-box'>
                <div className="right-scr-content" >
                    <div className='right-scr-data'>
                        <img src="/images/rightimg1.png" alt="Noimage" className='img-fluid right-img' />
                        <div className='overlay-content'>
                            <img src="/images/rightimg21.png" alt="OverlayImage" className='overlay-img' />
                            <div className='overlay-text-container'>
                                <p className='overlay-title'>Thomas Edward</p>
                                <p className='overlay-text'>@thewildwithyou</p>
                            </div>
                        </div>
                    </div>
                    <div className='right-scr-data'>
                        <img src="/images/rightimg2.png" alt="Noimage" className='img-fluid right-img' />
                        <div className='overlay-content'>
                            <img src="/images/rightimg22.png" alt="OverlayImage" className='overlay-img' />
                            <div className='overlay-text-container'>
                                <p className='overlay-title'>Chris Doe</p>
                                <p className='overlay-text'>@thewildwithyou</p>
                            </div>
                        </div>
                    </div>
                    <div className='right-scr-data'>
                        <img src="/images/rightimg3.png" alt="Noimage" className='img-fluid right-img' />
                        <div className='overlay-content'>
                            <img src="/images/rightimg23.png" alt="OverlayImage" className='overlay-img' />
                            <div className='overlay-text-container'>
                                <p className='overlay-title'>Emilie Jhones</p>
                                <p className='overlay-text'>@thewildwithyou</p>
                            </div>
                        </div>
                    </div>
                    <div className='right-scr-data'>
                        <img src="/images/rightimg4.png" alt="Noimage" className='img-fluid right-img' />
                        <div className='overlay-content'>
                            <img src="/images/rightimg24.png" alt="OverlayImage" className='overlay-img' />
                            <div className='overlay-text-container'>
                                <p className='overlay-title'>Jessics Williams</p>
                                <p className='overlay-text'>@thewildwithyou</p>
                            </div>
                        </div>
                    </div>
                    <div className='right-scr-data'>
                        <img src="/images/rightimg5.png" alt="Noimage" className='img-fluid right-img' />
                        <div className='overlay-content'>
                            <img src="/images/rightimg21.png" alt="OverlayImage" className='overlay-img' />
                            <div className='overlay-text-container'>
                                <p className='overlay-title'>David Silve</p>
                                <p className='overlay-text'>@thewildwithyou</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightBar